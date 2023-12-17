import { getPlaiceholder } from "plaiceholder";
import { ParamsConfig } from "@/app/types";

const baseUrl = process.env.SHIKIMORI_API_BASEURL;

export const buildApiUrlEndpoint = (
  endpoint: string,
  paramsConfig?: ParamsConfig,
): string => {
  let params = "";

  if (paramsConfig) {
    params = new URLSearchParams(paramsConfig).toString();
  }

  const url = `${baseUrl}/api/${endpoint}?${params}`;

  console.log({ fullURL: url }); // For Debugging purpose

  return url;
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
