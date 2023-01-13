// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type gethello = {
	name: string;
	sex: boolean;
};

export default function gethello(req: NextApiRequest, res: NextApiResponse<gethello>) {
	res.status(200).json({ name: '成功', sex: true });
}

