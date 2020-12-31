import React from 'react';

function ProjectLink({ project }) {
  return (
    <div className="link-line">
      {project.url ? (
      <a href={project.url} target={project.url.includes('mailto') ? "_parent" : "_blank"} rel="noreferrer">
        <i className={`fa ${project.languageIconName}`} aria-hidden="true"></i> {project.displayName} {project.sourceIconName ? <i className={`fa ${project.sourceIconName}`} aria-hidden="true"></i> : null}
      </a>
      ) : (
        <>
          <i className={`fa ${project.languageIconName}`} aria-hidden="true"></i> {project.displayName}
        </>
      )}
    </div>
  )
}

export default ProjectLink;
