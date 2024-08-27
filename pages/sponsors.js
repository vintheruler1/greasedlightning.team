import Head from 'next/head'
import styles from '../styles/Sponsors.module.css'
import { NextSeo } from 'next-seo';
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import sponsors from '../data/sponsors.json'

export default function Sponsors(props) {
    const dark = props.dark
    return <div className={(dark ? styles.dark : styles.light)}>
        <NextSeo title="Sponsors | Juice 16236" />
        <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <NavBar dark={dark} page="sponsors" />
        <main className={styles.main}>
            <h1>We <span>Thank</span> all of our <span>Sponsors!</span></h1>
            <p>We would not exist without them!</p>

            <h3 style={{ color: "#FF9626" }}>2024-25 SPONSORS</h3>
            <div className={styles.sponsors}>
              <a href="https://genehaas.com/" target="_blank" rel="noreferrer"><img alt="Gene Haas Logo" src="/assets/sponsors/GeneHaasFoundation.png"/></a>
            </div>
            
            <h2 style={{color: "#FF9626", fontSize: "40px"}}>Want to sponsor us?</h2>
            <p>Email us at <a href="mailto:greasedlightningrobotics@gmail.com">greasedlightningrobotics@gmail.com</a> with your work email and we will get to you as soon as we can!</p>
            <a href="./sponsors/brief"><button>View our Sponsors Brief</button></a>

            <br/>
            <br/>
        </main>
        <Footer dark={dark} />
    </div>
}