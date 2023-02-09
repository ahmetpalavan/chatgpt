"use client";
import { useSession, signOut } from "next-auth/react";
import NewChat from "./NewChat";
const Sidebar = () => {
  const { data: ahmet } = useSession();

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />
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
