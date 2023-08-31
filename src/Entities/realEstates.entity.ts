import { BeforeInsert, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Address } from "./address.entity";
import { Category } from "./categories.entity";


@Entity("realEstates")
class RealEstate {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "boolean", default: false })
    sold: boolean;

    @Column({ type: "decimal", precision: 12, scale: 2, default: 0})
    value: number | string;

    @Column()
    size: number;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    @ManyToOne(() => Address, address => address.id)
    @JoinColumn({ name: 'addressId' })
    adress: Address;

    @ManyToOne(() => Category, category => category.id)
    @JoinColumn({ name: 'categoryId' })
    category: Category;

    @BeforeInsert()
    generateSoldValue(){
        this.sold = false;
    }
    
}

export { RealEstate };