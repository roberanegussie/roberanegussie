import Heading from "../../components/Heading"
import styles from "./styles.module.css"

function Contact(){
    return(
        <section className={styles.contact_section} id="contact">
            <div className={styles.heading_1}>
                <Heading index="" heading="What's Next"/>
            </div>
            <h1 className={styles.heading_2}></h1>
            <p  className={styles.desc} >
            Feel free to get in touch with me. I am always open to discussing new
            projects, creative ideas or opportunities.
            </p>
            <a href="mailto:roberaneg@gmail.com">
                <button className={styles.btn}>Say Hello</button>
            </a>
        </section>
    )
}
export default Contact