/*
import Heading from "../../components/Heading"
import styles from './styles.module.css'

function About(){
    return(
        <section id="about">
            <Heading index="01" heading="About Me" />
            <div className={styles.container}>
                <div className={styles.left}>
                    <p className={styles.desc}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
                    </p>
                    <div className={styles.left}>
                    <p className={styles.desc}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div className={styles.right}>
                    <img src="./images/profile.jpg" 
                        alt="profile"
                        className={styles.profile_img}
                    />
                    <div className={styles.img_border}></div>
                </div>
            </div>
            </div>

        </section> 
    );
}
export default About
*/
import Heading from "../../components/Heading";
import styles from "./styles.module.css";

function About() {
	return (
		<section id="about">
			<Heading index="01" heading="About Me" />
			<div className={styles.container}>
				<div className={styles.left}>
					<p className={styles.desc}>
						I am a Junior Software Engineer who graduated from Addis Ababa
						University department of Computer Science in the summer
						of 2022. I am a diligent professional who wishes to learn through 
						every step of my journey to the betterment of my knowledge and 
						skills. Over the course of my studies, I have developed critical 
						thinking, teamwork and communication skills which I believe are 
						some of many strengths of mine.
						
					</p>
					
				</div>
				<div className={styles.right}>
					<img
						src="./images/profile.jpg"
						alt="profile"
						className={styles.profile_img}
					/>
					<div className={styles.img_border}></div>
				</div>
			</div>
		</section>
	);
}

export default About;