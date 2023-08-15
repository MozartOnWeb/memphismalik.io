import { PortableTextComponents } from "@portabletext/react";

import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";

import { sanityClient } from "@/sanity/client";

// Barebones lazy-loaded image component
const SampleImageComponent = ({ value, isInline }: any) => {
  const { width, height } = getImageDimensions(value);
  const imageUrl = urlBuilder(sanityClient)
    .image(value)
    .width(isInline ? 100 : 800)
    .fit("max")
    .auto("format")
    .url();

  return (
    <Image
      width={800}
      height={800}
      src={imageUrl}
      alt={value.alt || " "}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? "inline-block" : "block",

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  );
};

export const RichTextComponents: PortableTextComponents = {
  types: {
    image: SampleImageComponent,
  },
};
