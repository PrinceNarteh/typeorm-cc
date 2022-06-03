import { Column, Entity } from "typeorm";
import { Person } from "./Person";

@Entity("bankers")
export class Banker extends Person {
  @Column({
    length: 10,
    unique: true,
  })
  employee_number: string;
}
