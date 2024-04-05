import { Button } from "@/components/ui/button";
import { Config } from "@/config";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <div className="mb-5">
        <Image
          src={Config.siteLogo}
          alt={Config.siteFullTitle}
          width={100}
          height={100}
          draggable={false}
          className="select-none"
        />
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        Welcome to your new app! 🚀 <br />
        ({Config.siteTitle})
      </h1>
      <p className="mt-4 text-lg text-center">
        Get started by editing{" "}
        <code className="p-2 font-mono text-sm bg-gray-100 shadow-md rounded-md">
          src/app/page.tsx
        </code>
      </p>
      <Button className="mt-8" variant="default" size="sm">
        Let&apos;s dive in!
      </Button>
    </main>
  );
}