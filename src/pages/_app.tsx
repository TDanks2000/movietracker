import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/reset.css";
import "@splidejs/react-splide/css";

import { ThemeProvider } from "styled-components";
import { darkTheme } from "@/assets/themes/dark";
import GlobalStyle from "@/styles/global";
import { NavContainer } from "@/containers";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Watchlistr</title>
        <meta
          name="description"
          content="Keep track of your favorite movies and never miss a screening with Watchlistr. Our intuitive website lets you easily create and manage your personalized movie watchlist, and get timely reminders for upcoming releases, showtimes, and special events. With Watchlistr, you can discover new films, read reviews, watch trailers, and connect with other movie enthusiasts. Say goodbye to missed opportunities and hello to a seamless cinematic experience"
        />
        <meta
          name="keywords"
          content="movie tracker, movie watchlist, cinema, film, movie reviews, movie recommendations"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={darkTheme}>
        <NavContainer />
        <GlobalStyle />
        <Component {...pageProps} />
        {/* <FooterContainer /> */}
      </ThemeProvider>
    </>
  );
}
