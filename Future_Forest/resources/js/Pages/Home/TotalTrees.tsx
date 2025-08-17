const TotalTrees = ({ count }: { count: number }) => {
    return (
        <div className="relative w-full h-screen text-center">
            <img
                src="sky.jpeg" // put sky.png inside public/images/
                alt="Sky"
                className="absolute top-0 left-0 w-full h-auto object-cover z-0 opacity-60"
            />

            <h1 className="relative z-10 text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-extrabold text-white mt-20">
                {count}
            </h1>

            {/* Optional: Tree image below count */}
            <img
                src="header.png" // put tree.png inside public/images/
                alt="Tree"
                className="relative z-10 w-full max-h-96 mx-auto mt-4 object-contain"
            />
        </div>
    );
};

export default TotalTrees;
