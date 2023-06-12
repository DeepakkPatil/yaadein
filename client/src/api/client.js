import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "1way5vqg",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skl7WPFobUB7xpHRQ3YTjfSqXX5NiHq1IqkwgYSgQw5lXG8OoekCu1Ua2zl13P3Hn4kB4uSfOA3ntvXLqhqvtxuSYFu8mxeruU8Iyt0x1rw7d02SdhRl91C3ltpS0CGlCtblVlB4LrVau0Evky59a2X5uJEAUbGfgOBGPstJ4xgdmxLfTyo1",
});
// will add this token and project id in .env after clone is done

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
