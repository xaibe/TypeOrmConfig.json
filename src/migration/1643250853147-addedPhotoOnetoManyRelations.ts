import {MigrationInterface, QueryRunner} from "typeorm";

export class addedPhotoOnetoManyRelations1643250853147 implements MigrationInterface {
    name = 'addedPhotoOnetoManyRelations1643250853147'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "photo" ("id" SERIAL NOT NULL, "url" character varying NOT NULL, "profileId" integer, CONSTRAINT "PK_723fa50bf70dcfd06fb5a44d4ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "profile" DROP COLUMN "photo"`);
        await queryRunner.query(`ALTER TABLE "photo" ADD CONSTRAINT "FK_d55334717fb208b70bdac62b0a4" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "photo" DROP CONSTRAINT "FK_d55334717fb208b70bdac62b0a4"`);
        await queryRunner.query(`ALTER TABLE "profile" ADD "photo" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "photo"`);
    }

}
