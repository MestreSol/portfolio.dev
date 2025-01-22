import React from "react";
import "./styles.css";
import Image from "next/image";

type Props = {
  userName: string;
  userDescription: string;
  userFollowers: number;
  userNodes: number;
  userProjects: number;
  userImage: string;
  userWallpaper: string;
};
export default function Profile(props: Props) {
  return (
    <div className="profile">
      <div className="profile-header">
        <Image
          src={props.userWallpaper}
          alt={props.userName + "'s Wallpaper"}
        />
        <Image
          src={
            "https://i0.statig.com.br/bancodeimagens/ba/zu/9h/bazu9hysgxthlkdc23t2x1gqs.jpg"
          }
          alt={"ProfileImage"}
          className={"profile-avatar"}
        />
      </div>
      <div className="profile-info">
        <div className="profile-body">
          <h2 className="profile-name">Charlie Brown Junior</h2>
          <hr />
          <p className="profile-description">Musico Renomado</p>
        </div>
        <div className="profile-data">
          <div className="profile-data-item">
            <h3>
              <strong>Followers</strong>
            </h3>
            <p>10k</p>
          </div>
          <div className="profile-data-item">
            <h3>
              <strong>Nodes</strong>
            </h3>
            <p>1.1k</p>
          </div>
          <div className="profile-data-item">
            <h3>
              <strong>Projects</strong>
            </h3>
            <p>10</p>
          </div>
        </div>
      </div>
    </div>
  );
}
