import { MigrationInterface, QueryRunner } from "typeorm";

export class CorrecaoDasTabelas1693503301201 implements MigrationInterface {
    name = 'CorrecaoDasTabelas1693503301201'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "addressId" integer`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "categoryId" integer`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" date`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "createdAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "updatedAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "FK_c7a1c763ff260ac28674afa8c60" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "FK_47ed1f0bbf85e8083bd390ef95c" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "FK_47ed1f0bbf85e8083bd390ef95c"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "FK_c7a1c763ff260ac28674afa8c60"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "categoryId"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "addressId"`);
    }

}
