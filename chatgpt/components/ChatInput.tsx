/** @format */

"use client";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { db } from "../firebase";

type Props = {
  chatId: string;
};

const ChatInput = ({ chatId }: Props) => {
  const model = "EleutherAI/gpt-neo-2.7B";
  const [prompt, setPrompt] = useState("");
  const { data: ahmet } = useSession();
  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;

    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      createdAt: serverTimestamp(),
      text: input,
      user: {
        _id: ahmet?.user?.email!,
        name: ahmet?.user?.name!,
        avatar: ahmet?.user?.image || `https://ui-avatars.com/api/?name=${ahmet?.user?.name}`,
      },
    };
    await addDoc(collection(db, "users", ahmet?.user?.email!, "chats", chatId, "messages"), message);

    const notification = toast.loading("ChatGPT is thinking...");

    await fetch("/api/askQuestion", { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        ahmet,
      }),
    }).then(
      // toast notification succesful
      () => {
        toast.success("ChatGPT has responded!", { id: notification });
      }
    );
  };
  return (
    <div className="bg-gray-700/50 text-gray-500 rounded-lg text-sm focus:outline-none">
      <form onSubmit={sendMessage} className="p-5 space-x-5 flex">
        <input
          className="flex-1 bg-transparent focus:outline-none disabled:cursor-not-allowed 
          disabled:text-red-900"
          disabled={!ahmet}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your message here..."
          type="text"
        />
        <button className="bg-[#11A37F] rounded-full p-2  disabled:bg-red-900" disabled={!prompt || !ahmet} type="submit">
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45 text-gray-500" />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
