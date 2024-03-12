import { MigrationInterface, QueryRunner } from "typeorm";

export class Inicial1710183484641 implements MigrationInterface {
    name = 'Inicial1710183484641'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "registrationData" TO "registrationDate"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "contactsId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_dfd862a612f222e094375af814c" FOREIGN KEY ("contactsId") REFERENCES "contacts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_dfd862a612f222e094375af814c"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "contactsId"`);
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "registrationDate" TO "registrationData"`);
    }

}
