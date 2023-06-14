import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatePostTable1686760992521 implements MigrationInterface {
    name = 'UpdatePostTable1686760992521'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`book\` (\`id\` varchar(36) NOT NULL, \`title\` varchar(255) NOT NULL, \`bookStatus\` enum ('available', 'unavailable') NOT NULL DEFAULT 'available', \`description\` varchar(255) NULL, \`author\` varchar(255) NOT NULL, \`publisher\` varchar(255) NULL, \`year\` int NOT NULL, \`pages\` int NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`book\``);
    }

}
