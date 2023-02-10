/** @format */

"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import { useState } from "react";

type Props = {
  chatId: string;
};

const ChatInput = ({ chatId }: Props) => {
  const [prompt, setPrompt] = useState("");
  const { data: ahmet } = useSession();
  return (
    <div className="bg-gray-700/50 text-gray-500 rounded-lg text-sm focus:outline-none">
      <form className="p-5 space-x-5 flex">
        <input
          className="flex-1 bg-transparent focus:outline-none disabled:cursor-not-allowed 
          disabled:text-red-900"
          disabled={!ahmet}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your message here..."
          type="text"
        />
        <button
        className="bg-[#11A37F] rounded-full p-2  disabled:bg-red-900" 
        disabled={!prompt || !ahmet}
        type="submit">
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45 text-gray-500" />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
