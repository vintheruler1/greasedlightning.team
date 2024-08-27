import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import React from 'react'
import { NextSeo } from 'next-seo';
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import sponsors from '../data/sponsors.json'
import CountUp from 'react-countup';
import Link from "next/link";

export default function Home(props) {
  const dark = props.dark
  return (
    <div className={(styles.light)}>
      <Head>
        <title>Greased Lightning 3888</title>

        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /> */}
      </Head>

      <NextSeo
        title="Team Greased Lightning 3888 - Home"
        description="Greased Lightning 3888 is a FTC Team based in Weston, FL."
        canonical="https://greasedlightning.team/"
        openGraph={{
          url: 'https://greasedlightning.team/',
          title: 'Greased Lightning 3888',
          description: 'Greased Lightning 3888 is a FIRST® Tech Challenge team based in Weston, FL.',
          images: [
            {
              url: 'https://cdn.discordapp.com/attachments/1195528455199150132/1277821254769840222/Summer_Swerve_2024-Aug-27_02-40-17AM-000_CustomizedView12300424903_png_alpha.png?ex=66ce8f47&is=66cd3dc7&hm=7a40dbf31b7c28f740b6d88509b3abd6ca938ae5901434621119d83c1421ce5b&',
              alt: 'Greased Lightning 3888 Swerve Drivetrain',
              type: 'image/jpeg',
            },
          ],
          site_name: 'Greased Lightning 3888',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[{
          property: 'theme-color',
          content: '#fe8f00'
        }]}
      />

      <NavBar dark={dark} page="home" />
      <main className={styles.main}>
        <div className={styles.dots}>
          <section className={styles.robotStack}>
            <h1 className={styles.topText}>Greased Lightning</h1>
            <picture>
              <source
                srcSet={require("../public/assets/swerve.png")}
                type="image/jpg"
                width="900"
                // height="1200"
                alt=""
              />
              <img src={"/assets/swerve.png"} alt="Greased Lightning 3888 Logo"></img>
            </picture>
            <h1 className={styles.bottomText}>3888</h1>
          </section>
        </div>

        <section className={styles.miniStats}>
          <div className={styles.smolSponsorsSection}>
            <p>SPONSORED BY</p>
            <div className={styles.logos}>
              <a href="https://genehaas.com/" target="_blank" rel="noreferrer">
                <img alt="Gene Haas Logo" src="/assets/sponsors/GeneHaasFoundation.png"/>
              </a>
              <a href="https://publix.com/" target="_blank" rel="noreferrer">
                <img alt="PSMC" src="/assets/sponsors/pmsc.png"/>
              </a>
              <a href="https://intuitivefoundation.com/" target="_blank" rel="noreferrer">
                <img alt="Inutitive Surgical" src="/assets/sponsors/int.webp"/>
              </a>
              <a href="https://motorolasolutionsfoundation.com/" target="_blank" rel="noreferrer">
                <img alt="MSF Logo" src="/assets/sponsors/moto.png"/>
              </a>
              <a href="https://polymaker.com/" target="_blank" rel="noreferrer">
                <img alt="Polymaker Logo" src="/assets/sponsors/polymaker.webp"/>
              </a>
            </div>
          </div>

          <h2>Division Finalist at the Florida State Championships</h2>
          <small>IN THE 2023-2024 SEASON - CENTERSTAGE</small>
          <div className={styles.statsContainer}>
            <div className={styles.statsCard}>
              <h3>Award Winning Robots</h3>
              <p>15+ awards and 50+ matches won in team history</p><br/>
              <Link href="/neo"><a className={styles.button}>MEET THE ROBOT</a></Link>
            </div>
            <div className={styles.statsCard}>
              <h3><CountUp
                end={30000}
                duration={1}
                separator=","
                enableScrollSpy={true}
                scrollSpyOnce={true} />+ people impacted</h3>
              <p>in <bold style={{fontWeight:"700"}}>3 countries</bold> through the Greased Lightning Outreach Program. </p><br/>
              <Link href="/outreach"><a className={styles.button}>LEARN MORE</a></Link>
            </div>
            <div className={styles.statsCard}>
              <h3><CountUp
                end={2}
                duration={0.25}
                separator=","
                enableScrollSpy={true}
                scrollSpyOnce={true} />x South Florida Inspire Award Winner</h3>
              <p>and played in every South Florida League Championship and Florida Championship playoffs</p>
              <Link href="/about"><a className={styles.button}>MEET THE TEAM</a></Link>
            </div>
          </div>
        </section>

        <section className={styles.aboutSection}>
          <div className={styles.picColumn}>
            <picture>
              <source
                srcSet={require("../public/assets/team/team_2024.jpg?webp")}
                type="image/webp"
                // width="181"
                alt="Team Greased Lightning (2022)"
              />
              <img src={"/assets/team/team_2024.png"} alt="Greased Lightning 3888 2021-22"></img>
            </picture>
            <picture>
              <source
                srcSet={require("../public/assets/roseville-bot.jpg?webp")}
                type="image/webp"
                // width="181"
                alt='Greased Lightning 3888 Award-Winning "REDEMPTION v3" Robot'
              />
              <img src={"/assets/roseville-bot.jpg"} alt='Greased Lightning 3888 Award-Winning "REDEMPTION v3" Robot'></img>
            </picture>
          </div>
          <div>
            <h2>ABOUT <span style={{ color: "#FF9626" }}>TEAM Greased Lightning</span></h2>
            <p>Team Greased Lightning 3888 is a competitive robotics team in Folsom, CA. Founded in 2019, our team comprises of eight high school and middle school students. Team Greased Lightning competes in the FIRST Tech Challenge (FTC), an international robotics competition open to grades 7-12. We are an official initiative under Silent Bot Deadly which is a 501(c)(3) Non-Profit.</p>

            <h3 style={{ color: "#FF9626" }}>2023-24 SPONSORS</h3>
            <div className={styles.sponsors}>
              <a href="https://cncmadness.com/" target="_blank" rel="noreferrer">
                <img alt="CNC Madness Logo" src="/assets/cnc-madness.png"/>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer dark={dark} />
    </div>
  )
}
