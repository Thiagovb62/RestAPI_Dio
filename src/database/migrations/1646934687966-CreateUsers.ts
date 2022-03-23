import {MigrationInterface, QueryRunner,Table, TableExclusion} from "typeorm";

export class CreateUsers1646934687966 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user",
                columns: [{
                    name: "id",
                    type: "string",
                    isPrimary: true,
                    isNullable: false
                },
                {
                    name: "name",
                    type: "string",
                    isNullable: false
                },
                {
                    name: "email",
                    type: "string",
                    isNullable: true

                }]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user')
    }

}
