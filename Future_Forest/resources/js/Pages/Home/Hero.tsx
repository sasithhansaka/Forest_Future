const HeroSection = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center text-center py-12 ">
            <img 
                src="logo.png" 
                alt="Logo"
                className="w-42 h-16 mb-6 z-10"
            />

            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 uppercase text-white z-10" >
                Join the movement!
            </h1>

            <p className="text-lg md:text-2xl max-w-2xl text-white z-20">
                The team is growing every day and scoring wins for the planet. Plant with us and track our progress!
            </p>
        </div>
    );
};

export default HeroSection;
