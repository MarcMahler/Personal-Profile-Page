import "./projects.css";

export default function Projects() {
    return (
        <div className="projects-page">
            <h1 className="projects-title">Projects</h1>
            <p className="placeholder-text">New projects are coming soon. Stay tuned!</p>
            
            <div className="projects-grid">
                <div className="project-card placeholder">
                    <div className="project-placeholder-img"></div>
                    <div className="project-content">
                        <h3 className="project-placeholder-title">Coming Soon</h3>
                        <p className="project-placeholder-desc">Working on something exciting. Check back later!</p>
                    </div>
                </div>
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