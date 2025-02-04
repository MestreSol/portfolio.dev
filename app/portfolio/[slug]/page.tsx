"use client";
import React, { use, useEffect, useState, useRef } from "react";
import styles from "../page.module.css";
import PortifolioIndice from "@/components/atons/portifolioIndice";
import UserCard from "@/components/area/UserCard";
import InformationArea from "@/components/area/InformationArea";
import { ModalProvider } from "@/context/ModalContext";

type Props = {
  params: Promise<{ slug: string }>; // Agora `params` é uma Promise
};

type UserMock = {
  id: number;
  user:
    {
      id: number;
      name: string;
      email: string;
      password: string;
    };
  avatar: string;
  cover: string;
  description: string;
  about: string;
  socials: {
    id: number;
    user: {
      id: number;
      name: string;
      email: string;
      password: string;
    };
    name: string;
    link: string;
  }[];
  location: string;
  contacts: string[];
  nodes: number;
  workExperience: {
    id: number;
    user: User;
    company: Company;
    location: string;
    startDate: string;
    endDate: string;
    activities: {
      id: number;
      description: string;
    }[];
    coWorkers: {
      id: number;
      name: string;
      role: string;
      avatar: string;
    }[];
    usedSkills: {
      id: number;
      name: string;
      proficiency: string;
    }[];
  }[];
  academicExperience: {
    id: number;
    course: string;
    user: {
      id: number;
      name: string;
      email: string;
      password: string;
    };
    level: string;
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    activities: {
      id: number;
      description: string;
    }[];
    coWorkers: {
      id: number;
      name: string;
      role: string;
      avatar: string;
    }[];
  }[];
  followers: {
    id: number;
    name: string;
    email: string;
    password: string;
  }[];
  projects: {
    id: number;
    about: string;
    Team: {
      id: number;
      name: string;
      description: string;
      image: string;
      members: {
        id: number;
        user: {
          id: number;
          name: string;
          email: string;
          password: string;
        };
        role: string;
      }[];
    }[];
    user: {
      id: number;
      name: string;
      email: string;
      password: string;
    };
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    activities: {
      id: number;
      description: string;
    }[];
    coWorkers: {
      id: number;
      name: string;
      role: string;
      avatar: string;
    }[];
    image: string;
  }[];
  languages: {
    id: number;
    name: string;
    description: string;
    proficiency: number;
  }[];
  skills: {
    id: number;
    name: string;
    description: string;
    proficiency: number;
    verified: string;
    projects: number;
    works: number;
  }[];
  courses: {
    id: number;
    name: string;
    description: string;
    emissor: string;
    level: string;
    startDate: string;
    endDate: string;
    activities: {
      id: number;
      description: string;
    }[];
    coWorkers: {
      id: number;
      name: string;
      role: string;
      avatar: string;
    }[];
    certify: string;
  }[];
};

export default function Portifolio({ params }: Props) {
  const unwrappedParams = use(params); // 🔥 Desembrulhando a Promise
  const [userMock, setUserMock] = useState<UserMock | null>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!unwrappedParams.slug) return; // Evita chamadas inválidas

    const username = decodeURIComponent(unwrappedParams.slug); // Corrige espaços e caracteres especiais
    console.log("User:", username); // Log para depuração

    const fetchUserMock = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/portfolio/getPortfolios?user=${username}`
        );
        const data = await response.json();
        setUserMock(data);
      } catch (error) {
        console.error("Erro ao buscar portfólio:", error);
      }
    };

    fetchUserMock();
  }, [unwrappedParams.slug]);

  return (
    <ModalProvider>
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
          {userMock && (
            <>
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
            </>
          )}
        </div>
      </div>
    </ModalProvider>
  );
}
