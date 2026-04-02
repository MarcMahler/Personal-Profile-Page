import "./profile.css";
import Socials from "../Socials/socials.jsx";

export default function Profile() {
    return (
        <section>
        <Socials />
        <img src="/portrait.jpg" alt="Profile Image" className="profile-img" />
        <h1 className="name">Marc Mahler</h1>
        <p className="description">Business Informatics Student @UZH</p>
        </section>
    )
}