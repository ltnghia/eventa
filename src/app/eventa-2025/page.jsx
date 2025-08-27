"use client";
import Image from "next/image";
import Section from "../components/section";
import { useEffect } from "react";
import Introduction from "./components/introduction";
import Track1 from "./components/track1";
import Track2 from "./components/track2";
import Dataset from "./components/dataset";
import Organizers from "./components/organizers";
import CallForPapers from "./components/callforpapers";
import Rules from "./components/rules";
import ImportantDates from "./components/importantdates";
import AcceptedPapers from "./components/acceptedpapers";
// import Leaderboard from "./components/leaderboard";
import Schedule from "./components/schedule";
import Registration from "./components/registration";
import Acknowledgements from "./components/acknowledgements";
import Publications from "./components/publications";
// import Speakers from "./components/speakers";
// import TechnicalSupporters from "./components/technical-supporters";
import { imagePrefix } from "../../constant.js";
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
                    <div className="text-[1.2em] text-center mt-2">
                      EVENTA Grand Challenge - ACM Multimedia 2025
                    </div>
                    <div className="text-[0.8em]  text-white text-center mt-5">
                        Dublin, Ireland, Oct. 27-31, 2025
                    </div>
                </div>
            </div>
            <main className="flex min-h-screen flex-col items-center   sm:px-24 px-4 ">

                <div className="sm:flex flex-row grid mt-10 sm:w-[65em] w-full justify-center">
                    <a className={button} href="#introduction">
                        Challenge Overview
                    </a>
                    <a className={button} href="./eventa-2025/track1">
                        Event-Enriched Image Retrieval and Captioning
                    </a>
                    <a className={button} href="./eventa-2025/track2">
                        Event-Based Image Retrieval
                    </a>
                    <a className={button} href="#rules">
                        Challenge Rules
                    </a>
                    <a className={button} href="#dataset">
                        Dataset
                    </a>
                    <a className={button} href="#callforpapers">
                        Paper Submission
                    </a>
                    <a className={button} href="#importantdates">
                        Important Dates
                    </a>
                    {/* <a className={button} href="#acceptedpapers">
                        Accepted Papers
                    </a>
                    <a className={button} href="#leaderboard">
                        Leaderboard
                    </a>
                    <a className={button} href="#schedule">
                        Challenge Schedule
                    </a>
                    <a className={button} href="#organizers">
                        Organizers
                    </a> */}
                </div>

                <Section body={<Introduction />} id="introduction" />
                <Section body={<Registration />} id="registration" />
                <Section title={"Track 1: Event-Enriched Image Retrieval and Captioning"} body={<Track1 />} id="track1" />
                <Section title={"Track 2: Event-Based Image Retrieval"} body={<Track2 />} id="track2" />
                <Section title={"Challenge Rules"} body={<Rules />} id="rules" />
                <Section title={"Dataset"} body={<Dataset />} id="dataset" />
                <Section title={"Paper Submission"} body={<CallForPapers />} id="callforpapers" />
                <Section title={"Important Dates"} body={<ImportantDates />} id="importantdates" />
                <Section title={"Accepted Papers"} body={<AcceptedPapers />} id="acceptedpapers" />
                {/* <Section title={"Leaderboard"} body={<Leaderboard />} id="leaderboard" /> */}
                <Section title={"Challenge Schedule"} body={<Schedule />} id="schedule" />
                {/* <Section title={"Speakers"} body={<Speakers />} id="speakers" /> */}
                <Section title={"Publications"} body={<Publications />} id="publications" />
                <Section title={"Organizers"} body={<Organizers />} id="organizers" />
                {/* <Section title={"Acknowledgements"} body={<Acknowledgements />} id="acknowledgements" /> */}
                {/* <Section title={"Technical Supporters"} body={<TechnicalSupporters />} id="TechnicalSupporters" /> */}
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
