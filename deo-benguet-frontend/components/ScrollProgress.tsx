"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0);
        };
        updateProgress();
        window.addEventListener("scroll", updateProgress, { passive: true });
        window.addEventListener("resize", updateProgress);
        return () => {
            window.removeEventListener("scroll", updateProgress);
            window.removeEventListener("resize", updateProgress);
        };
    }, []);

    return <div aria-hidden="true" className="fixed left-0 top-0 z-[60] h-1 bg-teal-400 transition-[width] duration-150" style={{ width: `${progress}%` }} />;
}
