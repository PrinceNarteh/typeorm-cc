import { Column, Entity, ManyToMany, OneToMany } from "typeorm";
import { Banker } from "./Banker";
import { Person } from "./Person";
import { Transaction } from "./Transaction";

@Entity("clients")
export class Client extends Person {
  @Column({ type: "numeric", precision: 10, scale: 2 })
  balance: number;

  @Column({
    name: "active",
    default: true,
  })
  isActive: boolean;

  @Column({
    name: "account_number",
    unique: true,
    length: 12,
  })
  accountNumber: string;

  @Column("simple-json", { name: "additional_info", nullable: true })
  additionalInfo: {
    age: number;
    hairColor: string;
  };

  @Column("simple-array", { name: "family_members", default: [] })
  familyMembers: string[];

  @OneToMany(() => Transaction, (transaction) => transaction.client)
  transactions: Transaction[];

  @ManyToMany(() => Banker)
  bankers: Banker[];
}
