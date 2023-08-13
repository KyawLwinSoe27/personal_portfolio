import React from 'react';
import aboutMeData from "../about-me.json";
import projects from "../projects.json";
const PortfolioPage = () => {
  return (
    <section className='' id="portfolio">
    <div className="bg-backgroundColor1">
    <div className='py-5'>
      <h1 className='text-center'>My Projects</h1>
    </div>
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex ${index % 2 === 0 ? 'flex-col md:flex-row sm:flex-col' : ' flex-col md:flex-row-reverse sm:flex-col-reverse'
              } mb-8 items-center justify-center`}
          >
            <div className="w-1/4 pr-4 pl-2">
              <img
                src={project.photoUrl}
                alt={`Project ${project.id}`}
                className="max-w-full rounded"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <div className="w-full md:w-2/4 p-4">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  )
}

export default PortfolioPage