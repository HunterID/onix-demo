import { Type } from 'class-transformer';
import { IsInt, IsOptional, Max, Min } from 'class-validator';

import { VALIDATION_MESSAGES } from '../../books.constants';

const DEFAULT_PAGINATION_LIMIT = 20;

export class QueryPaginationDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: VALIDATION_MESSAGES.SKIP_INT })
  @Min(0, { message: VALIDATION_MESSAGES.SKIP_VALUE })
  @Max(Number.MAX_SAFE_INTEGER, { message: VALIDATION_MESSAGES.SKIP_VALUE })
  skip?: number = 0;

  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: VALIDATION_MESSAGES.LIMIT_INT })
  @Min(1, { message: VALIDATION_MESSAGES.LIMIT_VALUE })
  @Max(Number.MAX_SAFE_INTEGER, { message: VALIDATION_MESSAGES.LIMIT_VALUE })
  limit?: number = DEFAULT_PAGINATION_LIMIT;
}
