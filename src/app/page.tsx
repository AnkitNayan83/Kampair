import { HydrateClient } from "@/trpc/server";
import Navbar from "./_components/global/navbar";

export default async function Home() {
  return (
    <HydrateClient>
      <Navbar />
      <div>test</div>
    </HydrateClient>
  );
}
