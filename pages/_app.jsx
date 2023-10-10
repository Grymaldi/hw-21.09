import Nav from "../components/Nav";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <header><Nav /></header>
      <main><Component {...pageProps} /></main>
      <footer><hr />(c) 2023</footer>
    </>
  );
}
