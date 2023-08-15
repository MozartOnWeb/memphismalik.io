import { PortableTextComponents } from "@portabletext/react";

export const RichTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h2 className={"h1"}>{children}</h2>,
    h2: ({ children }) => <h2 className={"h2"}>{children}</h2>,
    h3: ({ children }) => <h3 className={"h3"}>{children}</h3>,
    h4: ({ children }) => <h3 className={"h4"}>{children}</h3>,
    h5: ({ children }) => <h3 className={"h5"}>{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className={"blockquote"}>{children}</blockquote>
    ),
    p: ({ children }) => <p className={"p"}>{children}</p>,
  },
  marks: {
    strong: ({ children }) => <span className={""}>{children}</span>,
  },
};
