import { useState, useEffect } from 'react';
import styles from '@/styles/RandomBox.module.css';
import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function RandomBox() {
    const colors = ['#0389e0', '#e53458ff', '#8c7a5bff', '#b85e61ff', '#7f00cbff', '#02b19fff', '#007a67ff', '#6a53feff', '#475c6dff'];

    const { width = 0 } = useWindowDimensions();
    const [boxColors, setBoxColors] = useState([...colors]);

    useEffect(() => {
        shuffleBoxColors();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const shuffleBoxColors = () => {
        const shuffledColors = [...boxColors].sort(() => Math.random() - 0.5);
        setBoxColors(shuffledColors);
    };

    const handleBoxClick = () => {
        shuffleBoxColors();
    };

    const desktopScreen = (index: number) => {
        switch (index) {
            case 0:
                return { className: `${styles.box} ${styles.bigSquare}`, number: 1 };
            case 1:
                return { className: `${styles.box} ${styles.wide}`, number: 2 };
            case 2:
                return { className: `${styles.box} ${styles.square}`, number: 3 };
            case 3:
                return { className: `${styles.box} ${styles.square}`, number: 4 };
            case 4:
                return { className: `${styles.box} ${styles.smallWide}`, number: 5 };
            case 5:
                return { className: `${styles.box} ${styles.midSquare}`, number: 7 };
            case 6:
                return { className: `${styles.box} ${styles.square}`, number: 8 };
            case 7:
                return { className: `${styles.box} ${styles.midWide}`, number: 6 };
            case 8:
                return { className: `${styles.box} ${styles.smallSquare}`, number: 9 };
            default:
                return { className: `${styles.box} `, number: index };
        };
    }

    const mobileScreen = (index: number) => {
        switch (index) {
            case 0:
                return { className: `${styles.box} ${styles.wide}`, number: 1 };
            case 1:
                return { className: `${styles.box} ${styles.square}`, number: 3 };
            case 2:
                return { className: `${styles.box} ${styles.square}`, number: 4 };
            case 3:
                return { className: `${styles.box} ${styles.wide}`, number: 2 };
            case 4:
                return { className: `${styles.box} ${styles.wide}`, number: 7 };
            case 5:
                return { className: `${styles.box} ${styles.square}`, number: 5 };
            case 6:
                return { className: `${styles.box} ${styles.square}`, number: 8 };
            case 7:
                return { className: `${styles.box} ${styles.square}`, number: 6 };
            case 8:
                return { className: `${styles.box} ${styles.square}`, number: 9 };
            default:
                return { className: `${styles.box}`, number: index };
        };
    }

    const getCustomBox = (index: number) => {
        return width <= 600 ? mobileScreen(index) : desktopScreen(index);
    }

    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {boxColors.map((color, index) => (
                    <div
                        key={index}
                        className={getCustomBox(index)?.className}
                        style={{ backgroundColor: color }}
                        onClick={handleBoxClick}
                        data-number={getCustomBox(index)?.number}
                    ></div>
                ))}
            </div>
        </div >
    );
}
