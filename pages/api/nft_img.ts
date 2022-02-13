// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import ico from "../../public/favicon.ico";
import mergeImages from "merge-images";
type Data = any;
import fs from "fs";
import path from "path";
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const tokenId = Number(req.query.id);
	const filePath = path.resolve(".", `./public/imgs/nft${tokenId}.gif`);
	let imageBuffer;
	try {
		imageBuffer = fs.readFileSync(filePath);
	} catch (error) {
		imageBuffer = fs.readFileSync(
			path.resolve(".", `./public/imgs/nft1.gif`)
		);
	}
	res.setHeader("Content-Type", "image/gif");
	res.send(imageBuffer);
}
