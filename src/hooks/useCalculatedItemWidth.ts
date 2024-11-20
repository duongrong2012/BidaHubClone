import { useState, useEffect } from 'react';

function useCalculatedItemWidth(containerRef: React.RefObject<HTMLElement>, gap: number) {
    const [itemWidth, setItemWidth] = useState<number>(0);

    useEffect(() => {
        function calculateItemWidth() {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;

                let numberOfGap;
                let calculatedItemWidth;

                if (containerWidth < 640) {
                    numberOfGap = 1;
                    calculatedItemWidth = (containerWidth - gap * numberOfGap) / 2;
                } else if (containerWidth >= 640 && containerWidth < 1024) {
                    numberOfGap = 2;
                    calculatedItemWidth = (containerWidth - gap * numberOfGap) / 3;
                } else {
                    numberOfGap = 4;
                    calculatedItemWidth = (containerWidth - gap * numberOfGap) / 5;
                }

                setItemWidth(calculatedItemWidth);
            }
        }

        calculateItemWidth();

        window.addEventListener('resize', calculateItemWidth);
        return () => {
            window.removeEventListener('resize', calculateItemWidth);
        };
    }, [containerRef, gap]);

    return itemWidth;
}

export default useCalculatedItemWidth;
