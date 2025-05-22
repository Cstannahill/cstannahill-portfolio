// components/content/MDXContent.tsx
import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "./MDXComponents";

interface MDXContentProps {
  source: string;
}

export function MDXContent({ source }: MDXContentProps) {
  return <MDXRemote source={source} components={MDXComponents} />;
}
