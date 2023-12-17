import Link from "next/link";
import Card from "@/app/_components/Card";
import { getAnimes, getMangas, getRanobe } from "@/app/_actions";

export default async function Home() {
  const animes = await getAnimes();
  const mangas = await getMangas();
  const ranobe = await getRanobe();

  return (
    <main className="container space-y-12 p-4">
      {/* Animes */}
      <div className="flex flex-col gap-4">
        <h1 className="text-center text-2xl font-semibold">Animes</h1>
        <div className="grid grid-cols-5 items-center gap-0">
          {animes.map((item) => (
            <Link key={item.id} href={`/animes/${item.id}`}>
              <Card item={item} />
            </Link>
          ))}
        </div>
      </div>

      {/* Mangas */}
      <div className="flex flex-col gap-4">
        <h1 className="text-center text-2xl font-semibold">Mangas</h1>
        <div className="grid grid-cols-5 items-center gap-0">
          {mangas.map((item) => (
            <Link key={item.id} href={`/mangas/${item.id}`}>
              <Card item={item} />
            </Link>
          ))}
        </div>
      </div>

      {/* Ranobe */}
      <div className="flex flex-col gap-4">
        <h1 className="text-center text-2xl font-semibold">Light Novel</h1>
        <div className="grid grid-cols-5 items-center gap-0">
          {ranobe.map((item) => (
            <Link key={item.id} href={`/ranobe/${item.id}`}>
              <Card item={item} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
