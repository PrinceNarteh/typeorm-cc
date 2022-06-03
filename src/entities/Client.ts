import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Client extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: "first_name",
  })
  firstName: string;

  @Column({
    name: "last_name",
  })
  lastName: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column("numeric")
  balance: number;

  @Column({
    default: true,
  })
  isActive: boolean;

  @Column("simple-json", { nullable: true })
  additionalInfo: {
    age: number;
    hairColor: string;
  };

  @Column("simple-array", { default: [] })
  familyMembers: string[];

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}
