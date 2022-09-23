import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";
import LoginBtn from "@components/login-btn";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sketaria Web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Sketaria Web" />
        <hr />
        <p className="description">
          Sitio web para los trámites del ayuntamiento de Sketaria.
        </p>
        <LoginBtn />
      </main>
      <Footer />
    </div>
  );
}
