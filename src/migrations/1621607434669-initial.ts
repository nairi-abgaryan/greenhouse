import { MigrationInterface, QueryRunner } from 'typeorm'

export class initial1621607434669 implements MigrationInterface {
  name = 'initial1621607434669'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "environment-conditions_type_enum" AS ENUM('Temperature', 'Light', 'CO2', 'LightLevel')`,
    )
    await queryRunner.query(
      `CREATE TABLE "environment-conditions" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "min" integer NOT NULL, "max" integer NOT NULL, "type" "environment-conditions_type_enum" NOT NULL, "plantId" uuid, "plantUuid" uuid, CONSTRAINT "PK_85de6fe9b9c28e64bf6a2d36531" PRIMARY KEY ("uuid"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "plants" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIME WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIME WITH TIME ZONE NOT NULL DEFAULT now(), "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_eddc677316e3dace88f8befdec5" PRIMARY KEY ("id", "uuid"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "greenhouse" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIME WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIME WITH TIME ZONE NOT NULL DEFAULT now(), "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "address" character varying NOT NULL, "location" character varying NOT NULL, "owner" character varying NOT NULL, "plantId" uuid, "plantUuid" uuid, CONSTRAINT "PK_89ca1475f1eb157ab67eb68d3ac" PRIMARY KEY ("id", "uuid"))`,
    )
    await queryRunner.query(`ALTER TABLE "datum" DROP COLUMN "type"`)
    await queryRunner.query(`ALTER TABLE "datum" ADD "value" integer NOT NULL`)
    await queryRunner.query(
      `CREATE TYPE "datum_indicatordatatypes_enum" AS ENUM('Temperature', 'Light', 'CO2', 'LightLevel')`,
    )
    await queryRunner.query(
      `ALTER TABLE "datum" ADD "IndicatorDataTypes" "datum_indicatordatatypes_enum" NOT NULL`,
    )
    await queryRunner.query(`ALTER TABLE "datum" ADD "plantId" uuid`)
    await queryRunner.query(`ALTER TABLE "datum" ADD "plantUuid" uuid`)
    await queryRunner.query(
      `ALTER TABLE "environment-conditions" ADD CONSTRAINT "FK_cc303a18e609d8ab42b6204bb61" FOREIGN KEY ("plantId", "plantUuid") REFERENCES "plants"("id","uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "datum" ADD CONSTRAINT "FK_07272a29c6ce5f6ec147b89c75b" FOREIGN KEY ("plantId", "plantUuid") REFERENCES "plants"("id","uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "greenhouse" ADD CONSTRAINT "FK_375af17b426b87caac534b84f30" FOREIGN KEY ("plantId", "plantUuid") REFERENCES "greenhouse"("id","uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "greenhouse" DROP CONSTRAINT "FK_375af17b426b87caac534b84f30"`,
    )
    await queryRunner.query(
      `ALTER TABLE "datum" DROP CONSTRAINT "FK_07272a29c6ce5f6ec147b89c75b"`,
    )
    await queryRunner.query(
      `ALTER TABLE "environment-conditions" DROP CONSTRAINT "FK_cc303a18e609d8ab42b6204bb61"`,
    )
    await queryRunner.query(`ALTER TABLE "datum" DROP COLUMN "plantUuid"`)
    await queryRunner.query(`ALTER TABLE "datum" DROP COLUMN "plantId"`)
    await queryRunner.query(
      `ALTER TABLE "datum" DROP COLUMN "IndicatorDataTypes"`,
    )
    await queryRunner.query(`DROP TYPE "datum_indicatordatatypes_enum"`)
    await queryRunner.query(`ALTER TABLE "datum" DROP COLUMN "value"`)
    await queryRunner.query(
      `ALTER TABLE "datum" ADD "type" character varying NOT NULL`,
    )
    await queryRunner.query(`DROP TABLE "greenhouse"`)
    await queryRunner.query(`DROP TABLE "plants"`)
    await queryRunner.query(`DROP TABLE "environment-conditions"`)
    await queryRunner.query(`DROP TYPE "environment-conditions_type_enum"`)
  }
}
