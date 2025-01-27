"use client";
import styles from "./page.module.css";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Portifolio() {
  const userMock = {
    name: "João Vitor Ferreira",
    description: "Software Engineer",
    cover: "https://avatars.githubusercontent.com/u/71278929?v=4",
    avatar: "https://avatars.githubusercontent.com/u/42494721?v=4",
    socials: [
      {
        name: "github",
        url: "https://github.com/MestreSol"
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/joão-vitor-ferreira-8b1b1a1b3/"
      },
      {
        name: "twitter",
        url: "https://twitter.com/JoaoVitorFerre8"
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/joao.vitor.ferreira/"
      },
      {
        name: "facebook",
        url: "https://www.facebook.com/joao.vitor.ferreira.568294"
      },
      {
        name: "youtube",
        url: "https://www.youtube.com/channel/UC9J4c5bq2vNcH9Xa7gU3d3g"
      }
    ],
    location:{
      city: "São Paulo",
      country: "Brazil",
      timezone: "GMT-3"
    },
    contact:{
      email: "gmail@gmail.com"
    },
    nodes: 1000,
    followers: 1000,
    projects: 2,
  }

  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (backgroundRef.current) {
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;
        const xPercent = (clientX / innerWidth) * 100;
        const yPercent = (clientY / innerHeight) * 100;
        backgroundRef.current.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.page}>
      <div ref={backgroundRef} className={styles.background}></div>
      <div className={styles.container}>
        <div className={styles.index}>
          <div className={styles.menu}>
            <div className={styles.menuItem}>Home</div>
            <div className={styles.menuItem}>About</div>
            <div className={styles.menuItem}>Portfolio</div>
            <div className={styles.menuItem}>Contact</div>
          </div>
        </div>
        <div className={styles.user}>
          <div className={styles.userArea}>
            <div className={styles.cover}>
              <Image
                src={userMock.cover}
                alt={"Cover"}
                className={styles.coverImage}
                width={200}
                height={200}
              />
              <Image
                src="https://avatars.githubusercontent.com/u/71278929?v=4"
                alt="Avatar"
                className={styles.userImage}
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className={styles.information}>
            <div className={styles.userName}>{userMock.name}</div>
            <hr className={styles.line}/>
            <div className={styles.description}>{userMock.description}</div>
            <div className={styles.metrics}>
              <div className={styles.metricItem}>
                <div className={styles.metricTitle}>Nodes</div>
                <div className={styles.metric}>{userMock.nodes}</div>
              </div>
              <hr className={styles.verticalLine}/>
              <div className={styles.metricItem}>
                <div className={styles.metricTitle}>Followers</div>
                <div className={styles.metric}>{userMock.followers}</div>
              </div>
              <hr className={styles.verticalLine}/>
              <div className={styles.metricItem}>
                <div className={styles.metricTitle}>Projects</div>
                <div className={styles.metric}>{userMock.projects}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.informationArea}>
          <div className={styles.title}>About Me</div>
          <div className={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            lacinia, purus at ultricies ultricies, nunc nisi fermentum justo, eu
            aliquet libero metus id ligula. Vestibulum ante ipsum primis in
          </div>
        </div>

      </div>
    </div>
  );
}
