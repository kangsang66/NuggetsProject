import type { NextApiRequest, NextApiResponse } from 'next';

type getdemo = {
	name: string;
	sex: boolean;
	age?: number;
};

export default function getdemo(req: NextApiRequest, res: NextApiResponse<getdemo>) {
	res.status(200).json({ name: '状态为:200', sex: false });
}
