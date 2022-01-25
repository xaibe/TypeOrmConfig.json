import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationNameHere1643109988227 implements MigrationInterface {
    name = 'migrationNameHere1643109988227'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "age" TO "weight"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "weight" TO "age"`);
    }

}
