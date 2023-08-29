import { getRounds, hashSync } from "bcryptjs";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date;

    @DeleteDateColumn({ type: "timestamp" })
    deletedAt: Date;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const hashRounds: number = getRounds(this.password);
        if(hashRounds === 0){
            this.password = hashSync(this.password, 10);
        }
    }
};

export { User };