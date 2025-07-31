"use client"
import FAQ from "./_components/FAQ";
import Features from "./_components/Features";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Navbar from "./_components/Navbar";
import Pricing from "./_components/Pricing";
import Testimonials from "./_components/Testimonials";



export default function Home() {

  return (
    <div className="">
      <Navbar/>
      <div className="pt-16">
        <Header/>
        <Features/>
        <Pricing/>
        <Testimonials/>
        <FAQ/>
        <Footer/>
      </div>
    </div>
  );
}
