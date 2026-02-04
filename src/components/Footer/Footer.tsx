import styles from './Footer.module.css'

const Footer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.child1}>
                <h3>Соцсети:</h3>
                <ul>
                    <li>instagram</li>
                    <li>youtube</li>
                    <li>вконтакте</li>
                </ul>
            </div>
            <div className={styles.child2}>
                <h3>Контакты:</h3>
                <ul>
                    <li>+7(456)567-67-87</li>
                    <li>г. Санкт-Петербург, ул. Еблана, д. 1488</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer