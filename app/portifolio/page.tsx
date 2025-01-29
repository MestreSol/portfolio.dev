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
  //const [isRecModal, setIsRecModal] = useState(false);
  const userMock: Profile = {
    id: 1,
    user: {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      password: "hashedpassword123",
    },
    avatar: "https://example.com/avatar.jpg",
    cover: "https://example.com/cover.jpg",
    description: "Full Stack Developer with experience in web and mobile applications.",
    socials: [
      {
        id: 1,
        user: { id: 1, name: "John Doe", email: "johndoe@example.com", password: "hashedpassword123" },
        name: "GitHub",
        link: "https://github.com/johndoe",
      },
    ],
    location: "San Francisco, CA",
    contacts: ["+1 123 456 7890", "johndoe@workmail.com"],
    nodes: 5,
    workExperience: [
      {
        id: 1,
        user: { id: 1, name: "John Doe", email: "johndoe@example.com", password: "hashedpassword123" },
        company: {
          id: 1,
          name: "TechCorp",
          location: "New York, NY",
          description: "A leading tech company specializing in AI and cloud solutions.",
          CNPJ: "12345678900001",
          contacts: ["hr@techcorp.com"],
          image: "https://example.com/company.jpg",
        },
        location: "Remote",
        startDate: "2020-01-01",
        endDate: "2023-12-31",
        activities: [
          { id: 1, description: "Developed scalable web applications." },
          { id: 2, description: "Led a team of junior developers." },
        ],
        coWorkers: [
          { id: 1, name: "Alice Smith", role: "Software Engineer", avatar: "https://example.com/alice.jpg" },
        ],
      },
    ],
    academicExperience: [
      {
        id: 1,
        course: "Computer Science",
        user: { id: 1, name: "John Doe", email: "johndoe@example.com", password: "hashedpassword123" },
        level: "Bachelor's Degree",
        degree: "BSc in Computer Science",
        institution: "MIT",
        location: "Cambridge, MA",
        startDate: "2015-09-01",
        endDate: "2019-06-30",
        activities: [
          { id: 1, description: "Research in Artificial Intelligence." },
        ],
        coWorkers: [
          { id: 1, name: "Bob Johnson", role: "Research Assistant", avatar: "https://example.com/bob.jpg" },
        ],
      },
    ],
    followers: [
      { id: 2, name: "Jane Doe", email: "janedoe@example.com", password: "securepass456" },
    ],
    projects: [
      {
        id: 1,
        about: "A web-based project management tool.",
        Team: {
          id: 1,
          name: "Agile Devs",
          description: "A team of developers building innovative solutions.",
          image: "https://example.com/team.jpg",
          members: [
            { id: 1, user: { id: 1, name: "John Doe", email: "johndoe@example.com", password: "hashedpassword123" }, role: "Lead Developer" },
          ],
        },
        user: { id: 1, name: "John Doe", email: "johndoe@example.com", password: "hashedpassword123" },
        name: "TaskFlow",
        description: "A platform for managing tasks and team workflows.",
        startDate: "2022-05-01",
        endDate: "2023-10-31",
        activities: [
          { id: 1, description: "Developed the back-end API." },
          { id: 2, description: "Designed the UI/UX." },
        ],
        coWorkers: [
          { id: 1, name: "Eve Martinez", role: "UI/UX Designer", avatar: "https://example.com/eve.jpg" },
        ],
      },
    ],
    languages: [
      { id: 1, name: "English", description: "Native speaker.", proficiency: "NATIVE" },
      { id: 2, name: "Spanish", description: "Fluent in written and spoken Spanish.", proficiency: "FLUENT" },
    ],
    skills: [
      { id: 1, name: "JavaScript", description: "Experienced in full-stack JavaScript development.", proficiency: "EXPERT" },
      { id: 2, name: "Python", description: "Proficient in writing scalable back-end services.", proficiency: "ADVANCED" },
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

  // const openModal = (type: string, id: number) => {
  //   if (type === "workExp") {
  //     const experience = userMock.workExperience.find(
  //       (experience) => experience.id === id,
  //     );
  //     console.log(experience);
  //   } else if (type === "recomendation") {
  //     console.log("Recomendation");
  //   }

  //   setIsModalOpen(true);
  // };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  //Open Modal to Work Experience
  return (
    <div>
      <div
        className={isExpModal ? `${styles.page} ${styles.blur}` : styles.page}
      >
        <div ref={backgroundRef} className={styles.background}></div>
        <div className={styles.container}>
          <PortifolioIndice sections={["home", "aa"]} />
          <UserCard
            name={userMock.user.name}
            description={userMock.description}
            cover={userMock.cover}
            avatar={userMock.avatar}
            nodes={userMock.nodes}
            followers={userMock.followers.length}
            projects={userMock.projects.length}
          />
          <InformationArea profile={userMock} />
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
                    //onClick={openModal("recomendation", 1)}
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
