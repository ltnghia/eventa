const Leaderboard = () => {
    const data = [
        { rank: 1, team: "Cerebro", overall: 0.550, ap: 0.991, r1: 0.989, r10: 0.995, clip: 0.826, cider: 0.210, code: "https://github.com/leminhhoang04/EVENTA25-ENRIC", pdf: "https://drive.google.com/file/d/11h6cBv8Gi8cvXynqsflWT8aYl_Lmm_oB/view?usp=drive_link" },
        { rank: 2, team: "SodaBread", overall: 0.547, ap: 0.982, r1: 0.977, r10: 0.988, clip: 0.870, cider: 0.205, code: "https://github.com/Noridom1/EVENTA2025-Event-Enriched-Image-Captioning", pdf: "https://drive.google.com/file/d/112BpFQxf0boqeqjKvWA0UoPLluF6KCW1/view?usp=drive_link" },
        { rank: 3, team: "Re:zero Slavery", overall: 0.451, ap: 0.955, r1: 0.945, r10: 0.973, clip: 0.732, cider: 0.156, code: "https://github.com/PhamPhuHoa-23/Event-Enriched-Image-Captioning-ReZeroSlavery", pdf: "https://drive.google.com/file/d/1_-0QwLfkggtv_6t4AWOEB34_ba6S5AiL/view?usp=drive_link" },
        { rank: 4, team: "ITxTK9", overall: 0.420, ap: 0.966, r1: 0.955, r10: 0.983, clip: 0.828, cider: 0.133, code: "https://github.com/seconddtiff/ZSE-Cap", pdf: "https://drive.google.com/file/d/1yo9ZlnXDU2B1qLcVF2IuMVPe9G8sxXqS/view?usp=drive_link" },
        { rank: 5, team: "HCMUS-NoName", overall: 0.282, ap: 0.708, r1: 0.663, r10: 0.801, clip: 0.783, cider: 0.081, code: "https://github.com/mf0212/EVENTA-Challange", pdf: "https://drive.google.com/file/d/1nA-RsByqLOwolnjnHy74uV7M_ppe5A1q/view?usp=drive_link" },
    ];

    return (
        <div className="overflow-x-auto mt-4">
            <table className="min-w-full border border-gray-300 text-sm text-center">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border px-3 py-2">Rank</th>
                        <th className="border px-3 py-2">Team</th>
                        <th className="border px-3 py-2">Overall</th>
                        <th className="border px-3 py-2">AP</th>
                        <th className="border px-3 py-2">Recall@1</th>
                        <th className="border px-3 py-2">Recall@10</th>
                        <th className="border px-3 py-2">CLIPScore</th>
                        <th className="border px-3 py-2">CIDEr</th>
                        <th className="border px-3 py-2">Code</th>
                        <th className="border px-3 py-2">Report</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((team) => (
                        <tr key={team.rank} className="hover:bg-gray-100">
                            <td className="border px-3 py-2">{team.rank}</td>
                            <td className="border px-3 py-2 font-medium">{team.team}</td>
                            <td className="border px-3 py-2 font-bold">{team.overall}</td>
                            <td className="border px-3 py-2">{team.ap}</td>
                            <td className="border px-3 py-2">{team.r1}</td>
                            <td className="border px-3 py-2">{team.r10}</td>
                            <td className="border px-3 py-2">{team.clip}</td>
                            <td className="border px-3 py-2">{team.cider}</td>
                            <td className="border px-3 py-2">
                                <a href={team.code} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    Github
                                </a>
                            </td>
                            <td className="border px-3 py-2">
                                <a href={team.pdf} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    Pdf
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;
