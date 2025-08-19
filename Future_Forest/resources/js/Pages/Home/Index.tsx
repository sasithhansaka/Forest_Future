import TotalTrees from "./Partials/TotalTrees";
import Leaderboard from "./Partials/Leaderboard";
import DonationForm from "./Partials/DonationForm";
import Footer from "./Partials/Footer";

const HomeIndex = ({
    allDonations,
    topDonations,
    totalTrees,
    allCategories,
}: any) => {
    return (
        <div className="bg-slate-200">
            <TotalTrees count={totalTrees} />
            <DonationForm allCategories={allCategories} />
            <Leaderboard
                allDonations={allDonations}
                topDonations={topDonations}
            />
            <Footer />
        </div>
    );
};

export default HomeIndex;
