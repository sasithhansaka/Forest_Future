import TotalTrees from "./TotalTrees";
import Leaderboard from "./Leaderboard";



const HomeIndex = ({ allDonations, topDonations, totalTrees }: any) => {
    return (
        <div className="bg-slate-200">
          
            <TotalTrees count={totalTrees} />
            <Leaderboard allDonations={allDonations}
            topDonations={topDonations}/>
        </div>
    );
};

export default HomeIndex;
