"use client";
import { PlusIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { db } from "../firebase";

const NewChat = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const createChat = async () => {
    const doc = await addDoc(collection(db, "chats", session?.user?.email!, "chats"), {
      users: [session?.user?.email!],
      createdAt: serverTimestamp(),
    });
    router.push(`/chat/${doc.id}`);
  };

  return (
    <div onClick={createChat} className="border border-gray-700 items-center justify-center chatRow">
      <PlusIcon className="h-4 w-4 " />
      <h1>New Chat</h1>
    </div>
  );
};

export default NewChat;
