# Next JS, Drizzle, Kysely And Turso

## Creation History

```bash
npx create-next-app@latest nextjs-kysely-drizzle-ex0
cd nextjs-kysely-drizzle-ex0
# add .env to .gitignore
npm add drizzle-orm @libsql/client
npm add -D drizzle-kit dotenv tsx
# install turso cli
turso db create movies
turso db show movies
turso db tokens create movies
# create drizzle schema and config
# change tsconfig target to es6
npm run drizzle:generate
npm run drizzle:migrate
turso db shell movies
#> INSERT INTO movies (id, title, releaseYear, rating) VALUES (101, 'Scarface', 1983, 10);
#> SELECT * FROM movies;
# install kysely for quering db
npm install kysely
npm install @libsql/kysely-libsql
# for a weird warning added the line below
npm install utf-8-validate bufferutil encoding
```

## Code History

The code in this repository is based on the
[Build a fully typed web app using Next.js, PlanetScale, Drizzle, and Kysely](https://www.ayoubkhial.com/blog/build-fully-typed-web-app-using-next.js-planetscale-drizzle-and-kysely)
article.
