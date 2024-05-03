import { Config } from "@/config";
import { cookies } from "next/headers";
import HomePage from "./(routes)/(home)/home";

export default async function Home() {
  const token = cookies().get(Config.cookieName)?.value!;

  return (
    <>
      <HomePage token={token} />
    </>
  );
}