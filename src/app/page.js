"use client";

import Image from "next/image";
import Section from "./components/section";
import { useEffect } from "react";
import Abstract from "./components/abstract";
import { imagePrefix } from "../constant.js";
// import Header from "./components/header";
export default function Home() {

    const topClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    let mybutton = null;
    useEffect(() => {
        window.onscroll = function () { scrollFunction() };
        mybutton = document.getElementById("backToTop");
        mybutton.style.display = "none";
    })

    function scrollFunction() {
        const defaultVal = 500;
        if (document.body.scrollTop > defaultVal || document.documentElement.scrollTop > defaultVal) {
            if (mybutton)
                mybutton.style.display = "block";
        } else {
            if (mybutton)
                mybutton.style.display = "none";
        }
    }
    const button = "hover:cursor-pointer text-[#790819] hover:text-white border border-[#790819] hover:bg-[#790819] focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-4 mb-2"
    return (
        <div>
            <div className="header">
                <div className="justify-center flex flex-col sm:text-[2em] text-[1.5em] text-[#f5f5f5]  font-medium ">
                    <div className="text-[0.8em] text-center mt-2">
                    Event-Enriched Image Analysis (EVENTA)
                    </div>
                </div>
            </div>

            <main className="flex min-h-screen flex-col items-center   sm:px-24 px-4 ">
                {/* <div className="sm:flex flex-row grid mt-10 sm:w-[65em] w-full justify-center">
                    <a className={button} href="#callforpapers">
                        Call for Papers
                    </a>
                </div> */}

                <Section body={<Abstract />} id="abstract" />

                <div className="fixed bottom-6 right-6">
                    <button id="backToTop" className="bg-[#790819] hover:bg-[#802323] text-white font-bold py-4 px-4 rounded-full shadow-lg" onClick={() => topClick()}>
                        <svg width="20" height="20" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33.7879 60H26.2121V14.5455L5.37879 35.3788L0 30L30 0L60 30L54.6212 35.3788L33.7879 14.5455V60Z" fill="white" />
                        </svg>
                    </button>
                </div>
            </main>
        </div>

    );
}
