import React from 'react';
import styles from './menu.module.css';
import { Link } from 'react-router-dom';

const jogosData = [
    { id: 1, src: 'imgs/Mini_Game.png', alt: 'minigame 1' },
    { id: 2, src: 'imgs/Mini_Game.png', alt: 'minigame 2' },
];

export default function Menu() {
    const imagePerfil = 'imgs/User.png';
    const name = 'Levi';
    const nivel = 100;

    return (
        <main>
            <div className={styles.teste}>
                <div className={styles.container}>
                    <div className={styles.player}>
                        <img src={imagePerfil} alt='perfil' />
                        <p>nome: {name}</p>
                        <p>pontos: {nivel}</p>
                    </div>
                </div>
                <div className={styles.container2}>
                    <Link to="/teclas" >teste</Link>
                    <div className={styles.jogos}>
                        {jogosData.map((jogo) => (
                            // <Link alt="/teclas">
                                <img src={jogo.src} alt={jogo.alt} />
                            // </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
