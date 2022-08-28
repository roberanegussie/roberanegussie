
import styles from "./styles.module.css";
function Navbar() {
	return (
		<nav className={styles.nav_container}>
			<div className={styles.nav_left}>
				<a href="#home">Robera Negussie</a>
			</div>
			<div className={styles.nav_right}>
				<a href="#about" className={styles.nav_link}>
					<span>01.</span>About
				</a>
				
				<a href="#work" className={styles.nav_link}>
					<span>02.</span>Work
				</a>
				<a href="#contact" className={styles.nav_link}>
					<span>03.</span>Contact
				</a>
                
			</div>
		</nav>
	);
}

export default Navbar;
