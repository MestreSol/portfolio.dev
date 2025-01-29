"use client";
import React from "react";
import { useState } from "react";
import styles from "./page.module.css";
import { useEffect, useRef } from "react";
import Image from "next/image";
import PortifolioIndice from "@/components/atons/portifolioIndice";
import UserCard from "@/components/area/userCard";
import InformationArea from "@/components/area/informationArea";

export default function Portifolio() {
  const [isExpModal, setIsModalOpen] = useState(false);
  const [isRecModal, setIsRecModal] = useState(false);
  const userMock = {
    name: "João Vitor Ferreira",
    description: "Software Engineer",
    cover: "https://avatars.githubusercontent.com/u/71278929?v=4",
    avatar: "https://avatars.githubusercontent.com/u/42494721?v=4",
    socials: [
      {
        id: 1,
        name: "github",
        url: "https://github.com/MestreSol",
      },
      {
        id: 2,
        name: "linkedin",
        url: "https://www.linkedin.com/in/jo%C3%A3o-vitor-ferreira1/",
      },
      {
        id: 3,
        name: "twitter",
        url: "https://twitter.com/JoaoVitorFerre8",
      },
      {
        id: 4,
        name: "instagram",
        url: "https://www.instagram.com/joao.vitor.ferreira/",
      },
      {
        id: 5,
        name: "facebook",
        url: "https://www.facebook.com/joao.vitor.ferreira.568294",
      },
      {
        id: 6,
        name: "youtube",
        url: "https://www.youtube.com/channel/UC9J4c5bq2vNcH9Xa7gU3d3g",
      },
    ],
    location: {
      city: "São Paulo",
      country: "Brazil",
      timezone: "GMT-3",
    },
    contact: {
      email: "gmail@gmail.com",
    },
    nodes: 1000,
    followers: 1000,
    projects: 2,
    workExperience: [
      {
        id: 1,
        company: "Company Name",
        location: "Senior Design Engineer",
        initialDate: "2018",
        finalDate: "2021",
        activities: [
          {
            id: 1,
            description: "Desenvolvimento de software para sistemas embarcados",
          },
          {
            id: 2,
            description: "Desenvolvimento de software para sistemas embarcados",
          },
          {
            id: 3,
            description: "Desenvolvimento de software para sistemas embarcados",
          },
          {
            id: 4,
            description: "Desenvolvimento de software para sistemas embarcados",
          },
        ],
        coWorkers: [
          {
            id: 1,
            name: "Co-worker Name",
            role: "Software Engineer",
            avatar: "https://avatars.githubusercontent.com/u/71278929?v=4",
          },
          {
            id: 2,
            name: "Co-worker Name",
            role: "Software Engineer",
            avatar: "https://avatars.githubusercontent.com/u/71278929?v=4",
          },
          {
            id: 3,
            name: "Co-worker Name",
            role: "Software Engineer",
            avatar: "https://avatars.githubusercontent.com/u/71278929?v=4",
          },
        ],
      },
      {
        id: 2,
        company: "Company Name",
        location: "Senior Design Engineer",
        initialDate: "2018",
        finalDate: "2021",
        activities: [
          {
            id: 1,
            description: "Desenvolvimento de software para sistemas embarcados",
          },
          {
            id: 2,
            description: "Desenvolvimento de software para sistemas embarcados",
          },
          {
            id: 3,
            description: "Desenvolvimento de software para sistemas embarcados",
          },
          {
            id: 4,
            description: "Desenvolvimento de software para sistemas embarcados",
          },
        ],
        coWorkers: [],
      },
    ],
  };

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

  const openModal = (type: string, id: number) => {
    if (type === "workExp") {
      const experience = userMock.workExperience.find(
        (experience) => experience.id === id,
      );
      console.log(experience);
    } else if (type === "recomendation") {
      console.log("Recomendation");
    }

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  //Open Modal to Work Experience
  return (
    <div>
      <div
        className={
          isExpModal || isRecModal
            ? `${styles.page} ${styles.blur}`
            : styles.page
        }
      >
        <div ref={backgroundRef} className={styles.background}></div>
        <div className={styles.container}>
          <PortifolioIndice sections={["home", "aa"]} />
          <UserCard
            name={userMock.name}
            description={userMock.description}
            cover={userMock.cover}
            avatar={userMock.avatar}
            nodes={userMock.nodes}
            followers={userMock.followers}
            projects={userMock.projects}
          />
          <InformationArea

          />
        </div>
        {isExpModal && (
          <div className={styles.modalBackground} onClick={closeModal}>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <div>
                  <h2 className={styles.modalTitle}>Work Experience</h2>
                  <p className={styles.modalSubTitle}>Software Engineer</p>
                </div>
                <div>
                  <p className={styles.modalInfo}>Company Name</p>
                  <p className={styles.modalDate}>2018 - 2021</p>
                </div>
              </div>
              <div className={styles.modalBody}>
                <p className={styles.modalDescription}>
                  Desenvolvimento de software para sistemas embarcados
                </p>
                <div className={styles.coWorkers}>
                  <div className={styles.coWorker}>
                    <Image
                      src={userMock.avatar}
                      alt={"co-worker"}
                      width={32}
                      height={32}
                      className={styles.coWorkerImage}
                    />
                    <p className={styles.coWorkerInfo}>
                      <strong>Co-worker Name</strong>
                      <br />
                      Software Engineer
                    </p>
                  </div>
                  <div
                    className={styles.coWorker}
                    onClick={openModal("recomendation", 1)}
                  >
                    <span className={styles.recomendation}></span>
                    <Image
                      src={userMock.avatar}
                      alt={"co-worker"}
                      width={32}
                      height={32}
                      className={styles.coWorkerImage}
                    />
                    <p className={styles.coWorkerInfo}>
                      <strong>Co-worker Name</strong>
                      <br />
                      Software Engineer
                    </p>
                  </div>
                  <div className={styles.coWorker}>
                    <span className={styles.recomendation}></span>
                    <Image
                      src={userMock.avatar}
                      alt={"co-worker"}
                      width={32}
                      height={32}
                      className={styles.coWorkerImage}
                    />
                    <p className={styles.coWorkerInfo}>
                      <strong>Co-worker Name</strong>
                      <br />
                      Software Engineer
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.modalFooter}>
                <button onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
