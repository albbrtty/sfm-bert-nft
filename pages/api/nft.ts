// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    title: string | any;
    type: "object";
    properties: {
        name: {
            type: string | string[] | any;
            description: string;
        };
        description: {
            type: string;
            description: string;
        };
        image: {
            type: string;
            description: string;
        };
    };
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const tokenId = Number(req.query.id);
    res.status(200).json({
        title: `bertbert-sfm nft`,
        type: "object",
        properties: {
            name: {
                type: "string",
                description: "bertbert-sfm nft",
            },
            description: {
                type: "string",
                description: "An nft you pay for with sfm to mint",
            },
            image: {
                type: "string",
                description: "",
            },
        },
    });
}
