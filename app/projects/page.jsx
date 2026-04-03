import Image from "next/image";
import Link from "next/link";
import "./projects.css";

export default function Projects() {
    return (
        <div className="projects-page">
            <h1 className="projects-title">Projects</h1>
            <p className="projects-notice">Note: Backend servers for some projects may take up to one minute to start after the first request, as they are hosted on free-tier services.</p>
            
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
                        <p className="project-desc">As part of a semester project in a university software engineering course, I co-developed the multiplayer game Snake with Friends with four other students</p>
                    </div>
                </Link>

                <Link href="https://volley-planner.vercel.app/" target="_blank" className="project-card clickable">
                    <div className="project-img-container" style={{ position: 'relative', height: '200px', width: '100%', marginBottom: '1.5rem', overflow: 'hidden', borderRadius: '16px' }}>
                        <Image 
                            src="/volleyPlanner.png" 
                            alt="Gameday Planner" 
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="project-content">
                        <h3 className="project-title">Gameday Planner</h3>
                        <p className="project-desc">A web-based gameday planner that simplifies match scheduling for my volleyball club, allowing opponents to book available game days quickly and efficiently.</p>
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