"use client";

import { collection } from "firebase/firestore";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";
import NewChat from "./NewChat";

const Sidebar = () => {
  const { data: ahmet } = useSession();
  const [ chats, loading ,error] = useCollection(ahmet && collection(db, "users", ahmet.user?.email!, "chats"));
  console.log(chats);

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />
          <div>{/* Model Selection  */}</div>
          {chats?.docs.map((chat: any) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {ahmet && (
        <img
          onClick={() => signOut()}
          className="h-12 w-12 rounded-full cursor-pointer mb-2 mx-auto hover:opacity-50"
          src={ahmet.user?.image!}
          alt="Profile Picture"
        />
      )}
    </div>
  );
};

export default Sidebar;
