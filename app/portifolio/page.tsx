"use client";
import React from "react";
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
        url: "https://www.linkedin.com/in/jo%C3%A3o-vitor-ferreira1/"
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
    workExperience: [
      {
        id: 1,
        company: "Company Name",
        location: "Senior Design Engineer",
        date: "2018 - 2021",
        activities: [
          "Desenvolvimento de software para sistemas embarcados",
          "Desenvolvimento de software para sistemas embarcados",
          "Desenvolvimento de software para sistemas embarcados",
          "Desenvolvimento de software para sistemas embarcados"
        ],
        coWorkers: [
          {
            name: "Co-worker Name",
            role: "Software Engineer",
            avatar: "https://avatars.githubusercontent.com/u/71278929?v=4"
          },
          {
            name: "Co-worker Name",
            role: "Software Engineer",
            avatar: "https://avatars.githubusercontent.com/u/71278929?v=4"
          },
          {
            name: "Co-worker Name",
            role: "Software Engineer",
            avatar: "https://avatars.githubusercontent.com/u/71278929?v=4"
          }
        ]
      },
      {
        id: 2,
        company: "Company Name",
        location: "Senior Design Engineer",
        date: "2018 - 2021",
        activities: [
          "Desenvolvimento de software para sistemas embarcados",
          "Desenvolvimento de software para sistemas embarcados",
          "Desenvolvimento de software para sistemas embarcados",
          "Desenvolvimento de software para sistemas embarcados"
        ],
        coWorkers: []
      }
      ]
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

  //Set active menu item
  useEffect(() => {
    const menuItems = document.querySelectorAll(`.${styles.menuItem}`);
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");
      sections.forEach((section, index) => {
        if (scrollPosition >= section.offsetTop - 100) {
          menuItems.forEach((item) => {
            item.classList.remove(styles.active);
          });
          menuItems[index].classList.add(styles.active);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
                src={userMock.avatar}
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
          <section className={styles.session} id={"about"}>
          <div className={styles.sessionTitle}>About Me</div>
          <div className={styles.sessionContent}>
            <p className={styles.paragraph}>
            Sou um desenvolvedor de software com experiência em várias linguagens de programação sempre buscando o aprimoramento nelas, sejam elas voltadas para analise, back-end, front-end, testes ou banco de dados pois acredito que cada projeto pede ferramentas diferentes para serem concluídos.
            Aplico esses conhecimentos em uma serie de projetos pessoais e profissionais, alguns deles podem ser acessados atraves do meu portifolio do Github, Itch.io ou Portfy (plataforma que eu construí)
            Estou buscando sempre o aperfeisuamento das minhas habilidades de programação e buscando aplica-las em diversos projetos, também estou exercitando minhas habilidades de gerenciamento de projetos atravez de equipes de desenvolvimento voluntario, geridas atravez das metodologias ageis mais utilizadas no mercado.
            </p>
          </div>
          </section>
          <section className={styles.session} id={"workExp"}>
            <div className={styles.sessionTitle}>Work Experience</div>
            <div className={styles.sessionContent}>
            <div className={styles.experience} onClick={() => console.log("click")}>
              <div className={styles.experienceHeader}>
              <div className={styles.company}>
                <div className={styles.companyName}>Company Name</div>
                <div className={styles.location}>Senior Design Engineer</div>
              </div>
              <div className={styles.date}>2018 - 2021</div>
              </div>
              <div className={styles.experienceContent}>
                <ul className={styles.activetyList}>
                <li className={styles.activety}>Desenvolvimento de software para sistemas embarcados</li>
                <li className={styles.activety}>Desenvolvimento de software para sistemas embarcados</li>
                <li className={styles.activety}>Desenvolvimento de software para sistemas embarcados</li>
                <li className={styles.activety}>Desenvolvimento de software para sistemas embarcados</li>
                </ul>
                <div className={styles.co_workers}>
                  <ul className={styles.co_workersList}>
                    <li className={styles.co_worker}>
                      <Image src={userMock.cover} alt={"co-worker"} width={32} height={32} className={styles.co_workerImage}/>
                      <p className={styles.co_workerInfo}>
                        <strong>Co-worker Name</strong>
                        <br/>
                        Software Engineer
                      </p>
                    </li>
                    <li className={styles.co_worker}>
                      <Image src={userMock.cover} alt={"co-worker"} width={32} height={32} className={styles.co_workerImage}/>
                      <p className={styles.co_workerInfo}>
                        <strong>Co-worker Name</strong>
                        <br/>
                        Software Engineer
                      </p>
                    </li>
                    <li className={styles.co_worker}>
                      <Image src={userMock.cover} alt={"co-worker"} width={32} height={32} className={styles.co_workerImage}/>
                      <p className={styles.co_workerInfo}>
                        <strong>Co-worker Name</strong>
                        <br/>
                        Software Engineer
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
              <div className={styles.experience}>
                <div className={styles.experienceHeader}>
                  <div className={styles.company}>
                    <div className={styles.companyName}>Company Name</div>
                    <div className={styles.location}>Senior Design Engineer</div>
                  </div>
                  <div className={styles.date}>2018 - 2021</div>
                </div>
                <div className={styles.experienceContent}>
                  <ul className={styles.activetyList}>
                    <li className={styles.activety}>Desenvolvimento de software para sistemas embarcados</li>
                    <li className={styles.activety}>Desenvolvimento de software para sistemas embarcados</li>
                    <li className={styles.activety}>Desenvolvimento de software para sistemas embarcados</li>
                    <li className={styles.activety}>Desenvolvimento de software para sistemas embarcados</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.session} id={"academic"}>
            <div className={styles.sessionTitle}>Academic</div>
            <div className={styles.sessionContent}>
              <div className={styles.academic}>
                <div className={styles.academicHeader}>
                  <div className={styles.institution}>
                    <div className={styles.institutionName}>Institution Name</div>
                    <div className={styles.course}>Course Name</div>
                  </div>
                  <div className={styles.date}>2018 - 2021</div>
                </div>
                <div className={styles.academicContent}>
                  <div className={styles.note}>Note: 9.0</div>
                  <ul className={styles.subjectsList}>
                    <li className={styles.subject}>Subject Name</li>
                    <li className={styles.subject}>Subject Name</li>
                    <li className={styles.subject}>Subject Name</li>
                    <li className={styles.subject}>Subject Name</li>
                  </ul>
                </div>
              </div>
              <div className={styles.academic}>
                <div className={styles.academicHeader}>
                  <div className={styles.institution}>
                    <div className={styles.institutionName}>Institution Name</div>
                    <div className={styles.course}>Course Name</div>
                  </div>
                  <div className={styles.date}>2018 - 2021</div>
                </div>
                <div className={styles.academicContent}>
                  <ul className={styles.subjectsList}>
                    <li className={styles.subject}>Subject Name</li>
                    <li className={styles.subject}>Subject Name</li>
                    <li className={styles.subject}>Subject Name</li>
                    <li className={styles.subject}>Subject Name</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.licenses}>
            <div className={styles.sessionTitle}>Licenses</div>
            <div className={styles.sessionContent}>
              <div className={styles.license}>
                <div className={styles.licenseHeader}>
                  <div className={styles.licenseInfo}>
                    <div className={styles.licenseName}>License Name</div>
                    <div className={styles.licensor}>GOOGLE</div>
                  </div>
                  <div className={styles.date}>2018 - 2021</div>
                </div>
                <div className={styles.licenseContent}>
                  <p className={styles.licenseDescription}>License Description</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
