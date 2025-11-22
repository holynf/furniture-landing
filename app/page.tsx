"use client";

import Landing from "@/components/Landing";
import Benefits from "@/components/Benefits";
import Products from "@/components/Products";
import Experiences from "@/components/Experiences";
import Materials from "@/components/Materials";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className={"main-page"}>
            <Landing />
            <Benefits />
            <Products />
            <Experiences />
            <Materials />
            <Testimonials />
            <Footer />
        </div>
    );
}
