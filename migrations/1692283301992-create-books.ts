import { MigrationInterface, QueryRunner, Table, TableForeignKey, TableIndex } from 'typeorm';

import { TABLE_NAMES } from '../src/repositories/models/constants';

const createBooksTable = async (queryRunner: QueryRunner) => {
  await queryRunner.createTable(
    new Table({
      name: TABLE_NAMES.BOOKS,
      columns: [
        { name: 'id', type: 'int', isPrimary: true, isGenerated: true, isUnique: true },
        { name: 'author_id', type: 'int', isNullable: false },
        { name: 'title', type: 'varchar(1024)', isNullable: false },
        { name: 'genre', type: 'varchar(512)', isNullable: false },
        { name: 'pages', type: 'int', isNullable: false },
        { name: 'created_at', type: 'timestamp', default: 'now()' },
        { name: 'updated_at', type: 'timestamp', default: 'now()' },
      ],
    }),
    true,
  );
};

const addBooksIndexes = async (queryRunner: QueryRunner) => {
  await queryRunner.createIndex(
    TABLE_NAMES.BOOKS,
    new TableIndex({ name: 'BOOKS_ID', columnNames: ['id'], isUnique: true }),
  );

  await queryRunner.createForeignKey(
    TABLE_NAMES.BOOKS,
    new TableForeignKey({
      columnNames: ['author_id'],
      referencedColumnNames: ['id'],
      referencedTableName: TABLE_NAMES.AUTHORS,
      onDelete: 'CASCADE',
    }),
  );
};

export class CreateBooks1692283301992 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await createBooksTable(queryRunner);
    await addBooksIndexes(queryRunner);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(TABLE_NAMES.BOOKS);
  }
}
