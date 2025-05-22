import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container flex min-h-[calc(100vh-64px-200px)] flex-col items-center justify-center gap-4 py-24 text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="text-2xl font-medium">Page Not Found</h2>
      <p className="max-w-md text-muted-foreground">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Return Home
      </Link>
    </div>
  );
}
