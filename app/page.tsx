import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className="container">
            <div className="profile-area">
                <Image
                    src="/profile.jpg"
                    alt="Picture of the author"
                    width={200}
                    height={200}
                    className="profile-image"
                />
                <h1 className="name">Your Name</h1>
                <p className="bio">Your Bio</p>
            </div>
        </div>
    );
}
