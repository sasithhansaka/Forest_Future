import TotalTrees from "./TotalTrees";
import Leaderboard from "./Leaderboard";



const HomeIndex = ({ allDonations, topDonations, totalTrees }: any) => {
    return (
        <div className="bg-slate-100">
          
            <TotalTrees count={totalTrees} />
            <Leaderboard allDonations={allDonations}
            topDonations={topDonations}/>

      


            {/* <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Future Forest Donations</h1>

            {/* Summary section */}
            {/* <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-green-200 rounded">
                    <p className="text-2xl">{totalTrees}</p>
                </div>
                <div className="p-4 bg-blue-200 rounded">
                    <p>{topDonations.display_name} - {topDonations.trees_planted} trees</p>
                </div>
                <div className="p-4 bg-yellow-200 rounded">
                    <p>{allDonations.length}</p>
                </div>
            </div> */}

            {/* List of all donations */}
            {/* <div>
                <h2 className="text-2xl font-bold mb-4">All Donations</h2>
                <table className="min-w-full border">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2 border">Name</th>
                            <th className="p-2 border">Trees Planted</th>
                            <th className="p-2 border">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allDonations.map((donation: any) => (
                            <tr key={donation.id}>
                                <td className="p-2 border">{donation.display_name}</td>
                                <td className="p-2 border">{donation.trees_planted}</td>
                                <td className="p-2 border">{donation.created_at}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div> */}
        </div>
    );
};

export default HomeIndex;
