import { Card } from "../components/Card";

export const MovieList = () => {
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          <Card />
        </div>
      </section>
    </main>
  );
};
