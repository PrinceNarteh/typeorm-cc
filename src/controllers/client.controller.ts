import { Request, Response } from "express";
import { Transaction, TransactionType } from "../entities/Transaction";
import { Client } from "../entities/Client";

const getClientById = async (clientId: string): Promise<Client> => {
  const client = await Client.findOne({ where: { id: parseInt(clientId) } });
  if (!client) {
    throw new Error(`Client with id ${client} not found`);
  }
  return client;
};

export const getClient = async (req: Request, res: Response) => {
  const { clientId } = req.params;
  const client = await getClientById(clientId);
  return res.status(200).json(client);
};

export const getAllClients = async (req: Request, res: Response) => {
  const clients = await Client.find();
  return res.status(200).json(clients);
};

export const createClient = async (req: Request, res: Response) => {
  const { firstName, lastName, email, accountNumber, balance } = req.body;
  const client = Client.create({
    firstName,
    lastName,
    email,
    accountNumber,
    balance,
  });
  await client.save();
  return res.status(201).json(client);
};

export const updateClient = async (req: Request, res: Response) => {};
export const deleteClient = async (req: Request, res: Response) => {};

export const createTransaction = async (req: Request, res: Response) => {
  const { clientId } = req.params;
  const { type, amount } = req.body;

  const client = await getClientById(clientId);

  const transaction = Transaction.create({
    type,
    amount,
    client,
  });

  await transaction.save();

  if (type === TransactionType.DEPOSIT) {
    client.balance = Number(client.balance) + amount;
  } else if (type === TransactionType.WITHDRAW) {
    client.balance -= Number(amount);
  }

  await client.save();

  return res.status(200).json(client);
};
