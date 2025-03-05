const CallForPapers = () => {
    return (
        <div className="text-justify">
            
            <p className="text-pretty mb-2">
            <span className="font-bold">We accept papers which are up to 8 pages in ACM MM format, excluding references.</span> Overlength papers will be rejected without review. Paper submissions must conform with the “double-blind” review policy. Submission policies adhere to <span className="font-bold"><a href='https://acmmm2025.org/information-for-authors' className="underline text-[1.1em]">the ACM MM 2025 submission policies</a></span>.</p>
            <p>We recommend participants to cite <span className="font-bold"><a href='https://arxiv.org/' className="underline text-[1.1em] text-[#232ba1]">the Challenge Overview paper</a></span> written by the organizers. This paper contains all the necessary information on the challenge definition and the dataset. Therefore, participants do not need to repeat to describe the challenge or the dataset in details. Instead, participants can exclusively present the motivation for their approach, explaining their method, showing and analyzing their results, and giving an outlook on future work, etc.</p>
            <span className="font-bold text-[1.3em]"><a href='https://cmt3.research.microsoft.com/EVENTA25' className="underline text-[1.1em] text-[#232ba1]">Submit your paper here</a></span>.
        </div>
    )
}
export default CallForPapers;
