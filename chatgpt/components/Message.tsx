import { DocumentData } from "firebase/firestore";
import { useSession } from "next-auth/react";

type Props = {
  message: DocumentData;
};

const Message = ({ message }: Props) => {
  const { data: session } = useSession();
  const isChatGPT = message.user.name === "ChatGPT";
  return (
    <div className={`py-5 text-white ${isChatGPT && "bg-[#434654]"}`}>
      <div className="flex space-x-5 max-w-2xl mx-auto">
        <img src={message.user.avatar} className="h-8 w-8" alt="ahmet" />
        <p className="pt-1 text-sm">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
