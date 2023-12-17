import type {
  Data as BaseData,
  Order as BaseOrder,
  Status as BaseStatus,
} from "./common";

export type Kind =
  | "tv"
  | "movie"
  | "ova"
  | "ona"
  | "special"
  | "music"
  | "tv_13"
  | "tv_24"
  | "tv_48";

export type Status = BaseStatus;

export type Order = BaseOrder | "episodes";

export type Data = BaseData & {
  kind: Kind;
  status: Status;
  episodes: number;
  episodes_aired: number;
};
