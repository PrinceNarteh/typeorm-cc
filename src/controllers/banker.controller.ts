import { Request, Response } from "express";
import { Banker } from "../entities/Banker";

const getBankerById = async (bankerId: string): Promise<Banker> => {
  const banker = await Banker.findOne({ where: { id: parseInt(bankerId) } });
  if (!banker) {
    throw new Error(`Banker with id ${banker} not found`);
  }
  return banker;
};

export const getBanker = async (req: Request, res: Response) => {
  const { bankerId } = req.params;
  const banker = await getBankerById(bankerId);
  res.status(200).json({ banker });
};

export const getAllBankers = async (req: Request, res: Response) => {
  const bankers = await Banker.find();
  res.status(200).json(bankers);
};

export const createBanker = async (req: Request, res: Response) => {};

export const updateBanker = async (req: Request, res: Response) => {};

export const deleteBanker = async (req: Request, res: Response) => {
  const { bankerId } = req.params;
  const banker = await getBankerById(bankerId);
  await banker.remove();
  res.status(200).json({ msg: "Banker deleted successfully" });
};
