import { useForm } from "@inertiajs/react";

const DonationDetailsForm = ({
    categoryName,
    categoryPrice,
    categoryId,
    tree_count
}: {
    categoryName: string;
    categoryPrice: number;
    categoryId:number;
    tree_count:number;
}) => {
    const { data, setData, post, processing, errors } = useForm({
        display_name: "",
        team_name: "",
        phone: "",
        message: "",
        category_id:categoryId,
        trees_planted:tree_count,
        amount: categoryPrice,
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        post(route("donations.store"));
    }

    return (
        <div>
            <h2 className="text-2xl font-bold text-[color:#113259] mb-4 text-center">
                Donation Details
            </h2>

            <div className="mb-4 text-center">
                <p className="text-lg font-semibold text-[color:#113259]">
                    {categoryName}
                </p>
                <p className="text-[color:#113259]">Amount: ${categoryPrice}</p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Display Name
                    </label>
                    <input
                        type="text"
                        value={data.display_name}
                        onChange={(e) => setData("display_name", e.target.value)}
                        placeholder="Display Name"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                    />
                    {errors.display_name && (
                        <p className="text-red-500 text-sm mt-1">{errors.display_name}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Team Name (optional)
                    </label>
                    <input
                        type="text"
                        value={data.team_name}
                        onChange={(e) => setData("team_name", e.target.value)}
                        placeholder="Team Name"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    {errors.team_name && (
                        <p className="text-red-500 text-sm mt-1">{errors.team_name}</p>
                    )}
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
                        value={data.phone}
                        onChange={(e) => setData("phone", e.target.value)}
                        placeholder="Mobile Phone"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message (optional)
                        <span className="text-xs text-gray-500 block mt-1">
                            For display on the website
                        </span>
                    </label>
                    <textarea
                        value={data.message}
                        onChange={(e) => setData("message", e.target.value)}
                        placeholder="My #TeamTrees message is..."
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="w-full text-white font-bold py-3 px-4 rounded-3xl transition-colors bg-[color:#DC582A] disabled:opacity-50"
                >
                    {processing ? "Submitting..." : "Confirm Donation"}
                </button>
            </form>
        </div>
    );
};

export default DonationDetailsForm;
