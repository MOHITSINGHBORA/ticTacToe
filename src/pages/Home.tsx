import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../context/themeContext'
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import markAudio from '../assets/markSound.mp3'
import winAudio from '../assets/congratulations.mp3'
import looseAudio from '../assets/loose.mp3'

const Home = () => {

    const [turn, setTurn] = useState<"cross" | "circle">("cross");
    const [box, setBox] = useState<string[]>(Array(9).fill(""));
    const theme = useContext(ThemeContext);

    if (!theme) return null;

    const { dark, toggleTheme } = theme;

    const wins: number[][] = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const checkWinner = (): string | null => {
        for (let pattern of wins) {
            const [a, b, c] = pattern;

            if (
                box[a] &&
                box[a] === box[b] &&
                box[a] === box[c]
            ) {
                return box[a];
            }
        }

        return null;
    };

    const winner = checkWinner();

    const isDraw =
        box.every((item) => item !== "") && !winner;

    const mark = (index: number) => {

        if (winner || box[index] !== "") return;

        const audio = new Audio(markAudio);
        audio.play();

        const newBox = [...box];

        newBox[index] =
            turn === "cross" ? "X" : "O";

        setBox(newBox);

        if (turn === "cross") {
            setTurn("circle");
        } else {
            setTurn("cross");
        }
    };

    useEffect(() => {

        if (winner) {
            const win = new Audio(winAudio);
            win.play();
        }
        else if (isDraw) {
            const loose = new Audio(looseAudio);
            loose.play();
        }

    }, [winner, isDraw]);

    const reset = () => {
        setBox(Array(9).fill(""));
        setTurn("cross");
    };

    return (

        <div className='bg-(--bg) text-(--text) flex-col py-10 min-h-screen'>

            <div className='w-3xs mx-auto relative'>

                <div className='flex justify-between'>
                    <h1 className='font-bold text-2xl'>
                        Tic-Tac-Toe
                    </h1>
                    <button
                        onClick={toggleTheme}
                        className='cursor-pointer bg-(--btn) p-2 rounded hover:bg-(--btnhvr)'
                    >

                        {dark
                            ? <MdOutlineDarkMode />
                            : <MdDarkMode />
                        }

                    </button>
                </div>

                <div className='flex justify-between mt-7'>
                    <h1>
                        Turn:
                        <span className='font-bold'>
                            {turn === "cross" ? " X" : " O"}
                        </span>
                    </h1>

                    <button
                        className='cursor-pointer bg-(--btn) p-2 rounded hover:bg-(--btnhvr)'
                        onClick={reset}
                    >
                        Reset
                    </button>
                </div>

                {winner && (
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='bg-(--btn) p-6 rounded-xl shadow-xl text-center w-60'>
                            <h1 className='text-2xl font-bold'>
                                player {winner} is winner
                            </h1>
                            <button
                                onClick={reset}
                                className='mt-4 bg-(--btnhvr) px-4 py-2 rounded cursor-pointer'
                            >
                                Play Again
                            </button>
                        </div>
                    </div>
                )}

                {isDraw && (
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='bg-(--btn) p-6 rounded-xl shadow-xl text-center w-60'>
                            <h1 className='text-2xl font-bold'>
                                Match Draw 🤝
                            </h1>
                            <button
                                onClick={reset}
                                className='mt-4 bg-(--btnhvr) px-4 py-2 rounded cursor-pointer'
                            >
                                Play Again
                            </button>
                        </div>
                    </div>
                )}

                <div className='grid grid-cols-3 grid-rows-3 mt-10 w-fit'>
                    {box.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => mark(index)}
                            className={`h-20 w-20 hover:bg-(--btnhvr)
                            ${(index % 3 !== 2) ? "border-r-2" : ""}
                            ${(index < 6) ? "border-b-2" : ""}
                            `}
                        >
                            <h1 className='font-bold text-3xl'>
                                {item}
                            </h1>
                        </button>

                    ))}

                </div>

            </div>

        </div>
    )
}

export default Home;