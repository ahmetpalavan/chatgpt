import type { NextApiRequest, NextApiResponse } from "next";
import openai from "../../lib/chatgpt";

type Option = {
  label: string;
  value: string;
};

type Data = {
  engines: Option[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const models = await openai.listModels().then((res) => res.data.data);

  const engines = models.map((model) => {
    return {
      label: model.id,
      value: model.id,
    };
  });
  res.status(200).json({ engines });
}

