import Image from "next/image";

import {
  absoluteApiImageSrc,
  generateBlurImgUrl,
} from "@/app/ultilities/utils";
import { AnimeTypes, MangaTypes, RanobeTypes } from "@/app/types";

type Props = {
  item: AnimeTypes.Data | MangaTypes.Data | RanobeTypes.Data;
};

export default async function Card({ item }: Props) {
  const src = absoluteApiImageSrc(item.image.original);
  const blurDataUrl = await generateBlurImgUrl(src);

  return (
    <div className="card">
      <Image
        priority
        src={src}
        width={100}
        height={100}
        quality={100}
        style={{ width: "100%", height: "100%" }}
        alt={item.name}
        placeholder={blurDataUrl ? "blur" : undefined}
        blurDataURL={blurDataUrl ? blurDataUrl : undefined}
        className="card-media"
      />
      <div className="card-overlay">
        <p className="line-clamp-2 text-center text-sm text-white">
          {item.name}
        </p>
      </div>
    </div>
  );
}
