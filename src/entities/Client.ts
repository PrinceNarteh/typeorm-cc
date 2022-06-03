import { Column, Entity, ManyToMany, OneToMany } from "typeorm";
import { Banker } from "./Banker";
import { Person } from "./Person";
import { Transaction } from "./Transaction";

@Entity("clients")
export class Client extends Person {
  @Column("numeric")
  balance: number;

  @Column({
    name: "active",
    default: true,
  })
  isActive: boolean;

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
