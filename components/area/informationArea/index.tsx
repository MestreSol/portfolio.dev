import styles from "@/app/portifolio/page.module.css";
import Image from "next/image";
import React from "react";
import AboutMe from "@/components/atons/AboutMe";
import { useModal } from "@/context/ModalContext";
import Modal from "../Modal";
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
  const getProgressClass = (proficiency: number) => {
    if (proficiency < 33) return styles.low;
    if (proficiency < 66) return styles.medium;
    return styles.high;
  };
  return (
    <div className={styles.informationArea}>
      <AboutMe about={profile.about} />
      {profile.workExperience ? (
      <section className={styles.session} id={"workExp"}>
        <div className={styles.sessionTitle}>Work Experience</div>
        <div className={styles.sessionContent}>
          {profile.workExperience.map((experience) => (
            <div
              className={styles.experience}
              onClick={() => handleOpenModal("workExp", experience.id)}
              key={experience.id}
            >
              <div className={styles.experienceHeader}>
                <div className={styles.company}>
                  <div className={styles.companyName}>
                    {experience.company.name}
                  </div>
                  <div className={styles.location}>{experience.location}</div>
                </div>
                <div className={styles.date}>
                  {experience.startDate} - {experience.endDate}
                </div>
              </div>
              <div className={styles.experienceContent}>
                <ul className={styles.activetyList}>
                  {experience.activities.map((activity) => (
                    <li className={styles.activety} key={activity.id}>
                      {activity.description}
                    </li>
                  ))}
                </ul>
                <div className={styles.co_workers}>
                  <ul className={styles.co_workersList}>
                    {experience.coWorkers.map((coWorker) => (
                      <li className={styles.co_worker} key={coWorker.id}>
                        <Image
                          src={coWorker.avatar}
                          alt={"co-worker"}
                          width={32}
                          height={32}
                          className={styles.co_workerImage}
                        />
                        <p className={styles.co_workerInfo}>
                          <strong>{coWorker.name}</strong>
                          <br />
                          {coWorker.role}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      ): null}
      {profile.academicExperience ? (

        <section className={styles.session} id={"academic"}>
        <div className={styles.sessionTitle}>Academic</div>
        <div className={styles.sessionContent}>
          {profile.academicExperience.map((academic) => (
            <div className={styles.academic} key={academic.institution}>
              <div className={styles.academicHeader}>
                <div className={styles.institution}>
                  <div className={styles.institutionName}>
                    {academic.institution}
                  </div>
                  <div className={styles.course}>{academic.course}</div>
                </div>
                <div className={styles.date}>
                  {academic.startDate} - {academic.endDate}
                </div>
              </div>
              <div className={styles.academicContent}>
                {academic.degree && (
                  <div className={styles.note}>Note: {academic.degree}</div>
                )}
                <ul className={styles.subjectsList}>
                  {academic.activities.map((subject) => (
                    <li className={styles.subject} key={subject.id}>
                      {subject.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
        ) : null}
      {profile.courses ? (
      <section className={styles.licenses}>
        <div className={styles.sessionTitle}>Licenses and Courses</div>
        <div className={styles.sessionContent}>
          {profile.courses.map((license) => (
            <div className={styles.license} key={license.id}>
              <div className={styles.licenseHeader}>
                <div className={styles.licenseInfo}>
                  <div className={styles.licenseName}>{license.name}</div>
                  <div className={styles.licensor}>{license.emissor}</div>
                </div>
                <div className={styles.date}>
                  {license.startDate} - {license.endDate}
                </div>
              </div>
              <div className={styles.licenseContent}>
                <p className={styles.licenseDescription}>
                  {license.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      ): null}
      {profile.skills ? (
        <section className={styles.skills}>
          <div className={styles.sessionTitle}>Skills</div>
          <div className={styles.sessionContent}>
            <ul className={styles.skillsList}>
            <div>
      {profile.skills.map((skill) => (
        <div className={styles.skill} key={skill.id}>
          <div className={styles.skillName}>
            {skill.verified && <span className={styles.verifiedLabel}></span>}
            {skill.name}
          </div>
          <div className={styles.skillProficiency}>
            <progress
              value={skill.proficiency}
              max="100"
              className={getProgressClass(skill.proficiency)}
            ></progress>
          </div>
          <div className={styles.skillProjects}>
            {skill.projects} projects
          </div>
        </div>
      ))}
    </div>
            </ul>
          </div>
        </section>
        ): null}
      <Modal isOpen={isModalOpen} onClose={closeModal} experience={profile.workExperience[0]}>
      </Modal>
    </div>
  );
}
