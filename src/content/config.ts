import { defineCollection } from "astro:content";
import { cldAssetsLoader } from "astro-cloudinary/loaders";

const images = defineCollection({
  loader: cldAssetsLoader({
    limit: 16,
    folder: "halloween",
  }),
});

export const collections = {
  images,
};
