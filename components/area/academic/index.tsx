import React from "react";
import Session from "@/components/atons/Session";
import AcademicCard from "@/components/atons/AcademicCard";

// Define the props type for the component
type Props = {
  academicArray: AcademicExperience[];
};

// Functional component to render the academic area
export default function AcademicArea({ academicArray }: Props) {
  return (
    <Session id={"academic"} title={"Academic"}>
      {academicArray.map((academic: AcademicExperience) => (
        <AcademicCard academic={academic} key={academic.id} />
      ))}
    </Session>
  );
}
