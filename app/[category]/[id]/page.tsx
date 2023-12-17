import { notFound } from "next/navigation";

import { buildApiUrlEndpoint } from "@/app/_ultilities/utils";
import { getOneByCategory } from "../../_actions";
import { FetchCategory } from "../../_types";

type Props = {
  params: {
    id: string;
    category: FetchCategory;
  };
};

export async function generateStaticParams({
  params: { category },
}: {
  params: { category: FetchCategory };
}) {
  const url = buildApiUrlEndpoint(category, {
    limit: 15,
    status: "ongoing",
    order: "popularity",
  });
  const data = await fetch(url).then((res) => res.json());

  return data.map((item: Pick<Props["params"], "id">) => ({
    category,
    id: `${item.id}`,
  }));
}

export default async function Page({ params }: Props) {
  const { category, id } = params;
  const detail = await getOneByCategory(category, id);

  if (detail.code === 404) {
    return notFound();
  }

  return <h1>Get {params.id}</h1>;
}
