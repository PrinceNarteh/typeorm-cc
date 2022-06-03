import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Person extends BaseEntity {
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

  @Column({
    name: "card_number",
    unique: true,
    length: 12,
  })
  cardNumber: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}
