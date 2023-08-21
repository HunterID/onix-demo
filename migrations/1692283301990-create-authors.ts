import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';
import { TABLE_NAMES } from '../src/repositories/models/constants';

const createAuthorTable = async (queryRunner: QueryRunner) => {
  await queryRunner.createTable(
    new Table({
      name: TABLE_NAMES.AUTHORS,
      columns: [
        { name: 'id', type: 'int', isPrimary: true, isGenerated: true, isUnique: true },
        { name: 'fullname', type: 'varchar(1024)', isNullable: false, isUnique: true },
        { name: 'gender', type: 'varchar(128)', isNullable: false },
        { name: 'birthday', type: 'date', isNullable: true },
        { name: 'created_at', type: 'timestamp', default: 'now()' },
        { name: 'updated_at', type: 'timestamp', default: 'now()' },
      ],
    }),
    true,
  );
};

const addAuthorIndexes = async (queryRunner: QueryRunner) => {
  await queryRunner.createIndex(
    TABLE_NAMES.AUTHORS,
    new TableIndex({ name: 'AUTHOR_ID', columnNames: ['id'], isUnique: true }),
  );
};

export class CreateAuthors1692283301990 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await createAuthorTable(queryRunner);
    await addAuthorIndexes(queryRunner);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(TABLE_NAMES.AUTHORS);
  }
}
