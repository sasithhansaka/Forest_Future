const DonationDetailsForm = ({
    categoryName,
    categoryPrice,
}: {
    categoryName: string;
    categoryPrice: number;
}) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-[color:#113259] mb-4 text-center">
                Donation Details
            </h2>

=            <div className="mb-4 text-center">
                <p className="text-lg font-semibold text-[color:#113259]">
                    {categoryName}
                </p>
                <p className="text-gray-600">Amount: ${categoryPrice}</p>
            </div>

            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Display Name
                    </label>
                    <input
                        type="text"
                        placeholder="Display Name"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Mobile Phone (optional)
                        <span className="text-xs text-gray-500 block mt-1">
                            By entering a phone number, you consent to receive text messages
                        </span>
                    </label>
                    <input
                        type="tel"
                        placeholder="Mobile Phone"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message (optional)
                        <span className="text-xs text-gray-500 block mt-1">
                            For display on the website
                        </span>
                    </label>
                    <textarea
                        placeholder="My #TeamTrees message is..."
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-[color:#113259] text-white font-bold py-3 px-4 rounded-3xl transition-colors hover:bg-[color:#0d2a4a]"
                >
                    Confirm Donation
                </button>
            </form>
        </div>
    );
};

export default DonationDetailsForm;