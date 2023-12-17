export type Image = {
  original: string;
  preview: string;
  x96: string;
  x48: string;
};

export type Status = "anons" | "ongoing" | "released";

export type Order =
  | "id"
  | "id_desc"
  | "ranked"
  | "kind"
  | "popularity"
  | "name"
  | "aired_on"
  | "status"
  | "random"
  | "created_at"
  | "created_at_desc";

export type Data = {
  id: number;
  name: string;
  russian: string;
  image: Image;
  url: string;
  score: number;
  aired_on: string;
  released_on: string;
};
