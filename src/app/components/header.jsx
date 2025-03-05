
const Header = ()=>{
    const highlight = "underline font-bold text-white"
    return (
        <div className="header">
            <div className="justify-center flex flex-col sm:text-[2em] text-[1.5em] text-[#f5f5f5]  font-medium ">
                {/* <div className="text-white text-center text-[1.7em]">
                     <span className="text-white tracking-[0.35em] font-semibold">Event-Enriched Image Analysis (EVENTA) </span>
                </div> */}
                <div className="text-white text-center text-[1.7em]">
                   Event-Enriched Image Analysis (EVENTA)
                </div>
                {/* <div className="text-[0.8em] text-center mt-2">
                     1st Workshop on Ambiguous Object Analysis in Computer Vision (AOCV)
                </div>
                <div className="text-[0.8em] text-center ">
                    ACM Multimedia 2025
                </div>
                <div className="text-[0.55em]  text-white text-center mt-5">
                    Dublin, Ireland 27 - 31.10.2025
                </div> */}
            </div>
           
           
        </div>
    );
}
export default Header;
