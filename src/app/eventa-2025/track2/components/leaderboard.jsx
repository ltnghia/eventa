const Leaderboard = () => {
    const data = [
        // { rank: 1, team: "AlphaAI", ap: 87.5, r1: 92.1, r10: 98.3, clip: 84.2, cider: 120.3, overall: 90.5 },
        // { rank: 2, team: "Visionary", ap: 85.3, r1: 90.8, r10: 97.5, clip: 83.7, cider: 115.6, overall: 88.9 },
        // { rank: 3, team: "MultiModalX", ap: 84.9, r1: 89.2, r10: 96.2, clip: 82.1, cider: 113.4, overall: 87.6 },
        // { rank: 4, team: "SkyNet", ap: 83.1, r1: 88.0, r10: 95.6, clip: 80.9, cider: 110.2, overall: 86.4 },
        // { rank: 5, team: "NeuroLink", ap: 82.7, r1: 87.4, r10: 94.8, clip: 81.3, cider: 108.5, overall: 85.9 },
        // { rank: 6, team: "DataDream", ap: 80.5, r1: 85.1, r10: 93.0, clip: 79.4, cider: 106.3, overall: 84.2 },
        // { rank: 7, team: "VLMasters", ap: 79.3, r1: 84.2, r10: 91.6, clip: 78.5, cider: 104.0, overall: 83.1 },
        // { rank: 8, team: "EventHorizon", ap: 77.8, r1: 82.6, r10: 90.3, clip: 77.1, cider: 101.9, overall: 81.7 },
        // { rank: 9, team: "GroundTruth", ap: 76.1, r1: 81.0, r10: 89.5, clip: 75.6, cider: 100.2, overall: 80.4 },
        // { rank: 10, team: "ZeroShotX", ap: 74.5, r1: 79.8, r10: 88.0, clip: 74.3, cider: 98.5, overall: 79.2 },
    ];

    return (
        <div className="overflow-x-auto mt-4">
            <table className="min-w-full border border-gray-300 text-sm text-center">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border px-3 py-2">Rank</th>
                        <th className="border px-3 py-2">Team</th>
                        <th className="border px-3 py-2">AP</th>
                        <th className="border px-3 py-2">Recall@1</th>
                        <th className="border px-3 py-2">Recall@10</th>
                        <th className="border px-3 py-2">CLIPScore</th>
                        <th className="border px-3 py-2">CIDEr</th>
                        <th className="border px-3 py-2">Overall</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((team) => (
                        <tr key={team.rank} className="hover:bg-gray-100">
                            <td className="border px-3 py-2">{team.rank}</td>
                            <td className="border px-3 py-2 font-medium">{team.team}</td>
                            <td className="border px-3 py-2">{team.ap}</td>
                            <td className="border px-3 py-2">{team.r1}</td>
                            <td className="border px-3 py-2">{team.r10}</td>
                            <td className="border px-3 py-2">{team.clip}</td>
                            <td className="border px-3 py-2">{team.cider}</td>
                            <td className="border px-3 py-2 font-bold">{team.overall}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;
