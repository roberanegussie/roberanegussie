import Heading from "../../components/Heading";
import GitHubIcon from "@mui/icons-material/GitHub"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import constant from "../../constant.json"
import styles from "./styles.module.css"

function Work(){
    return (
        <section id="work">
            <Heading index="" heading="Some Things I've Built"/>
            <div className={styles.container}>
				{constant.projects.map((project, index) =>
					index % 2 === 0 ? (
						<div className={styles.project}>
							<div className={styles.left}>
								<a href={project.link} target="__blank">
									<img
										src={project.image}
										className={styles.img}
										alt="project_img"
									/>
								</a>
							</div>
							<div className={styles.right}>
								<a href={project.link} className={styles.heading}>
									{project.title}
								</a>
								<p className={styles.desc}>{project.desc}</p>
								<div className={styles.skill_container}>
									{project.skills.map((skill) => (
										<p>{skill}</p>
									))}
								</div>
								<div>
									<a href="https://github.com/roberanegussie/Online-Public-Transport-Booking" className={styles.link}>
										<GitHubIcon />
									</a>
									<a href="/" className={styles.link}>
										<OpenInNewIcon />
									</a>
								</div>
							</div>
						</div>
					) : (
						<div className={styles.project}>
							<div className={styles.left}>
								<a href={project.link} className={styles.heading}>
									{project.title}
								</a>
								<p className={styles.desc}>{project.desc}</p>
								<div className={styles.skill_container}>
									{project.skills.map((skill) => (
										<p>{skill}</p>
									))}
								</div>
								<div>
									<a href="https://github.com/roberanegussie/Cinema-Ticket-Booking" className={styles.link}>
										<GitHubIcon />
									</a>
									<a href="https://github.com/roberanegussie/Cinema-Ticket-Booking" className={styles.link}>
										<OpenInNewIcon />
									</a>
								</div>
							</div>
							<div className={styles.right}>
								<a href={project.link} target="__blank">
									<img
										src={project.image}
										className={styles.img}
										alt="project_img"
									/>
								</a>
							</div>
						</div>
					)
				)}
			</div>
		</section>
	);
}

export default Work;

