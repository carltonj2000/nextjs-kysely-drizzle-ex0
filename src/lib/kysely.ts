import { LibsqlDialect } from "@libsql/kysely-libsql";
import "dotenv/config";
import { Kyselify } from "drizzle-orm/kysely";
import { Kysely } from "kysely";
import { movies } from "./schema";

interface Database {
  movies: Kyselify<typeof movies>;
}

export const queryBuilder = new Kysely<Database>({
  dialect: new LibsqlDialect({
    url: process.env.VITE_TURSO_DB_URL as string,
    authToken: process.env.VITE_TURSO_DB_AUTH_TOKEN as string,
  }),
});
