import { useState } from "react";
import DonationDetailsForm from "./DonationDetailsForm";

const DonationForm = ({
    allCategories = [],
}: {
    allCategories?: {
        tree_count: number;
        name: string;
        id: number;
        price: number;
    }[];
}) => {
    const [selectedCategory, setSelectedCategory] = useState<{
        tree_count: number;
        name: string;
        id: number;
        price: number;
    } | null>(null);

    const [customAmount, setCustomAmount] = useState<string>("");
    const [step, setStep] = useState<number>(1);

    const handleCategoryClick = (category: {
        tree_count: number;
        name: string;
        id: number;
        price: number;
    }) => {
        setSelectedCategory(category);
        setCustomAmount("");
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCustomAmount(e.target.value);
        setSelectedCategory(null);
    };

    const handleNext = () => {
        const finalAmount = selectedCategory
            ? selectedCategory.tree_count
            : Number(customAmount);

        if (!finalAmount || finalAmount <= 0) {
            alert("Please enter a valid donation amount.");
            return;
        }

        setStep(2);
    };

    return (
        <div className="bg-white p-6 rounded-lg max-w-md mt-20 mx-auto z-50 shadow-lg">
            {step === 1 && (
                <>
                    <h2 className="text-2xl font-bold text-[color:#113259] mb-4 text-center">
                        JOIN #TEAMTREES!
                    </h2>
                    <p className="text-[color:#113259] mb-6 text-center">
                        $1 plants a tree
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                        {allCategories.map((category) => (
                            <button
                                key={category.name}
                                type="button"
                                onClick={() => handleCategoryClick(category)}
                                className={`${
                                    selectedCategory?.tree_count ===
                                    category.tree_count
                                        ? "bg-[color:#113259] text-white border-[color:#113259]"
                                        : "bg-white text-[color:#113259] hover:bg-green-50 border-[color:#113259]"
                                } font-semibold py-3 px-4 rounded-lg border transition-colors`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    <div className="mb-6">
                        <input
                            type="number"
                            placeholder="Other amount"
                            value={customAmount}
                            onChange={handleInputChange}
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                    </div>

                    <div className="space-y-3">
                        <button
                            onClick={handleNext}
                            type="button"
                            className="w-full bg-[color:#DC582A] text-white font-bold py-3 px-4 rounded-3xl transition-colors"
                        >
                            Next
                        </button>
                    </div>
                </>
            )}

            {step === 2 && (
                <DonationDetailsForm
                    categoryName={selectedCategory?.name || "Custom Donation"}
                    categoryPrice={
                        selectedCategory?.price || Number(customAmount)
                    }
                    categoryId={selectedCategory?.id || Number(customAmount)}
                    tree_count={selectedCategory?.tree_count || Number(customAmount)}
                />
            )}
        </div>
    );
};

export default DonationForm;
