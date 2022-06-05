import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { Client } from "./Client";
import { Person } from "./Person";

@Entity("bankers")
export class Banker extends Person {
  @Column({
    name: "staff_number",
    length: 12,
    unique: true,
  })
  staffNumber: string;

  @ManyToMany(() => Client)
  @JoinTable({
    name: "bankers_clients",
    joinColumn: {
      name: "banker",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "client",
      referencedColumnName: "id",
    },
  })
  clients: Client[];
}
