import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
class User {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 45})
    name: string;

    @Column({ length: 45, unique: true })
    email: string;

    @Column({ length: 120 })
    password: string;

    @Column({ default: false })
    admin: boolean;

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @CreateDateColumn({ type: "timestamp" })
    updatedAt: Date;

    @CreateDateColumn({ type: "timestamp" })
    deletedAt: Date;
};

export { User };