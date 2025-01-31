import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import WorkExperienceArea from "@/components/area/WorkExperienceArea";
import WorkExperienceCard from "@/components/atons/WorkExperienceCard";

const mockExperience = [
  {
    id: 1,
    user: {
      id: 1,
      name: "User 1",
      email: "Email 1",
      password: "Password 1",
      image: "Image 1",
      skills: ["Skill 1"],
      projects: ["Project 1"],
      academicExperiences: ["Academic Experience 1"],
      workExperiences: ["Work Experience 1"],
      coWorkers: ["CoWorker 1"]
    },
    company: {
      id: 1,
      name: "Company 1",
      location: "Location 1",
      description: "Description 1",
      CNPJ: "CNPJ 1",
      contacts: ["Contact 1"],
      image: "Image 1"
    },
    location: "Position 1",
    startDate: "2021-01-01",
    endDate: "2021-12-31",
    activities: [{ id: 1, description: "Activity 1" }],
    coWorkers: [{ id: 1, name: "CoWorker 1", role: "Role 1", avatar: "Avatar 1" }],
    usedSkills: [{ id: 1, name: "Skill 1", proficiency: "Proficiency 1" }]
  }
];

jest.mock("@/components/atons/WorkExperienceCard");

describe("WorkExperienceArea", () => {
  it("renders without crashing", () => {
    render(<WorkExperienceArea experience={mockExperience} />);
  });

  it("displays the correct number of WorkExperienceCard components", () => {
    const { getAllByTestId } = render(<WorkExperienceArea experience={mockExperience} />);
    expect(getAllByTestId("work-experience-card").length).toBe(mockExperience.length);
  });

  it("displays the correct title", () => {
    const { getByText } = render(<WorkExperienceArea experience={mockExperience} />);
    expect(getByText("Work Experience")).toBeInTheDocument();
  });

  it("handles empty experience array", () => {
    const { container } = render(<WorkExperienceArea experience={[]} />);
    expect(container.querySelectorAll("[data-testid='work-experience-card']").length).toBe(0);
  });
});
