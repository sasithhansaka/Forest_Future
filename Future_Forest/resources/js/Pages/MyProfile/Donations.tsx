import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Donations({ donations }: any) {
    return (
        <AuthenticatedLayout>
            <Head title="Profile" />
            <div className="p-4 sm:p-6 lg:p-10 max-w-5xl mx-auto">
                <h1 className="text-2xl sm:text-3xl font-extrabold mb-6 text-gray-800">
                    My Donations
                </h1>

                {donations.length === 0 ? (
                    <p className="text-gray-500 text-center text-sm sm:text-base">
                        You haven’t made any donations yet.
                    </p>
                ) : (
                    <div className="space-y-5">
                        {donations.map((donation: any, index: number) => (
                            <div
                                key={donation.id}
                                className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 p-4 sm:p-6 border border-gray-200 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
                            >
                                <img
                                    src={
                                        Math.random() < 0.5
                                            ? "/icon.svg"
                                            : "/icon2.svg"
                                    }
                                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover bg-gray-100 mx-auto sm:mx-0"
                                    alt="User"
                                />

                                <div className="flex-1 min-w-0 text-center sm:text-left">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
                                        <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                                            <span className="text-white font-semibold text-xs sm:text-sm md:text-base bg-green-600 rounded-2xl whitespace-nowrap px-4 py-1.5">
                                                {donation.trees_planted.toLocaleString()}{" "}
                                                trees
                                            </span>
                                            {donation.amount && (
                                                <span className="text-gray-600 text-xs sm:text-sm whitespace-nowrap bg-gray-100 px-3 py-1 rounded-full">
                                                    {donation.amount.toLocaleString()}{" "}
                                                    raised
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Message */}
                                    {donation.message && (
                                        <p className="text-gray-700 text-sm sm:text-base leading-snug mb-1 line-clamp-2">
                                            {donation.message}
                                        </p>
                                    )}

                                    {/* Date */}
                                    <p className="text-gray-400 text-xs sm:text-sm">
                                        {new Date(
                                            donation.created_at
                                        ).toLocaleString([], {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
