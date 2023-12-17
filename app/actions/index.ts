import { AnimeTypes, MangaTypes, ParamsConfig, RanobeTypes } from "@/app/types";
import { buildApiUrlEndpoint } from "@/app/ultilities/utils";

const HOME_FETCHING_CONFIG: ParamsConfig = {
  limit: 15,
  status: "ongoing",
  order: "popularity",
};

export const getAnimes = async (): Promise<AnimeTypes.Data[]> => {
  const url = buildApiUrlEndpoint("animes", HOME_FETCHING_CONFIG);
  const res = await fetch(url, {
    next: { tags: ["animes"] },
  });

  return await res.json();
};

export const getMangas = async (): Promise<MangaTypes.Data[]> => {
  const url = buildApiUrlEndpoint("mangas", HOME_FETCHING_CONFIG);
  const res = await fetch(url, {
    next: { tags: ["mangas"] },
  });

  return await res.json();
};

export const getRanobe = async (): Promise<RanobeTypes.Data[]> => {
  const url = buildApiUrlEndpoint("ranobe", HOME_FETCHING_CONFIG);
  const res = await fetch(url, {
    next: { tags: ["ranobe"] },
  });

  return await res.json();
};
