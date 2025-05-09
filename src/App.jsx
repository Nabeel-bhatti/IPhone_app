import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Hightlights from "./components/Hightlights";
import Model from "./components/Model";
import * as Sentry from "@sentry/react";
import { Features } from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Hightlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
