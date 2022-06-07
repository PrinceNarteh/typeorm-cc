import { Request, Response } from "express";
import { Client } from "../entities/Client";
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

export const createBanker = async (req: Request, res: Response) => {
  const { firstName, lastName, email, staffNumber } = req.body;
  const banker = Banker.create({
    firstName,
    lastName,
    email,
    staffNumber,
  });
  await banker.save();
  return res.status(201).json(banker);
};

export const updateBanker = async (req: Request, res: Response) => {};

export const deleteBanker = async (req: Request, res: Response) => {
  const { bankerId } = req.params;
  const banker = await getBankerById(bankerId);
  await banker.remove();
  res.status(200).json({ msg: "Banker deleted successfully" });
};

export const connectBankerToClient = async (req: Request, res: Response) => {
  const { bankerId, clientId } = req.params;

  const client = await Client.findOne({ where: { id: parseInt(clientId) } });
  if (!client) {
    return res
      .status(400)
      .json({ msg: `Client with id ${clientId} not found` });
  }
  const banker = await Banker.findOne({ where: { id: parseInt(bankerId) } });
  if (!banker) {
    return res
      .status(400)
      .json({ msg: `Banker with id ${bankerId} not found` });
  }
  console.log(banker);

  if (banker.clients.includes(client)) {
    return res.status(405).json({ msg: "Client already connected to banker" });
  }
  banker.clients = [client];
  await banker.save();
  return banker;
};
