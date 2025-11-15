"use client";

import { motion } from "motion/react";

interface AnimatedProjectTitleProps {
  slug: string;
  title: string;
  className?: string;
}

export function AnimatedProjectTitle({
  slug,
  title,
  className,
}: AnimatedProjectTitleProps) {
  return (
    <motion.h1
      layoutId={`project-title-${slug}`}
      className={className ?? ""}
    >
      {title}
    </motion.h1>
  );
}
