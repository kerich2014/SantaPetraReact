import { useState } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
    const [isOpen, setOpen] = useState(false)
    
    return (
        <>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <h1 className={styles.text1}>SANTA PETRA</h1>
                    <p className={styles.text2}>stone workshop</p>
                </div>
                
                <nav className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
                    <ul className={styles.list}>
                        <li className={styles.navItem}><Link to={'/shop'}>Магазин</Link></li>
                        <li className={styles.navItem}><Link to={'/contacts'}>Контакты</Link></li>
                    </ul>
                </nav>
                
                <button 
                    className={styles.menuButton} 
                    onClick={() => setOpen(!isOpen)}
                    aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
                >
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect x="10" y="18" width="44" height="6" rx="3" fill="#000"/>
                        <rect x="10" y="29" width="44" height="6" rx="3" fill="#000"/>
                        <rect x="10" y="40" width="44" height="6" rx="3" fill="#000"/>
                    </svg>
                </button>
            </div>
            
            {/* Затемнение фона */}
            {isOpen && (
                <div 
                    className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ''}`}
                    onClick={() => setOpen(false)}
                />
            )}
        </>
    ) 
}

export default Header