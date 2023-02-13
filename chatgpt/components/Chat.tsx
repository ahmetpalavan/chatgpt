"use client";

import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Message from "./Message";
import  { useRouter } from "next/navigation";

type Props = {
  chatId: string;
};

const Chat = ({ chatId }: Props) => {
  const { data: session } = useSession();
  const [ahmet] = useCollection(
    session && query(collection(db, "users", session.user?.email!, "chats", chatId, "messages"), orderBy("createdAt", "asc"))
  );
  return <div className="flex-1 overflow-y-auto overflow-x-hidden">
    {ahmet?.empty && (
      <>
        <h1 className="text-center text-white mt-10">Type a prompt in below to get started</h1>
        <ArrowDownCircleIcon className="h-10 w-10 mx-auto mt-5 text-white animate-bounce cursor-pointer " />
      </>
    )}
    {ahmet?.docs.map((message) => (
      <Message key={message.id} message={message.data()} />
    ))}
  </div>;
};

export default Chat;
