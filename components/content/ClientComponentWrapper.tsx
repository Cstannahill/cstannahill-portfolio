// components/content/ClientComponentWrapper.tsx
"use client";

import { ReactNode } from "react";

export function ClientComponentWrapper({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
