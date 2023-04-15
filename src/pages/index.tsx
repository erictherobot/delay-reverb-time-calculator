import Head from "next/head";
import { ReverbAndDelayCalculator } from "@/components/ReverbAndDelayCalculator";
import Header from "@/components/Header";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Reverb & Delay Time Calculator</title>
        <meta
          name="description"
          content="Optimize your audio production with the Reverb & Delay Time Calculator, a user-friendly tool that generates precise reverb and delay times based on BPM for a variety of note durations, ensuring a polished sound in your music projects."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="-mt-10 container mx-auto min-h-screen flex items-center justify-center">
        <ReverbAndDelayCalculator />
      </div>
    </>
  );
};

export default Home;
