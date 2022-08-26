import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "91yb1yg2",
  dataset: "production",
  apiVersion: "2022-08-10",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
