import { useState } from "react";

const DonationForm = ({
    allCategories = [],
}: {
    allCategories?: { tree_count: number; name: string }[];
}) => {
    const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
    const [customAmount, setCustomAmount] = useState<string>("");

    const handleCategoryClick = (amount: number) => {
        setSelectedAmount(amount);
        setCustomAmount("");
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCustomAmount(e.target.value);
        setSelectedAmount(null);
    };

    const handleNext = () => {
        const finalAmount = selectedAmount ?? Number(customAmount);
        if (!finalAmount || finalAmount <= 0) {
            alert("Please enter a valid donation amount.");
            return;
        }
        console.log("Proceed with donation:", finalAmount);
    };

    return (
        <div className="bg-white p-6 rounded-lg max-w-md mt-20 mx-auto z-50 shadow-lg">
            <h2 className="text-2xl font-bold text-[color:#113259] mb-4">
                JOIN #TEAMTREES!
            </h2>
            <p className="text-[color:#113259] mb-6">$1 plants a tree</p>

            {/* Category buttons */}
            <div className="grid grid-cols-2 gap-3 mb-6">
                {allCategories.map((category) => (
                    <button
                        key={category.name}
                        type="button"
                        onClick={() => handleCategoryClick(category.tree_count)}
                        className={`${
                            selectedAmount === category.tree_count
                                ? "bg-[color:#113259] text-white border-[color:#113259]"
                                : "bg-white text-[color:#113259] hover:bg-green-50 border-[color:#113259]"
                        } font-semibold py-3 px-4 rounded-lg border transition-colors`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {/* Custom amount */}
            <div className="mb-6">
                <input
                    type="number"
                    placeholder="Other amount"
                    value={customAmount}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
            </div>

            {/* Submit */}
            <div className="space-y-3">
                <button
                    onClick={handleNext}
                    type="button"
                    className="w-full bg-[color:#DC582A] hover:bg-[color:#113259] text-white font-bold py-3 px-4 rounded-3xl transition-colors"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default DonationForm;
