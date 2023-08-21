export type SwaggerConfiguration = {
  isEnabled: boolean;
  user: string;
  password: string;
};

export type PostgresConfiguration = {
  host: string;
  port: number;
  username: string;
  password: string;
  databaseName: string;
  synchronize: boolean;
  logging: boolean;
};

export type Configuration = {
  port: number;
  environment: string;
  postgres: PostgresConfiguration;
  swagger: SwaggerConfiguration;
};
