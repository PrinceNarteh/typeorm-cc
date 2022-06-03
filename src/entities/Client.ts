import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Person } from "./Person";

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
}
