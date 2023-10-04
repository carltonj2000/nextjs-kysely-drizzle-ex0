import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const movies = sqliteTable("movies", {
  id: text("id").primaryKey(),
  title: text("title", { length: 256 }).notNull(),
  releaseYear: integer("releaseYear"),
  rating: integer("rating"),
});
