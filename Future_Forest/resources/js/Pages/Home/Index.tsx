import TotalTrees from "./Partials/TotalTrees";
import Leaderboard from "./Partials/Leaderboard";
import DonationForm from "./Partials/DonationForm";
import Footer from "./Partials/Footer";
// import { FaUserCircle } from "react-icons/fa";
// import { Inertia } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";

const HomeIndex = ({
    allDonations,
    topDonations,
    totalTrees,
    allCategories,
}: any) => {
    return (
        <div className="bg-slate-200 relative">
            <TotalTrees count={totalTrees} />
            <DonationForm allCategories={allCategories} />
            <Leaderboard
                allDonations={allDonations}
                topDonations={topDonations}
            />
            <Footer />

            {/* Floating Profile Icon */}
            <button className="fixed bottom-10 right-9 z-50 bg-white p-1 rounded-full shadow-lg hover:bg-gray-100 transition-colors md:p-4 lg:p-3">
                <NavLink
                    href={route("profile.userdonations")}
                    active={route().current("profile.userdonations")}
                >
                Profile
                </NavLink>
            </button>
        </div>
    );
};

export default HomeIndex;
