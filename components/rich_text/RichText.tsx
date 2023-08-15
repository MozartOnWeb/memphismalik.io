import Link from "next/link";
import Image from "next/image";

import { sanityClient } from "@/sanity/client";

import { PortableTextComponents } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";

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
      className="image"
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
  block: {
    h1: ({ children }: any) => <h1 className="h1">{children}</h1>,
    h2: ({ children }: any) => <h2 className="h2">{children}</h2>,
    h3: ({ children }: any) => <h3 className="h3">{children}</h3>,
    h4: ({ children }: any) => <h4 className="h4">{children}</h4>,
    h5: ({ children }: any) => <h5 className="h5">{children}</h5>,
    blockquote: ({ children }: any) => (
      <blockquote className="blockquote">{children}</blockquote>
    ),
    normal: ({ children }: any) => <p className="p">{children}</p>,
  },
  marks: {
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <Link className="link" href={value?.href} target={target}>
          {children}
        </Link>
      );
    },
  },
  list: {
    bullet: ({ children }) => <ul className="ul">{children}</ul>,
    number: ({ children }) => <ol className="ol">{children}</ol>,
  },
};
