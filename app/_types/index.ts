import * as AnimeTypes from "./anime";
import * as MangaTypes from "./manga";
import * as RanobeTypes from "./ranobe";
import * as CommonTypes from "./common";

type Status =
  | CommonTypes.Status
  | AnimeTypes.Status
  | MangaTypes.Status
  | RanobeTypes.Status;

type Order =
  | CommonTypes.Order
  | AnimeTypes.Order
  | MangaTypes.Order
  | RanobeTypes.Order;

type Rate = {
  name: string;
  value: string | number;
};

type Studio = {
  id: number;
  name: string;
  filtered_name: string;
  real: boolean;
  image: string;
};

type Video = {
  id: number;
  url: string;
  image_url: string;
  player_url: string;
  name: string;
  kind: string;
  hosting: string;
};

type Genre = {
  id: number;
  name: string;
  kind: string;
  entry_type: string;
};

export type ParamsConfig = {
  limit?: number;
  page?: number;
  status?: Status;
  order?: Order;
  id?: string | number;
  [key: string]: any;
} | null;

export type FetchCategory = "animes" | "mangas" | "ranobe";

export type DataDetail = CommonTypes.Data & {
  // Common
  kind: AnimeTypes.Kind | MangaTypes.Kind | "light_novel";
  status: Status;
  english: string[] | null[];
  japanese: string[] | null[];
  synonyms: string[];
  description: null | string;
  description_html: string;
  description_source: null | string;
  genres: Genre[];
  franchise: null | string;
  favoured: boolean;
  anons: boolean;
  ongoing: boolean;
  thread_id: number;
  topic_id: number;
  myanimelist_id: number;
  rates_scores_stats: Rate[];
  rates_statuses_stats: Rate[];

  // Mangas & Ranobe
  volumes?: number;
  chapters?: number;

  // Animes
  studios?: Studio[];
  videos?: Video[];

  // Not Found response
  message?: string;
  code?: number;
};

export { AnimeTypes, MangaTypes, CommonTypes, RanobeTypes };
