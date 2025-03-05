const Instruction = () => {
    return (
        <div className="text-justify">
            <p>
                Participants require to submit a CSV file with the format name (<span className="font-bold">TeamName_EVENTA2025_Track1.csv</span>) to <span className="font-bold"><a href='https://codalab.lisn.upsaclay.fr/competitions/' className="underline text-[1.1em] text-[#232ba1]">CodaLab</a></span>. The file has to be compressed to <span className="font-bold">submission.zip</span> before being submitted to CodaLab.
            </p>
            <p>
                Participants also require to submit a detailed paper through <span className="font-bold"><a href='https://cmt3.research.microsoft.com/EVENTA25' className="underline text-[1.1em] text-[#232ba1]">the official challenge platform</a></span> to validate their solutions.
            </p>
            <p>More details coming soon.</p>
        </div>
    )
}
export default Instruction;