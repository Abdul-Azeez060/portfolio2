import { redirect } from "next/navigation";

export const metadata = {
  title: "Blog",
  description: "Redirecting to my Medium blog...",
};

export default function BlogPage() {
  redirect("https://medium.com/@creation2224");
}
