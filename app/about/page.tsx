"use server";

import Image from 'next/image';
import profilePic from '../../public/profilePic.png'; 
import digitalEarth from '../../public/digitalEarth.jpg';
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
                src={digitalEarth} 
                alt="Digital Earth" 
                className="shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col items-start p-8">
        <div className="prose text-left max-w-screen-lg w-full p-4">
          <h4>Skills</h4>
          {data?.skills ? (
            <div className="flex flex-col">
              {data.skills.map((skill, index) => (
                <div className="flex items-center w-full" key={index}>
                  <ul className="list-none pl-4 m-0">
                    <li>{skill.skillsList}</li>
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <p>No skills found.</p>
          )}
        </div>
        <div className="prose text-left max-w-screen-2xl w-full p-4">
          <div className="flex flex-wrap justify-center">
            {skillsIcons.map((skill, index) => (
              <div key={index} className="m-4 text-center">
                <FontAwesomeIcon icon={skill.icon} size="4x" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
