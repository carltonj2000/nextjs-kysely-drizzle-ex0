import { queryBuilder } from "@/lib/kysely";
import { ReactNode } from "react";

const HeaderItem = ({ children }: { children: ReactNode }) => {
  return (
    <div className="header__item">
      <span id="name" className="filter__link">
        {children}
      </span>
    </div>
  );
};
export default async function Home() {
  const movies = await queryBuilder.selectFrom("movies").selectAll().execute();
  return (
    <main>
      <div className="mx-auto">
        <div className="flex flex-col">
          <div className="flex gap-2 bg-slate-300 justify-between">
            <HeaderItem>Title</HeaderItem>
            <HeaderItem>Release Year</HeaderItem>
            <HeaderItem>Rating</HeaderItem>
          </div>
          <div className="table-content">
            {movies &&
              movies.map(({ title, releaseYear, rating }, key) => (
                <div
                  key={key}
                  className="flex gap-2 bg-slate-700 justify-between"
                >
                  <div className="table-data">{title}</div>
                  <div className="table-data">{releaseYear}</div>
                  <div className="table-data">{rating}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
