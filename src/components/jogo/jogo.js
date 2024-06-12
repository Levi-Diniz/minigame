import React, { useState, useEffect } from "react";
import style from "./jogo.module.css";
import Modal from "../modal/modal";

export default function Jogo() {
    const [progress, setProgress] = useState(0);
    const [activeKeys, setActiveKeys] = useState([]);
    const [sequence, setSequence] = useState([]);
    const [currentPosition, setCurrentPosition] = useState(0);
    const [timeUp, setTimeUp] = useState(false);



    const [show, setShow] = useState(false);

    const showModal = () => {
      setShow(true);
    };
  
    const hideModal = () => {
      setShow(false);
    };
  


    useEffect(() => {
        const timer = setTimeout(() => {
            if (progress < 100) {
                setProgress(progress + 1);
            } else {
                setTimeUp(true);
                clearTimeout(timer);
                showModal()
            }
        }, 50);

        return () => clearTimeout(timer);
    }, [progress]);

    const generateRandomKeys = () => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "123456789";
        const allChars = letters + numbers;

        let newActiveKeys = [];
        let newSequence = [];
        for (let i = 0; i < 6; i++) {
            const randomChar = allChars.charAt(Math.floor(Math.random() * allChars.length));
            newActiveKeys.push(randomChar);
            newSequence.push(false);
        }
        setActiveKeys(newActiveKeys);
        setSequence(newSequence);
        setCurrentPosition(0);
        setTimeUp(false);
        setProgress(0);
    };

    useEffect(() => {
        generateRandomKeys();
    }, []);

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (timeUp) return;

            const key = event.key.toUpperCase();
            if (key === activeKeys[currentPosition]) {
                setSequence((prevSequence) => {
                    const newSequence = [...prevSequence];
                    newSequence[currentPosition] = true;
                    return newSequence;
                });
                setCurrentPosition((prevPosition) => prevPosition + 1);
            }
        };

        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [activeKeys, currentPosition, timeUp]);

    return (
        <main id={style.container}>
            <div className={style.game}>
                <div className={style.containerRaio}>
                    <img className={style.imgRaio} src="imgs/raio1.png" alt="raio" />
                    <img className={style.imgCoroa} src="imgs/coroa.png" alt="raio" />
                    <img className={style.imgRaio} src="imgs/raio2.png" alt="raio" />
                </div>
                <p className={style.gameName}>Mini-Game</p>
                <p className={style.gameTag}>Pressione as teclas corretamente</p>
                <div className={style.mecanicaGame}>
                    <div className={style.teclas}>
                        {activeKeys.map((key, index) => (
                            <div
                                key={index}
                                className={`${style.abc} ${style[key.toLowerCase()]} ${sequence[index] ? style.active : ""}`}
                            >
                                {key}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={style.containerLoading}>
                    <div className={style.inLoading}>
                        <div className={style.loading} style={{ width: `${progress}%` }}></div>
                    </div>
                </div>

                <Modal show={show} handleClose={hideModal}>
                    <p>Este é o conteúdo do modal!</p>
                </Modal>
            </div>
        </main>
    );
}
