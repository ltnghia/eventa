const Header = () => {
    const highlight = "underline font-bold text-white";
    return (
        <div className="header">
            <div className="justify-center flex flex-col sm:text-[6em] text-[4.5em] text-[#f5f5f5] font-medium">
                <div className="text-white text-center text-[5.1em]">
                    Event-Enriched Image Analysis (EVENTA)
                </div>
            </div>
        </div>
    );
};

export default Header;