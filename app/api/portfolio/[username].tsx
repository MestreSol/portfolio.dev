import { NextApiRequest, NextApiResponse } from "next";
type Data = Profile | { error: string };

const portfolios: Record<string, Profile> = {
  "Charlie Brown Jr": {
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
  "JoaoVitorFerreira": {
    id: 2,
    user: {
      id: 2,
      name: "João Vitor Ferreira.",
      email: "joaovitorferreira8000@gmail.com",
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
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { username } = req.query;

  if (Array.isArray(username) || typeof username === "undefined") {
    return res.status(400).json({ error: "Invalid username" });
  }

  const portfolio = portfolios[username];

  if (portfolio) {
    return res.status(200).json(portfolio);
  } else {
    return res.status(404).json({ error: "Portfolio not found" });
  }
}
