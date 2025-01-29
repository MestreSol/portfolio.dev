declare global {
  enum ProficiencyLevel_Language {
    BASIC = "BASIC",
    INTERMEDIATE = "INTERMEDIATE",
    ADVANCED = "ADVANCED",
    FLUENT = "FLUENT",
    NATIVE = "NATIVE",
  }
  enum ProficiencyLevel_Skill {
    BASIC = "BASIC",
    INTERMEDIATE = "INTERMEDIATE",
    ADVANCED = "ADVANCED",
    EXPERT = "EXPERT",
  }
  type Role = {
    id: number;
    name: string;
    description: string;
  };
  type User = {
    id: number;
    name: string;
    email: string;
    password: string;
  };
  type Social = {
    id: number;
    user: User;
    name: string;
    link: string;

  };
  type Company = {
    id: number;
    name: string;
    location: string;
    description: string;
    CNPJ: string;
    contacts: string[];
    image: string;
  };
  type WorkExperience = {
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
  };
  type AcademicExperience = {
    id: number;
    course: string;
    user: User;
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
  };
  type Project = {
    id: number;
    about: string;
    Team: Team;
    user: User;
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
  };

  type Team = {
    id: number;
    name: string;
    description: string;
    image: string;
    members: {
      id: number;
      user: User;
      role: string;
    }[];
  };

  type Language = {
    id: number;
    name: string;
    description: string;
    proficiency: string;

  };

  type Skill = {
    id: number;
    name: string;
    description: string;
    proficiency: number;
    verified: boolean;
    projects: number;
    works: number;
  };
  type Course = {
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
  };
  type Profile = {
    id: number;
    user: User;
    avatar: string;
    cover: string;
    description: string;
    about: string;
    socials: Social[];
    location: string;
    contacts: string[];
    nodes: number;
    workExperience: WorkExperience[];
    academicExperience: AcademicExperience[];
    followers: User[];
    projects: Project[];
    languages: Language[];
    skills: Skill[];
    courses: Course[];
  };
}

export {};
