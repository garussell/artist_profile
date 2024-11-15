import Image from 'next/image';
import profilePic from '../../public/profilePic.png'; // Adjust the path to your image file

export default function About() {
  return (
    <section className="min-h-screen flex flex-col">
      <div className="mx-auto p-4 w-full">
        <div className="prose w-full max-w-none grid grid-cols-1 md:grid-cols-2 gap-100">
          <div className="flex flex-col justify-center">
            <h3 className="italic mb-4">My name is</h3>
            <h1 className="mb-6">
              Gary Allen
            </h1>
            <h1 className="mb-6">
              Russell Jr
            </h1>
            <h3 className="italic">
              My friends call me Allen
            </h3>
          </div>
          <div className="flex">
            <Image 
              src={profilePic} 
              alt="Allen Russell" 
              className=""
              // width={500}
              // height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
