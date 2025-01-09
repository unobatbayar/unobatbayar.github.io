﻿// pages/api/robots.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(`
    User-agent: *
    Disallow: /
  `);
}
