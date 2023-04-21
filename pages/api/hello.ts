// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import code_data from "../../data/code_data";
import type { Code } from "../../data/code_data";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Code[]>
) {
  // res.status(200).json({ name: "John Doe", rock: "Boryt Stoopoid" });
  res.status(200).json(code_data);
}
