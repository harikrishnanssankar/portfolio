import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid grid-cols-12 gap-6 my-8 lg:px-20 px-5">
      <div className="lg:col-span-3 bg-white rounded-2xl col-span-12 text-center " >
        <Sidebar/>
      </div>
      <div className="lg:col-span-9 bg-white rounded-2xl col-span-12 flex flex-col " >
        <Navbar/>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
