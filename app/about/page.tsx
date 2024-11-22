"use server";

import Image from 'next/image';
import profilePic from '../../public/profilePic.png'; 
import mountains from '../../public/mountains.jpg';
import { client } from '../../sanity/lib/client';
import { CurriculumVitae } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  IconDefinition, 
  faGolang, 
  faReact, 
  faJs, 
  faBootstrap, 
  faCss3, 
  faDocker, 
  faWordpress, 
  faRaspberryPi, 
  faGitlab, 
  faGithub,
  faCpanel,
  faHtml5,
  faFigma,
} from '@fortawesome/free-brands-svg-icons';
import { faGem } from '@fortawesome/free-regular-svg-icons';
import { urlFor } from '@/sanity/lib/image';

const fetchData = async (): Promise<CurriculumVitae> => {
  const curriculumVitae = await client.fetch(`*[_type == "curriculumVitae"]`);
  return curriculumVitae[0]; 
};

const skillsIcons: { icon: IconDefinition }[] = [
  { icon: faGolang },
  { icon: faGem },
  { icon: faReact },
  { icon: faJs },
  { icon: faBootstrap },
  { icon: faCss3 },
  { icon: faDocker },
  { icon: faWordpress },
  { icon: faRaspberryPi },
  { icon: faGitlab },
  { icon: faGithub },
  { icon: faCpanel },
  { icon: faHtml5 },
  { icon: faFigma },
];

export default async function About() {
  const data = await fetchData();

  return (
    <div className="min-h-screen flex flex-col items-center">
      <section className="w-full flex flex-col items-center">
        <div className="prose w-full max-w-max grid grid-cols-1 md:grid-cols-2 pl-8">
          <div className="flex flex-col justify-center">
            <h3 className="italic mb-4">My name is</h3>
            <h1 className="mb-6">Gary Allen</h1>
            <h1 className="mb-6">Russell Jr</h1>
            <h3 className="italic">My friends call me &quot;Allen&quot;</h3>
          </div>
          <div className="">
            <Image 
              src={profilePic} 
              alt="Allen Russell" 
            />
          </div>
        </div>
        <div className="w-full py-10 flex justify-center">
          <div className="prose max-w-4xl mx-auto p-4 text-center">
            <h2 className="mb-4">Curriculum Vitae</h2>
            <div>
              {data?.intro ? (
                data.intro.map((block, blockIndex) => (
                  block.children ? (
                    block.children.map((child, childIndex) => (
                      <p key={`${blockIndex}-${childIndex}`}>{child.text}</p>
                    ))
                  ) : (
                    <p key={blockIndex}>No text content in this block</p>
                  )
                ))
              ) : (
                <p>No intro content found.</p> 
              )}
            </div>
            <div className="flex justify-center mt-10">
              <Image 
                src={mountains} 
                alt="Mountains" 
                className="shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col items-start p-8 m-20">
        <div className="prose text-left p-4">
          <h3>Skills</h3>
          {data?.skills ? (
            <div className="flex flex-col">
              {data.skills.map((skill, index) => (
                <div className="flex items-center w-screen" key={index}>
                  <ul className="list-none pl-4 m-0">
                    <h6>{skill.skillsList}</h6>
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <p>No skills found.</p>
          )}
        </div>
        <div className="prose text-left p-4">
          <div className="flex flex-wrap justify-center w-screen">
            {skillsIcons.map((skill, index) => (
              <div key={index} className="m-4 text-center">
                <FontAwesomeIcon icon={skill.icon} size="4x" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col items-start p-8 mt-10">
        <div className="prose text-left max-w-screen-lg w-full p-4">
          <h2 className="m-0">Experience</h2>
          {data?.experiences ? (
            <div className="flex flex-col">
              {data.experiences.map((experience, index) => (
                <div className="flex flex-col" key={index}>
                  <h4>{experience.company}</h4>
                  <div className="flex flex-row">
                    <h6>&quot;{experience.jobTitle}&quot;</h6>
                    <p className="ml-10 mt-1">{experience.datesWorked}</p>
                  </div>
                  <ul className="m-0">
                    {experience.duties.map((duty, dutyIndex) => (
                      <li key={dutyIndex}>{duty}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <p>No experience found.</p>
          )}
        </div>
      </section>
      <section className="w-full flex flex-col items-end p-8 mt-10">
        <div className="prose text-right max-w-screen-lg w-full p-4">
          <h2 className="m-0">Education</h2>
          {data?.education ? (
            <div className="flex flex-col">
              {data.education.map((education, index) => (
                <div className="flex flex-col" key={index}>
                  <h4>{education.schoolName}</h4>
                  <h6>{education.degree}</h6>
                </div>
              ))}
            </div>
          ) : (
            <p>No education found.</p>
          )}
        </div>
      </section>
      <section className="w-full flex flex-col items-center p-8 mt-10">
        <div className="prose text-center w-full p-4">
          <h2>My World</h2>
          {data?.myWorld ? (
            <div className="flex flex-col gap-20">
              {data.myWorld.map((world, index) => (
                <div
                  className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} gap-40 items-center`}
                  key={index}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "order-1" : "order-2"}`}>
                    {world.images.map((image, imgIndex) => (
                      <Image 
                        key={imgIndex} 
                        src={urlFor(image.asset._ref).url()} 
                        alt={`${world.category} image`} 
                        className="w-full h-auto"
                        width={500}
                        height={300} 
                      />
                    ))}
                  </div>
                  <div className="w-1/2 text-left">
                    <h3>{world.category}</h3>
                    <p>{world.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No world found.</p>
          )}
        </div>
      </section>
      <section className="m-20 mb-40">
        <div className="prose text-center max-w-screen-lg w-full p-4">
          <h3>Audio-Visual Editing</h3>
          <div className="w-full">
            <iframe 
              width="640" 
              height="360" 
              src="https://www.youtube.com/embed/OaHSILtvV5o?si=WoQSOAqgNp3pp-xR" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>

            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
