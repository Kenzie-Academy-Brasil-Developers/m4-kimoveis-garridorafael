import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RealEstate } from "./realEstates.entity";
import { User } from "./users.entity";

@Entity("schedules")
class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @OneToMany(() => RealEstate, (realEstate) => realEstate.id)
  @JoinColumn({ name: "realEstateId" })
  realEstate: RealEstate;

  @OneToMany(() => User, (user) => user.id)
  @JoinColumn({ name: "userId" })
  category: User;
};

export { Schedule }
