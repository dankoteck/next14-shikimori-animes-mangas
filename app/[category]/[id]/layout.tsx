import { ReactNode } from "react";

export async function generateStaticParams() {
  return [
    { category: "animes" },
    { category: "mangas" },
    { category: "ranobe" },
  ];
}

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
