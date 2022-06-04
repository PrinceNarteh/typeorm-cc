import { Request, Response } from "express";
import { Banker } from "../entities/Banker";

export const getBanker = async (req: Request, res: Response) => {
  const { bankerId } = req.params;
  const banker = await Banker.findOne({ where: { id: parseInt(bankerId) } });
  res.status(200).json({ banker });
};
export const getAllBankers = async (req: Request, res: Response) => {
  const bankers = await Banker.find();
  res.status(200).json(bankers);
};
export const createBanker = async (req: Request, res: Response) => {};
export const updateBanker = async (req: Request, res: Response) => {};
export const deleteBanker = async (req: Request, res: Response) => {};
