import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 my-5 lg:px-16 sm:px-5 px-5">
        <div className="lg:col-span-3 bg-white dark:bg-dark-500  rounded-2xl col-span-12 sm:col-span-12 text-center shadow-custom-light dark:shadow-custom-dark ">
          <Sidebar />
        </div>
        <div className="lg:col-span-9 bg-white dark:bg-dark-500  rounded-2xl col-span-12 sm:col-span-12 flex flex-col overflow-hidden shadow-custom-light dark:shadow-custom-dark relative ">
          <Navbar />
          <AnimatePresence exitBeforeEnter >
          <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
