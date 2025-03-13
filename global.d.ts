declare global {
  enum ProficiencyLevel_Language {
    BASIC = 'BASIC',
    INTERMEDIATE = 'INTERMEDIATE',
    ADVANCED = 'ADVANCED',
    FLUENT = 'FLUENT',
    NATIVE = 'NATIVE'
  }
  enum ProficiencyLevel_Skill {
    BASIC = 'BASIC',
    INTERMEDIATE = 'INTERMEDIATE',
    ADVANCED = 'ADVANCED',
    EXPERT = 'EXPERT'
  }
  type CoWorker = {
    id: number
    name: string
    role: string
    avatar: string
  }
  type Role = {
    id: number
    name: string
    description: string
  }
  type User = {
    id: number
    name: string
    email: string
    password: string
  }
  type Social = {
    id: number
    user: User
    name: string
    link: string
  }
  type Company = {
    id: number
    name: string
    location: string
    description: string
    CNPJ: string
    contacts: string[]
    image: string
  }
  type WorkExperience = {
    id: number
    user: User
    company: Company
    location: string
    startDate: string
    endDate: string
    activities: {
      id: number
      description: string
    }[]
    coWorkers: CoWorker[]
    usedSkills: {
      id: number
      name: string
      proficiency: string
    }[]
  }
  type AcademicExperience = {
    id: number
    course: string
    image: string
    user: User
    level: string
    degree: string
    institution: string
    location: string
    startDate: string
    endDate: string
    activities: {
      id: number
      description: string
    }[]
    coWorkers: CoWorker[]
  }
  type Project = {
    id: number
    about: string
    Team: Team[]
    user: User
    name: string
    description: string
    startDate: string
    endDate: string
    activities: {
      id: number
      description: string
    }[]
    coWorkers: CoWorker[]
    image: string
  }
  type Team = {
    id: number
    name: string
    description: string
    image: string
    members: {
      id: number
      user: User
      role: string
    }[]
  }
  type Language = {
    id: number
    name: string
    description: string
    proficiency: number
  }
  type Skill = {
    id: number
    name: string
    description: string
    proficiency: number
    verified: string
    projects: number
    works: number
  }
  type Course = {
    id: number
    name: string
    description: string
    emissor: string
    level: string
    startDate: string
    endDate: string
    activities: {
      id: number
      description: string
    }[]
    coWorkers: CoWorker[]
    certify: string
  }
  type Profile = {
    id: number
    user: User
    avatar: string
    cover: string
    description: string
    about: string
    socials: Social[]
    location: string
    contacts: string[]
    nodes: number
    workExperience: WorkExperience[]
    academicExperience: AcademicExperience[]
    followers: User[]
    projects: Project[]
    languages: Language[]
    skills: Skill[]
    courses: Course[]
  }

  type Portfolio = {
    id: number
    user: {
      id: number
      name: string
      email: string
      password: string
    }
    avatar: string
    cover: string
    description: string
    about: string
    socials: {
      id: number
      user: {
        id: number
        name: string
        email: string
        password: string
      }
      name: string
      link: string
    }[]
    location: string
    contacts: string[]
    nodes: number
    workExperience: {
      id: number
      user: User
      company: Company
      location: string
      startDate: string
      endDate: string
      activities: {
        id: number
        description: string
      }[]
      coWorkers: {
        id: number
        name: string
        role: string
        avatar: string
      }[]
      usedSkills: {
        id: number
        name: string
        proficiency: string
      }[]
    }[]
    academicExperience: {
      id: number
      course: string
      user: {
        id: number
        name: string
        email: string
        password: string
      }
      level: string
      degree: string
      institution: string
      location: string
      startDate: string
      endDate: string
      activities: {
        id: number
        description: string
      }[]
      coWorkers: {
        id: number
        name: string
        role: string
        avatar: string
      }[]
      image: string // Adicionando a propriedade 'image'
    }[]
    followers: {
      id: number
      name: string
      email: string
      password: string
    }[]
    projects: {
      id: number
      about: string
      Team: {
        id: number
        name: string
        description: string
        image: string
        members: {
          id: number
          user: {
            id: number
            name: string
            email: string
            password: string
          }
          role: string
        }[]
      }[]
      user: {
        id: number
        name: string
        email: string
        password: string
      }
      name: string
      description: string
      startDate: string
      endDate: string
      activities: {
        id: number
        description: string
      }[]
      coWorkers: {
        id: number
        name: string
        role: string
        avatar: string
      }[]
      image: string
    }[]
    languages: {
      id: number
      name: string
      description: string
      proficiency: number
    }[]
    skills: {
      id: number
      name: string
      description: string
      proficiency: number
      verified: string
      projects: number
      works: number
    }[]
    courses: {
      id: number
      name: string
      description: string
      emissor: string
      level: string
      startDate: string
      endDate: string
      activities: {
        id: number
        description: string
      }[]
      coWorkers: {
        id: number
        name: string
        role: string
        avatar: string
      }[]
      certify: string
    }[]
  }
}

export {}
