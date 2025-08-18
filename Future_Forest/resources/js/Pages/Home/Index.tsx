import TotalTrees from "./TotalTrees";
import Leaderboard from "./Leaderboard";
import DonationForm from "./DonationForm";




const HomeIndex = ({ allDonations, topDonations, totalTrees,allCategories }: any) => {
    return (
        <div className="bg-slate-200">
          
            <TotalTrees count={totalTrees} />
            <DonationForm  allCategories={allCategories}/>
            <Leaderboard allDonations={allDonations}
            topDonations={topDonations}/>
        </div>
    );
};

export default HomeIndex;
