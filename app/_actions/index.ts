import {
  AnimeTypes,
  DataDetail,
  FetchCategory,
  MangaTypes,
  ParamsConfig,
  RanobeTypes,
} from "../_types";
import { buildApiUrlEndpoint } from "@/app/_ultilities/utils";

const POPULAR_FETCH_CONFIG: ParamsConfig = {
  limit: 15,
  status: "ongoing",
  order: "popularity",
};

export const getAnimes = async (): Promise<AnimeTypes.Data[]> => {
  const url = buildApiUrlEndpoint("animes", POPULAR_FETCH_CONFIG);

  return await fetch(url, {
    next: { tags: ["animes"] },
  }).then((res) => res.json());
};

export const getMangas = async (): Promise<MangaTypes.Data[]> => {
  const url = buildApiUrlEndpoint("mangas", POPULAR_FETCH_CONFIG);

  return await fetch(url, {
    next: { tags: ["mangas"] },
  }).then((res) => res.json());
};

export const getRanobe = async (): Promise<RanobeTypes.Data[]> => {
  const url = buildApiUrlEndpoint("ranobe", POPULAR_FETCH_CONFIG);

  return await fetch(url, {
    next: { tags: ["ranobe"] },
  }).then((res) => res.json());
};

export const getOneByCategory = async (
  category: FetchCategory,
  id: string | number,
): Promise<DataDetail> => {
  const url = buildApiUrlEndpoint(category, null, id);

  return await fetch(url, {
    next: { tags: ["oneByCategory"] },
  }).then((res) => res.json());
};
