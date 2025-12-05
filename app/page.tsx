
import { About } from "@/components/common/about";
import { Blogs } from "@/components/common/blogs";
import { Companies } from "@/components/common/companies";
import { Contact } from "@/components/common/contact";
import { NewsLatters } from "@/components/common/news-latters";
import { Teams } from "@/components/common/teams";
import { Hero } from "@/components/home/hero";
import { Workes } from "@/components/home/workes";

export default function Home() {
  return (
    <main className="h-full w-full gap-20 flex flex-col">
      <Hero />
      <Workes />
      {/* <About /> */}
      <Companies />
      <NewsLatters />
      {/* <Blogs /> */}
      <Teams />
      <Contact showForm />
    </main>
  );
}
