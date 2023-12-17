import { getPlaiceholder } from "plaiceholder";
import { ParamsConfig } from "../_types";

const baseUrl = process.env.SHIKIMORI_API_BASEURL;

export const buildApiUrlEndpoint = (
  endpoint: string,
  paramsConfig?: ParamsConfig,
  id: string | number | null = null,
): string => {
  let params = "";

  if (!!id) {
    return `${baseUrl}/api/${endpoint}/${id}`;
  }

  if (paramsConfig) {
    params = new URLSearchParams(paramsConfig).toString();
  }

  return `${baseUrl}/api/${endpoint}?${params}`;
};

export const absoluteApiImageSrc = (url: string) => {
  return `${baseUrl}${url}`;
};

export const generateBlurImgUrl = async (src: string) => {
  try {
    const buffer = await fetch(src)
      .then(async (res) => Buffer.from(await res.arrayBuffer()))
      .catch((err) => console.log(err));

    if (buffer) {
      const { base64 } = await getPlaiceholder(buffer);
      return base64;
    }

    return "";
  } catch (err) {
    console.log(err);
  }
};
