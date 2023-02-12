// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";
import { adminDb } from "../../firebaseAdmin";
import query from "../../lib/queryApi";

type Data = {
  answer: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { prompt, chatId, model, ahmet } = req.body;
  if (!prompt) {
    res.status(400).json({ answer: "No prompt provided" });
    return;
  }
  if (!chatId) {
    res.status(400).json({ answer: "No chatId provided" });
    return;
  }

  //   chatgpt query
  const response = await query(prompt, model, chatId);
  const message: Message = {
    text: response || "I don't know what to say",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "ChatGPT",
      name: "ChatGPT",
      avatar: "https://links.papareact.com/89k",
    },
  };

  //   add message to firebase
  await adminDb.collection("users").doc(ahmet?.user?.email).collection("chats").doc(chatId).collection("messages").add(message);

  res.status(200).json({ answer: message.text });
}
