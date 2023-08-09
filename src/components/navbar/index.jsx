
import styles from "./styles.module.css";
function Navbar() {
	return (
		<nav className={styles.nav_container}>
			<div className={styles.nav_left}>
				<a href="#home">Robera Toye</a>
			</div>
			<div className={styles.nav_right}>
				<a href="#about" className={styles.nav_link}>
					<span></span>About
				</a>
				
				<a href="#work" className={styles.nav_link}>
					<span></span>Projects
				</a>
				<a href="#experience" className={styles.nav_link}>
					<span></span>Experience
				</a>
				<a href="#contact" className={styles.nav_link}>
					<span></span>Contact
				</a>
                
			</div>
		</nav>
	);
}

export default Navbar;
