"use client"

import Header from "./header";

export default function HomePage({ token }: { token: string }) {
          return (
                    <>
                              <Header token={token} />
                    </>
          )
}