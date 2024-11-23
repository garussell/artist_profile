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
    <div className="">
      <section className="w-full flex flex-col items-center">
        <div className="prose prose-sm md:prose-md lg:prose-lg w-full max-w-max grid grid-cols-1 md:grid-cols-2 pl-8">
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
              className="max-w-full max-h-[800px] object-contain"
            />
          </div>
        </div>
        <div className="w-full py-10 flex justify-center mt-20">
          <div className="prose prose-sm md:prose-md lg:prose-lg max-w-4xl mx-auto p-4 text-center sm:text-start">
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
      <section className="w-full flex flex-col items-start p-8 mt-20 mb-20 sm:p-4">
        <div className="prose prose-sm md:prose-md lg:prose-lg text-left p-4 sm:p-px">
          <h2>Skills</h2>
          {data?.skills ? (
            <div className="flex flex-col justify-center">
              {data.skills.map((skill, index) => (
                <div className="flex items-center w-screen" key={index}>
                  <ul className="list-none pl-4 m-0 sm:pl-0 sm:mb-2">
                    <h6 className="sm:text-lg">{skill.skillsList}</h6>
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <p>No skills found.</p>
          )}
        </div>
        <div className="prose prose-sm md:prose-md lg:prose-lg text-left p-4 sm:p-px">
          <div className="flex flex-wrap w-screen">
            {skillsIcons.map((skill, index) => (
              <div key={index} className="m-4 text-center">
                <FontAwesomeIcon icon={skill.icon} size="4x" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col items-start p-8 mt-10">
        <div className="prose prose-sm md:prose-md lg:prose-lg text-left max-w-screen-lg w-full p-4 sm:p-0">
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
                      <li className="sm:text-lg" key={dutyIndex}>{duty}</li>
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
        <div className="prose prose-sm md:prose-md lg:prose-lg text-right max-w-screen-lg w-full p-4 sm:text-center sm:p-0">
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
      <section className="flex flex-col items-center p-8 mt-10">
        <div className="prose prose-fullwidth prose-sm md:prose-md lg:prose-lg text-center w-full p-4">
          <h2>My World</h2>
          {data?.myWorld ? (
            <div className="flex flex-col gap-20">
              {data.myWorld.map((world, index) => (
                <div
                  className={`flex sm:flex-col ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} gap-40 items-center sm:gap-2`}
                  key={index}
                >
                  <div className={`w-px sm:w-full ${index % 2 === 0 ? "order-1" : "order-2"} flex-grow`}>
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
                  <div className="w-1/3 text-left flex-grow sm:w-full">
                    <h2>{world.category}</h2>
                    <h6>{world.description}</h6>
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
        <div className="prose prose-fullwidth prose-sm md:prose-md lg:prose-lg text-center max-w-screen-lg w-full p-4">
          <h3>Audio-Visual Editing</h3>
          <div className="w-full flex justify-center">
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
