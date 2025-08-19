import { useState } from "react";

const Leaderboard = ({ allDonations, topDonations }: any) => {
    const [activeTab, setActiveTab] = useState<"recent" | "top">("recent");

    const displayedDonations =
        activeTab === "recent"
            ? allDonations.slice(0, 25)
            : topDonations.slice(0, 15);

    return (
        <div className="w-full flex flex-col items-center justify-center space-y-4 mt-20 ">
            <h1
                className="text-7xl font-extrabold uppercase text-[color:#113259] "
                style={{ fontWeight: 900 }}
            >
                Leaderboard
            </h1>

            <div className="flex ">
                <button
                    className={`px-4 py-2transition-all duration-200 font-semibold ${
                        activeTab === "recent"
                            ? "bg-gray-600 text-white shadow-md  rounded-l-lg  "
                            : "bg-gray-300 text-[color:#113259] rounded-l-lg "
                    } text-sm sm:text-base`}
                    onClick={() => setActiveTab("recent")}
                >
                    MOST RECENT
                </button>
                <button
                    className={`px-4 py-2  transition-all duration-200 font-semibold ${
                        activeTab === "top"
                            ? "bg-gray-600 text-white rounded-r-lg shadow-md"
                            : "bg-gray-300 text-[color:#113259] rounded-r-lg "
                    } text-sm sm:text-base`}
                    onClick={() => setActiveTab("top")}
                >
                    MOST TREES
                </button>
            </div>

            <div className="w-full max-w-2xl">
                {displayedDonations
                    .slice(0, 20)
                    .map((donation: any, index: number) => (
                        <div
                            key={index}
                            className="flex items-start gap-6 p-4 border-b border-gray-200 bg-white rounded-lg shadow-lg mb-3 last:mb-0"
                        >
                            <img
                                src={
                                    Math.random() < 0.5
                                        ? "icon.svg"
                                        : "icon2.svg"
                                }
                                className="w-16 h-16 rounded-full object-cover bg-gray-100 mt-3"
                                alt="User"
                            />

                            <div className="flex-1 min-w-0">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-1">
                                    <span className=" text-gray-900 text-sm sm:text-base font-extrabold truncate">
                                        {donation.display_name}
                                    </span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-white font-semibold text-sm bg-green-600 rounded-2xl sm:text-base whitespace-nowrap px-5 py-1">
                                            {donation.trees_planted.toLocaleString()}{" "}
                                            trees
                                        </span>
                                        {donation.amount && (
                                            <span className="text-gray-500 text-xs whitespace-nowrap">
                                                {donation.amount.toLocaleString()}{" "}
                                                raised
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <p className="text-gray-600 text-sm line-clamp-2">
                                    {donation.message}
                                </p>

                                <p className="text-gray-400 text-xs">
                                    {new Date(
                                        donation.created_at
                                    ).toLocaleString([], {
                                        month: "numeric",
                                        day: "numeric",
                                        year: "2-digit",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Leaderboard;
