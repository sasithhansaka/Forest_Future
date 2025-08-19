import HeroSection from "./Hero";
import { useEffect, useState } from "react";

const TotalTrees = ({ count }: { count: number }) => {
    const [displayCount, setDisplayCount] = useState(-10);

    useEffect(() => {
        const animate = () => {
            const start = Math.max(0, count - 111); // start 111 below the actual number
            const target = count;
            let current = start;

            const interval = setInterval(() => {
                current += 1; // increment by 1
                setDisplayCount(current);
                if (current >= target) {
                    clearInterval(interval);
                }
            }, 10); // update every 10ms
        };

        animate();

        const refreshInterval = setInterval(() => {
            animate();
        }, 10000); // repeat every 3 seconds

        return () => clearInterval(refreshInterval);
    }, [count]);

    return (
        <div className="font-poppins w-full h-screen text-center">
            <img
                src="sky.jpeg"
                alt="Sky"
                className="absolute top-0 left-0 w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[600px] 2xl:h-[700px] object-cover z-0 opacity-60"
            />

            <HeroSection />
            <h1 className="relative z-10 text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-extrabold text-white mt-6">
                {displayCount.toLocaleString()}
            </h1>

            <img
                src="header.png"
                alt="Tree"
                className="relative z-10 w-full max-h-96 mx-auto mt-4 object-contain"
            />
        </div>
    );
};

export default TotalTrees;
