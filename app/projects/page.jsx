import Image from "next/image";
import Link from "next/link";
import "./projects.css";

export default function Projects() {
    return (
        <div className="projects-page">
            <h1 className="projects-title">Projects</h1>
            
            <div className="projects-grid">
                <Link href="https://snakewithfriends.vercel.app/" target="_blank" className="project-card clickable">
                    <div className="project-img-container" style={{ position: 'relative', height: '200px', width: '100%', marginBottom: '1.5rem', overflow: 'hidden', borderRadius: '16px' }}>
                        <Image 
                            src="/snakeWithFriends.png" 
                            alt="Snake with Friends" 
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="project-content">
                        <h3 className="project-title">Snake with Friends</h3>
                        <p className="project-desc">During an university course about Web Development I created Snake with Friends with 4 other students as a semester project</p>
                    </div>
                </Link>

                <div className="project-card placeholder">
                    <div className="project-placeholder-img"></div>
                    <div className="project-content">
                        <h3 className="project-placeholder-title">Coming Soon</h3>
                        <p className="project-placeholder-desc">A new project will be featured here soon.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}