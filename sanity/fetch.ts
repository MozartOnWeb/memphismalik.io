import { groq } from "next-sanity";
import { sanityClient } from "./client";

//fetch all writings
export const fetchWritings = async () => {
  return sanityClient.fetch(groq`
        *[_type == "writing" && !(_id in path("drafts.**"))] {
            title,
            publishedAt,
            "slug": slug.current,
        }
    `);
};
