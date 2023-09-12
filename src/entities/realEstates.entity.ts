import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Address } from "./address.entity";
import { Category } from "./categories.entity";
import { Schedule } from "./schedules.entity";

@Entity("realEstates")
class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "boolean", default: false })
  sold: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
  value: number | string;

  @Column()
  size: number;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @ManyToOne(() => Address, (address) => address.id)
  address: Address;

  @ManyToOne(() => Category, (category) => category.id)
  category: Category;

  @OneToMany(() => Schedule, (schedule) => schedule.realEstate)
  schedules: Schedule[];
}

export { RealEstate };
