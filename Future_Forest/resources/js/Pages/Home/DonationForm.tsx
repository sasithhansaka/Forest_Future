const DonationForm = ({ 
  allCategories 
}: { 
  allCategories: { amount: number; label: string }[] 
}) => {
  return (
    <div className="bg-slate-200 p-6 rounded-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-green-700 mb-4">JOIN #TEAMTREES!</h2>
      <p className="text-gray-700 mb-6">$1 plants a tree</p>
      
      <div className="grid grid-cols-2 gap-3 mb-6">
        {allCategories.map((category) => (
          <button 
            key={category.amount}
            className="bg-white hover:bg-green-50 text-green-700 font-semibold py-3 px-4 rounded-lg border border-green-300 transition-colors"
          >
            {category.label}
          </button>
        ))}
      </div>
      
      <div className="mb-6">
        <input 
          type="text" 
          placeholder="Other amount" 
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>
      
      <div className="space-y-3">
        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">
          Next
        </button>
      </div>
    </div>
  );
};

export default DonationForm;