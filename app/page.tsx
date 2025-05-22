import { redirect } from "next/navigation";

export default function Home() {
  // Redirect to the default locale (English) for now
  redirect("/en");
}
