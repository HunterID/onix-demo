import { Injectable } from '@nestjs/common';
import { EntityManager, In } from 'typeorm';

import { AuthorModel } from '../../models/author.model';
import { CreateAuthorDto } from '../../../books/dto/request/create-books.dto';

@Injectable()
export class CreateAuthorUseCase {
  constructor(private readonly globalEntityManager: EntityManager) {}

  public async exec(authors: CreateAuthorDto[], transactionalManager?: EntityManager): Promise<AuthorModel[]> {
    const manager = transactionalManager ?? this.globalEntityManager;

    const { identifiers } = await manager.getRepository(AuthorModel).upsert(authors, ['fullname']);

    const authorIds = identifiers.map((item) => item.id);

    return manager.getRepository(AuthorModel).findBy({ id: In(authorIds) });
  }
}
