import type { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSharedReadings1730000000000 implements MigrationInterface {
  name = 'CreateSharedReadings1730000000000';

  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "shared_readings" (
        "id" character varying(12) NOT NULL,
        "type" character varying(10) NOT NULL,
        "locale" character varying(5) NOT NULL,
        "payload" jsonb NOT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "PK_shared_readings" PRIMARY KEY ("id")
      )
    `);
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS "shared_readings"`);
  }
}
