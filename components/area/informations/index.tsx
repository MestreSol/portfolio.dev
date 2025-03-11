import styles from "./style.module.css";
import React from "react";
import { useModal } from "@/context/ModalContext";
import AboutMe from "@/components/atomic/aboutMe";
import WorkExperience from "../workExperience";
import AcademicArea from "@/components/area/academic";
import CoursesArea from "../courses";
import LanguageArea from "../languages";
import SkillArea from "../skills";
import ProjectArea from "../projects";
import Modal from "../modal";
type Props = {
  profile: Profile;
};

export default function InformationArea({ profile }: Props) {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div className={styles.informationArea}>
      {profile.about && <AboutMe about={profile.about} />}
      {profile.workExperience && (
        <WorkExperience experience={profile.workExperience} />
      )}
      {profile.academicExperience && (
        <AcademicArea academicArray={profile.academicExperience} />
      )}
      {profile.courses && <CoursesArea courses={profile.courses} />}
      {profile.languages ? (
        <LanguageArea languages={profile.languages} />
      ) : null}
      {profile.skills ? <SkillArea skills={profile.skills} /> : null}
      {profile.projects ? <ProjectArea projects={profile.projects} /> : null}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onOpen={openModal}
        skill={profile.skills[0]}
      />
    </div>
  );
}
