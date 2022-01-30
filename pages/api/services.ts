import { NextApiRequest, NextApiResponse } from "next";
import { services } from "../../components/data";

export default (req:NextApiRequest, res:NextApiResponse) => {
res.status(200).json({services})
}