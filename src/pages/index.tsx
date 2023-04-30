import { Banner, Card } from "@/components";
import Popular from "@/containers/sections/Popular";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <Popular />
    </div>
  );
}
