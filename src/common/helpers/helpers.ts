import { TransformFnParams } from 'class-transformer';

export const trimString = ({ value }: TransformFnParams): string => {
  return value.trim();
};
