import type {
  Data as BaseData,
  Order as BaseOrder,
  Status as BaseStatus,
} from "./common";

export type Status = BaseStatus | "paused" | "discontinued";

export type Order = BaseOrder | "volumes" | "chapters";

export type Season =
  | "summer_2017"
  | "spring_2016,fall_2016"
  | "2016,!winter_2016"
  | "2016"
  | "2014_2016"
  | "199x";

export type Data = BaseData & {
  kind: "light_novel"; // Constant
  status: Status;
  volumes: number;
  chapters: number;
};
