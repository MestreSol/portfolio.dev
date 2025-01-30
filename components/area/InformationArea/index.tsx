import styles from "./style.module.css";
import Image from "next/image";
import React from "react";
import AboutMe from "@/components/atons/AboutMe";
import { useModal } from "@/context/ModalContext";
import Modal from "../Modal";
import WorkExperience from "@/components/area/WorkExperienceArea";
import AcademicArea from "@/components/area/AcademicArea";
import CoursesArea from "@/components/area/CoursesArea";
import SkillArea from "@/components/area/SkillArea";
import LanguageArea from "@/components/area/LangagueArea";
type Props = {
  profile: Profile;
};

export default function InformationArea({ profile }: Props) {
  const { isModalOpen, openModal, closeModal } = useModal();

  const handleOpenModal = (type: string, id: number) => {
    if (type === "workExp") {
      const experience = profile.workExperience.find(
        (experience) => experience.id === id,
      );
      console.log(experience);
    } else if (type === "recomendation") {
      console.log("Recomendation");
    }

    openModal();
  };

  return (
    <div className={styles.informationArea}>
      {profile.about && (
        <AboutMe about={profile.about} />
      )}
      {profile.workExperience && (
        <WorkExperience experience={profile.workExperience} />
      )}
      {profile.academicExperience && (
        <AcademicArea academicArray={profile.academicExperience}  />
      )}
      {profile.courses && (
        <CoursesArea courses={profile.courses} />
      )}
      {profile.languages ? (
        <LanguageArea languages={profile.languages} />
      ) : null}
      {profile.skills ? (
        <SkillArea skills={profile.skills} />
      ) : null}
      {profile.projects ? (
        <section className={styles.projects}>
          <div className={styles.sessionTitle}>Projects</div>
          <div className={styles.sessionContent}>
            <ul className={styles.projectsList}>
              <div>
                {profile.projects.map((projects) => (
                  <div className={styles.project} key={projects.id}>
                    <div className={styles.projectHeader}>
                      <h2 className={styles.projectName}>{projects.name}</h2>
                      <div className={styles.projectDate}>
                        {projects.startDate} - {projects.endDate}
                      </div>
                    </div>
                    <div className={styles.projectDescription}>
                      <div className={styles.projectAbout}>
                        {projects.about}
                      </div>
                      <Image
                        src={projects.Team.image}
                        width={400}
                        height={200}
                        alt=""
                      ></Image>
                    </div>
                    <div className={styles.projectTeam}>
                      <div className={styles.co_worker}>
                        <Image
                          src={projects.Team.image}
                          alt={"co-worker"}
                          width={32}
                          height={32}
                          className={styles.co_workerImage}
                        />
                        <p className={styles.co_workerInfo}>
                          <strong>{projects.Team.name}</strong>
                          <br />
                          Made by
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ul>
          </div>
        </section>
      ) : null}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        skill={profile.skills[0]}
      />
    </div>
  );
}
