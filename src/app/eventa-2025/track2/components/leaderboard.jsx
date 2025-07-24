const Leaderboard = () => {
    const data = [
        { rank: 1, team: "NoResources", overall: 0.577, ap: 0.563, mrr: 0.563, recall1: 0.469, recall5: 0.690, recall10: 0.744, code: "https://github.com/Anonymous-Reseacher/EVENT-Retriever", pdf: "https://drive.google.com/file/d/1WY0WSVxVgkSkERsFiBbH20XZfciw2aJ9/view?usp=drive_link" },
        { rank: 2, team: "23Trinitrotoluen", overall: 0.572, ap: 0.558, mrr: 0.558, recall1: 0.456, recall5: 0.698, recall10: 0.762, code: "https://github.com/BrdH7940/EVENT-Event-Based-Image-Retrieval", pdf: "https://drive.google.com/file/d/1z1emGFeWblzfZNHfj7KFqWS6QIZnkWvt/view?usp=drive_link" },
        { rank: 3, team: "LastSong", overall: 0.563, ap: 0.549, mrr: 0.549, recall1: 0.449, recall5: 0.695, recall10: 0.738, code: "https://github.com/ToTuanAn/eventa_lastsong", pdf: "https://drive.google.com/file/d/17OOxauy6wzqgb4y7l7JN0d2w0CyspBEO/view?usp=drive_link" },
        { rank: 4, team: "Sharingan Retrievers", overall: 0.533, ap: 0.521, mrr: 0.521, recall1: 0.428, recall5: 0.640, recall10: 0.705, code: "https://github.com/PhamPhuHoa-23/Event-Based-Image-Retrieval", pdf: "https://drive.google.com/file/d/1cXW2PCxcR1JnqCtsvv0cDAWGuMkiBPOV/view?usp=drive_link" },
        { rank: 5, team: "ZJH-FDU", overall: 0.368, ap: 0.361, mrr: 0.361, recall1: 0.270, recall5: 0.491, recall10: 0.525, code: "https://github.com/hoooly-z/acmmm_challenge", pdf: "https://drive.google.com/file/d/165SqUWwJq2t29s_3BrWm-nSkefMa3f9h/view?usp=drive_link" },
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
                        <th className="border px-3 py-2">recall5Score</th>
                        <th className="border px-3 py-2">recall10</th>
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
                            <td className="border px-3 py-2">{team.mrr}</td>
                            <td className="border px-3 py-2">{team.recall1}</td>
                            <td className="border px-3 py-2">{team.recall5}</td>
                            <td className="border px-3 py-2">{team.recall10}</td>
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
