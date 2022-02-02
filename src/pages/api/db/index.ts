import type { NextApiRequest, NextApiResponse } from 'next'
//import {dbConect}  from "../../../utils/mongoose"
import Home from "../../../models/home"

//dbConect()

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(Home)
}