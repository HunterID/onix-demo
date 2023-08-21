export const VALIDATION_MESSAGES = {
  SKIP_INT: 'skip_must_be_an_integer_number',
  SKIP_VALUE: 'wrong_skip_value',
  LIMIT_INT: 'limit_must_be_an_integer_number',
  LIMIT_VALUE: 'wrong_limit_value',
};

export const TITLE_MIN_LENGTH = 3;
export const TITLE_MAX_LENGTH = 512;
export const GENRE_MIN_LENGTH = 1;
export const GENRE_MAX_LENGTH = 30;
export const PAGES_MIN_LENGTH = 1;

export const FULLNAME_MIN_LENGTH = 3;
export const FULLNAME_MAX_LENGTH = 512;
export const GENDER_MIN_LENGTH = 3;
export const GENDER_MAX_LENGTH = 512;

export const BOOKS_VALIDATION_MESSAGES = {
  TITLE_VALID: 'title_must_be_valid_string',
  TITLE_EMPTY: 'title_must_not_be_empty',
  TITLE_MIN_LENGTH: `title_must_be_min_${TITLE_MIN_LENGTH}_length`,
  TITLE_MAX_LENGTH: `title_must_be_max_${TITLE_MAX_LENGTH}_length`,

  GENRE_VALID: 'genre_must_be_valid_string',
  GENRE_EMPTY: 'genre_must_not_be_empty',
  GENRE_MIN_LENGTH: `genre_must_be_min_${GENRE_MIN_LENGTH}_length`,
  GENRE_MAX_LENGTH: `genre_must_be_max_${GENRE_MAX_LENGTH}_length`,

  PAGES_NUMBER: 'pages_must_be_a_number',
  PAGES_MIN: `pages_must_be_greater`,

  FULLNAME_VALID: 'fullname_must_be_valid_string',
  FULLNAME_EMPTY: 'fullname_must_not_be_empty',
  FULLNAME_MIN_LENGTH: `fullname_must_be_min_${FULLNAME_MIN_LENGTH}_length`,
  FULLNAME_MAX_LENGTH: `fullname_must_be_max_${FULLNAME_MAX_LENGTH}_length`,

  GENDER_VALID: 'gender_must_be_valid_string',
  GENDER_EMPTY: 'genre_must_not_be_empty',
  GENDER_MIN_LENGTH: `gender_must_be_min_${GENDER_MIN_LENGTH}_length`,
  GENDER_MAX_LENGTH: `gender_must_be_max_${GENDER_MAX_LENGTH}_length`,

  BIRTHDAY_VALID: 'birthday_must_be_valid',

  AUTHOR_ID_NUMBER: 'author_id_must_be_a_number',
  AUTHOR_ID_MIN: `author_id_must_be_greater`,
};
