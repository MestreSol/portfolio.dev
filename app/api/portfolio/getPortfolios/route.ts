// app/api/portfolio/getPortfolios/route.ts

import { NextResponse } from "next/server";

type Data = Profile | { error: string };

const portfolios: Record<string, Profile> = {
  "Charlie Brown": {
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
  },
  "Joao Vitor Ferreira": {
    id: 2,
    user: {
      id: 2,
      name: "Joao Vitor Ferreira",
      email: "joaovitorferreira8000@gmail.com",
      password: "hashedpassword123",
    },
    avatar: "https://avatars.githubusercontent.com/u/42494721?v=4",
    cover: "https://picsum.photos/id/60/1920/1200",
    description: "Software Engineer",
    about:
      "I'm a software engineer with experience in full-stack development. I specialize in building web applications using React, Node.js, and MongoDB. I'm passionate about creating clean, efficient, and user-friendly software solutions that solve real-world problems.",
    socials: [
      {
        id: 1,
        user: {
          id: 2,
          name: "Joao Vitor Ferreira",
          email: "joaovitorferreira8000@gmail.com",
          password: "hashedpassword123",
        },
        name: "GitHub",
        link: "https://github.com/MestreSol",
      },
      {
        id: 2,
        user: {
          id: 2,
          name: "Joao Vitor Ferreira",
          email: "joaovitorferreira8000@gmail.com",
          password: "hashedpassword123",
        },
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/jo%C3%A3o-vitor-ferreira1/",
      },
      {
        id: 3,
        user: {
          id: 2,
          name: "Joao Vitor Ferreira",
          email: "joaovitorferreira8000@gmail.com",
          password: "hashedpassword123",
        },
        name: "Twitter",
        link: "https://twitter.com/MestreSol",
      },
      {
        id: 4,
        user: {
          id: 2,
          name: "Joao Vitor Ferreira",
          email: "joaovitorferreira8000@gmail.com",
          password: "hashedpassword123",
        },
        name: "Instagram",
        link: "https://www.instagram.com/mestresol/",
      },
    ],
    location: "Campinas - SP, Brazil",
    contacts: ["+55 (19) 99842-2839", "joaovitorferreira8000@gmail.com"],
    nodes: 0,
    workExperience: [
      {
        id: 1,
        user: {
          id: 2,
          name: "Joao Vitor Ferreira",
          email: "joaovitorferreira8000@gmail.com",
          password: "hashedpassword123",
        },
        company: {
          id: 1,
          name: "Flex",
          location: "Jaguariuna, SP",
          description: "Create the Extraordinary",
          CNPJ: "",
          contacts: [""],
          image: "https://picsum.photos/400",
        },
        location: "Intern",
        startDate: "2022-03-28",
        endDate: "2024-03-28",
        activities: [
          {
            id: 1,
            description:
              "Development and Implementation of Scalable Solutions: Designing and executing local technical solutions with a focus on scalability and web applications.",
          },
          {
            id: 2,
            description:
              "Applied Technical Skills: Utilization of C and ANSI SQL to develop robust solutions and ensure efficient replication across multiple sites.",
          },
          {
            id: 3,
            description:
              "Project Management: Leadership in project management, ensuring strict deadlines and high-quality deliveries.",
          },
          {
            id: 4,
            description:
              "Interaction with End Customers: Personalized and efficient service in aligning customer demands with the developed solutions.",
          },
          {
            id: 5,
            description:
              "Results Obtained: Replicable and customized solutions that met the specific needs of clients, contributing to the efficiency and success of the projects.",
          },
        ],
        coWorkers: [],
        usedSkills: [
          {
            id: 1,
            name: "JavaScript",
            proficiency: "EXPERT",
          },
          {
            id: 2,
            name: "React",
            proficiency: "ADVANCED",
          },
        ],
      },
      {
        id: 2,
        user: {
          id: 2,
          name: "Joao Vitor Ferreira",
          email: "joaovitorferreira8000@gmail.com",
          password: "hashedpassword123",
        },
        company: {
          id: 1,
          name: "Big O",
          location: "Campinas, SP",
          description: "Making life Simpler",
          CNPJ: "",
          contacts: [""],
          image: "https://picsum.photos/400",
        },
        location: "Main Developer",
        startDate: "2024-05-01",
        endDate: "Now",
        activities: [
          {
            id: 1,
            description:
              "Currently, I am working on several personal and collaborative projects, covering areas such as book development, web apps, desktop applications and games. I am applying the knowledge acquired through several courses, exploring technologies such as TypeScript, CSS, C#, JavaScript, C++, Python, Objective-C, HTML, Prisma, Less and PHP. In addition, I am leading a volunteer development team for the completion of some of these projects, improving my skills in project management, collaboration and technological innovation.",
          },
        ],
        coWorkers: [],
        usedSkills: [
          {
            id: 1,
            name: "JavaScript",
            proficiency: "EXPERT",
          },
          {
            id: 2,
            name: "React",
            proficiency: "ADVANCED",
          },
        ],
      },
    ],
    academicExperience: [
      {
        id: 1,
        course: "Computer Technician",
        user: {
          id: 2,
          name: "Joao Vitor Ferreira",
          email: "joaovitorferreira8000@gmail.com",
          password: "hashedpassword123",
        },
        level: "Technician High School",
        degree: "",
        institution: "ETEC",
        location: "Hortolandia - SP, Brazil",
        startDate: "2017-02-01",
        endDate: "2019-12-31",
        activities: [],
        coWorkers: [],
      },
      {
        id: 2,
        course: "Computer Engineering",
        user: {
          id: 2,
          name: "Joao Vitor Ferreira",
          email: "joaovitorferreira8000@gmail.com",
          password: "hashedpassword123",
        },
        level: "Bachelor's Degree",
        degree: "",
        institution: "Unimetrocamp Wyden",
        location: "Campinas - SP, Brazil",
        startDate: "2020-02-01",
        endDate: "2024-12-31",
        activities: [
          {
            id: 1,
            description:
              "Scientific initiation: Development of a simple system for controlling patient information connected to cloud structures, which can be connected to peripherals made on the basis of the ESP-32 for clinical monitoring, for example.",
          },
          {
            id: 2,
            description:
              "Python Workshop: A workshop on Python programming language, with a focus on data analysis.",
          },
          {
            id: 3,
            description:
              "Monitoring: Monitoring of the discipline of Programming Logic, C, DataBase and Programming Oriented Object, with the objective of assisting students in the understanding of the content and the resolution of exercises.",
          },
        ],
        coWorkers: [],
      },
    ],
    followers: [],
    projects: [],
    languages: [
      {
        id: 1,
        name: "Portuguese",
        description: "Native speaker.",
        proficiency: 100,
      },
      {
        id: 2,
        name: "English",
        description: "Proficient in written and spoken English.",
        proficiency: 40,
      },
    ],
    skills: [],
    courses: [],
  },
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const user = searchParams.get("user");

  const headers = new Headers();
  headers.set("Access-Controll-Allow-Origin", "*");
  headers.set("Access-Controll-Allow-Methods", "GET, POST, PUT, DELETE");
  headers.set("Access-Controll-Allow-Headers", "Content-Type");

  if (!user) {
    return NextResponse.json(
      { error: "Invalid user parameter" },
      { status: 400, headers },
    );
  }

  const portfolio = portfolios[user];

  if (portfolio) {
    return NextResponse.json(
      portfolio,
      { status: 200, headers },
    );
  } else {
    return NextResponse.json(
      { error: "User not found" },
      { status: 404, headers }
    );
  }
}

export async function OPTIONS(){
  return new Response(null,{
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}
