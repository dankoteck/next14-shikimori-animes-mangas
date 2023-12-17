import type {
  Data as BaseData,
  Order as BaseOrder,
  Status as BaseStatus,
} from "./common";

export type Kind =
  | "manga"
  | "manhwa"
  | "manhua"
  | "light_novel"
  | "novel"
  | "one_shot"
  | "doujin";

export type Status = BaseStatus | "paused" | "discontinued";

export type Order = BaseOrder | "volumes" | "chapters";

export type Data = BaseData & {
  kind: Kind;
  status: Status;
  volumes: number;
  chapters: number;
};
