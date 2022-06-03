import { Request, Response } from "express";
import { Client } from "../entities/Client";

export const getClient = async (req: Request, res: Response) => {};
export const getAllClients = async (req: Request, res: Response) => {};
export const createClient = async (req: Request, res: Response) => {
  const { firstName, lastName, email, cardNumber, balance } = req.body;
  const client = Client.create({
    firstName,
    lastName,
    email,
    cardNumber,
    balance,
  });
  await client.save();
  return res.status(201).json(client);
};
export const updateClient = async (req: Request, res: Response) => {};
export const deleteClient = async (req: Request, res: Response) => {};
