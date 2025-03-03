"use client";
import React from "react";
import styles from "./page.module.css";
import { useEffect, useRef } from "react";
import PortifolioIndice from "@/components/atons/portifolioIndice";
import UserCard from "@/components/area/UserCard";
import InformationArea from "@/components/area/InformationArea";
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
        name: "Social Media App",
        description: "Built a social media app using MERN stack.",
        image: "https://picsum.photos/400",
        startDate: "2021-01-01",
        endDate: "2021-12-31",
        Team: [
          {
            id: 1,
            name: "Team Awesome",
            description: "A team of talented developers.",
            image: "https://picsum.photos/400",
            members: [],
          },
        ],
        about: "",
        user: {
          id: 0,
          name: "",
          email: "",
          password: "",
        },
        activities: [],
        coWorkers: [],
      },
    ],
    languages: [
      {
        id: 1,
        name: "English",
        description: "Native speaker.",
        proficiency: 100,
      },
      {
        id: 2,
        name: "Spanish",
        description: "Fluent in written and spoken Spanish.",
        proficiency: 100,
      },
    ],
    skills: [
      {
        id: 1,
        name: "JavaScript",
        description: "Experienced in full-stack JavaScript development.",
        proficiency: 100,
        verified: "LinkedIn",
        projects: 10,
        works: 5,
      },
      {
        id: 2,
        name: "Python",
        description: "Proficient in writing scalable back-end services.",
        proficiency: 40,
        verified: "",
        projects: 10,
        works: 5,
      },
    ],
    courses: [
      {
        id: 1,
        name: "Full-Stack Web Development",
        description: "Learned to build web applications using MERN stack.",
        emissor: "Udemy",
        level: "Intermediate",
        startDate: "2021-01-01",
        endDate: "2021-12-31",
        activities: [
          { id: 1, description: "Built a social media app from scratch." },
        ],
        coWorkers: [
          {
            id: 1,
            name: "Alice Smith",
            role: "Fellow Student",
            avatar: "https://picsum.photos/400",
          },
        ],
        certify: "https://udemy.com/certificate",
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
        <div className={styles.page}>
          <div ref={backgroundRef} className={styles.background}></div>
          <div className={styles.container}>
            <PortifolioIndice
              sections={[
                "About Me",
                "Work Experience",
                "Academic",
                "Courses",
                "Languages",
                "Skills",
                "Projects",
              ]}
            />
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
