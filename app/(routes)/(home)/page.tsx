import Pets from "@/components/layout/home/pets";
import Hero from "@/components/layout/home/hero";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main>
      <Hero />
      <Pets />
    </main>
  );
}
