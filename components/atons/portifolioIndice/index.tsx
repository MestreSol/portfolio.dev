import styles from "@/app/portifolio/page.module.css";
import React from "react";

type PortifolioIndiceProps = {
  sections: string[];
};

export default function PortifolioIndice(props: PortifolioIndiceProps) {
  return (
    <div className={styles.index}>
      <div className={styles.menu}>
        {props.sections.map((section, index) => (
          <div key={index} className={styles.menuItem}>
            {section}
          </div>
        ))}
      </div>
    </div>
  );
}
