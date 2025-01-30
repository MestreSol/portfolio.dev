import styles from "@/app/portifolio/page.module.css";
import Image from "next/image";
import React from "react";
import AboutMe from "@/components/atons/AboutMe";
import { useModal } from "@/context/ModalContext";
import Modal from "../Modal";
import WorkExperience from "@/components/atons/WorkExperience";
type Props = {
  profile: Profile;
};

export default function InformationArea({ profile }: Props) {
  const { isModalOpen, openModal, closeModal } = useModal();

  const [isSkill, setIsSkill] = React.useState(false);
  const [isWorkExp, setIsWorkExp] = React.useState(false);

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
        <WorkExperience experience={profile.workExperience} />
      ) : null}
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
      ) : null}
      {profile.languages ? (
        <section className={styles.skills}>
          <div className={styles.sessionTitle}>Languages</div>
          <div className={styles.sessionContent}>
            <ul className={styles.skillsList}>
              <div>
                {profile.languages.map((skill) => (
                  <div className={styles.skill} key={skill.id}>
                    <div className={styles.skillName}>{skill.name}</div>
                    <div className={styles.skillProficiency}>
                      <progress
                        value={skill.proficiency}
                        max="100"
                        className={getProgressClass(skill.proficiency)}
                      ></progress>
                    </div>
                  </div>
                ))}
              </div>
            </ul>
          </div>
        </section>
      ) : null}
      {profile.skills ? (
        <section className={styles.skills}>
          <div className={styles.sessionTitle}>Skills</div>
          <div className={styles.sessionContent}>
            <ul className={styles.skillsList}>
              <div>
                {profile.skills.map((skill) => (
                  <div className={styles.skill} key={skill.id}>
                    <div className={styles.skillName}>{skill.name}</div>
                    <div className={styles.skillProficiency}>
                      <progress
                        value={skill.proficiency}
                        max="100"
                        className={getProgressClass(skill.proficiency)}
                      ></progress>
                    </div>
                    <div className={styles.skillProjects}>
                      {skill.verified !== "" ? (
                        <div className={styles.skillVerified}>
                          Verified by {skill.verified}
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </ul>
          </div>
        </section>
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
