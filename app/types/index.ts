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

export type ParamsConfig = {
  limit?: number;
  page?: number;
  status?: Status;
  order?: Order;
  [key: string]: any;
};

export { AnimeTypes, MangaTypes, CommonTypes, RanobeTypes };
