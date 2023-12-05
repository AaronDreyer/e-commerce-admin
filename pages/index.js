/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import {useSession} from "next-auth/react";

export default function Home() {
  const {data: session} = useSession();
console.log({session});
  return <Layout>
    <div className="text-blue-900 flex">
      <h2>
        Hello
      </h2>
      Hello, {session?.user?.name}
      <img src={session?.user?.image} alt=""/>
    </div>
  </Layout>
 }
  
