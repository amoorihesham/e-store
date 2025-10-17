import { createClient } from "next-sanity";

const token = process.env.NEXT_SANITY_READ_API_TOKEN;

if (!token) {
  throw new Error("Missing NEXT_SANITY_READ_API_TOKEN");
}

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: true,
  token: process.env.NEXT_SANITY_DEVELOPER_TOKEN,
});
