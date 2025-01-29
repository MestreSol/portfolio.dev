"use client";
import React from "react";
import styles from "./page.module.css";
import { useEffect, useRef } from "react";
import PortifolioIndice from "@/components/atons/portifolioIndice";
import UserCard from "@/components/area/userCard";
import InformationArea from "@/components/area/informationArea";
import { ModalProvider } from "@/context/ModalContext";

export default function Portifolio() {
  //const [isRecModal, setIsRecModal] = useState(false);
  const userMock: Profile = {
    id: 1,
    user: {
      id: 1,
      name: "Charlie Brown Jr.",
      email: "johndoe@example.com",
      password: "hashedpassword123",
    },
    avatar:
      "https://i.pinimg.com/736x/1f/49/ce/1f49ce59408c40c6ea38f5bfbb704362.jpg",
    cover: "https://picsum.photos/400",
    description: "Musician, Composer, and Producer",
    about:
      "I'm a musician, composer, and producer with over 10 years of experience in the music industry. I specialize in rock, pop, and electronic music, and I'm passionate about creating innovative and engaging music that resonates with audiences.",
    socials: [
      {
        id: 1,
        user: {
          id: 1,
          name: "John Doe",
          email: "johndoe@example.com",
          password: "hashedpassword123",
        },
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
        user: {
          id: 1,
          name: "John Doe",
          email: "johndoe@example.com",
          password: "hashedpassword123",
        },
        company: {
          id: 1,
          name: "TechCorp",
          location: "New York, NY",
          description:
            "A leading tech company specializing in AI and cloud solutions.",
          CNPJ: "12345678900001",
          contacts: ["hr@techcorp.com"],
          image: "https://picsum.photos/400",
        },
        location: "Remote",
        startDate: "2020-01-01",
        endDate: "2023-12-31",
        activities: [
          { id: 1, description: "Developed scalable web applications." },
          { id: 2, description: "Led a team of junior developers." },
        ],
        coWorkers: [
          {
            id: 1,
            name: "Alice Smith",
            role: "Software Engineer",
            avatar: "https://picsum.photos/400",
          },
        ],
        usedSkills: [
          {
            id: 1,
            name: "JavaScript",
            proficiency: "EXPERT",
          },
          {
            id: 2,
            name: "Python",
            proficiency: "ADVANCED",
          },
        ],
      },
    ],
    academicExperience: [
      {
        id: 1,
        course: "Computer Science",
        user: {
          id: 1,
          name: "John Doe",
          email: "johndoe@example.com",
          password: "hashedpassword123",
        },
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
          {
            id: 1,
            name: "Bob Johnson",
            role: "Research Assistant",
            avatar: "https://picsum.photos/400",
          },
        ],
      },
    ],
    followers: [
      {
        id: 2,
        name: "Jane Doe",
        email: "janedoe@example.com",
        password: "securepass456",
      },
    ],
    projects: [
      {
        id: 1,
        about: "A web-based project management tool.",
        Team: {
          id: 1,
          name: "Agile Devs",
          description: "A team of developers building innovative solutions.",
          image: "https://picsum.photos/400",
          members: [
            {
              id: 1,
              user: {
                id: 1,
                name: "John Doe",
                email: "johndoe@example.com",
                password: "hashedpassword123",
              },
              role: "Lead Developer",
            },
          ],
        },
        user: {
          id: 1,
          name: "John Doe",
          email: "johndoe@example.com",
          password: "hashedpassword123",
        },
        name: "TaskFlow",
        description: "A platform for managing tasks and team workflows.",
        startDate: "2022-05-01",
        endDate: "2023-10-31",
        activities: [
          { id: 1, description: "Developed the back-end API." },
          { id: 2, description: "Designed the UI/UX." },
        ],
        coWorkers: [
          {
            id: 1,
            name: "Eve Martinez",
            role: "UI/UX Designer",
            avatar: "https://picsum.photos/400",
          },
        ],
      },
    ],
    languages: [
      {
        id: 1,
        name: "English",
        description: "Native speaker.",
        proficiency: "NATIVE",
      },
      {
        id: 2,
        name: "Spanish",
        description: "Fluent in written and spoken Spanish.",
        proficiency: "FLUENT",
      },
    ],
    skills: [
      {
        id: 1,
        name: "JavaScript",
        description: "Experienced in full-stack JavaScript development.",
        proficiency: "EXPERT",
      },
      {
        id: 2,
        name: "Python",
        description: "Proficient in writing scalable back-end services.",
        proficiency: "ADVANCED",
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

  //Open Modal to Work Experience
  return (
    <ModalProvider>
      <div>
        <div
          className={styles.page}
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
        </div>
      </div>
    </ModalProvider>
  );
}
