import { TypedObject } from "sanity";

export interface Role {
  _id: string;
  title: string;
  subtitle: string;
}

export interface CareerSummary {
  _id: string;
  content: { children: { text: string }[] }[];
}

export interface Traits {
  _id: string;
  trait: string;
}

export interface Offerings {
  _id: string;
  title: string;
  content: TypedObject[];
}

export interface Featured {
  _id: string;
  title: string;
  image: string;
}

export interface Services {
  _id: string;
  service: string;
  price: string;
}

export interface ServicesProps {
  services: Services[];
}

interface TextBlock {
  _key: string;
  children: { text: string }[];
}

export interface CurriculumVitae {
  _id: string;
  intro: TextBlock[];
  skills: {
    skillsList: string;
  }[];  
  experiences: {
    company: string;
    jobTitle: string;
    datesWorked: string;
    duties: string[];
  }[];  
  education: {
    schoolName: string;
    degree: string;
  }[];  
  myWorld: {
    category: string;
    description: string;
    images: { asset: { _ref: string } }[];  
  }[];  
}

export interface BlogPost {
  _id: string;
  title: string;
  publishedAt: string;
  excerpt: string;
  content: TypedObject[];
  slug: {
    current: string;
  };
}

interface Params {
  slug: string;
}

export interface BlogContentProps {
  params: Params;
}

export interface ProfessionalProject {
  _id: string;
  name: string;
  description: string;
  goals: Array<{ _key: string; _type: string; children: Array<{ _key: string; _type: string; text: string }> }>; 
  technologies: Array<{ _key: string; _type: string; children: Array<{ _key: string; _type: string; text: string }> }>;  
  link: string;
  heroImage: string;
  secondaryImage?: string; 
}

export interface PersonalProject {
  _id: string;
  name: string;
  description: string;
  goals: Array<{ _key: string; _type: string; children: Array<{ _key: string; _type: string; text: string }> }>; 
  technologies: Array<{ _key: string; _type: string; children: Array<{ _key: string; _type: string; text: string }> }>; 
  link: string;
  heroImage: string;
  secondaryImage?: string; 
}

export interface TuringProject {
  _id: string;
  name: string;
  description: string;
  goals: Array<{ _key: string; _type: string; children: Array<{ _key: string; _type: string; text: string }> }>; 
  technologies: Array<{ _key: string; _type: string; children: Array<{ _key: string; _type: string; text: string }> }>; 
  link: string;
  heroImage: string;
  secondaryImage?: string; 
}

export interface Data {
  roles: Role[];
  careerSummaries: CareerSummary[];
  traits: Traits[];
  offerings: Offerings[];
  featured: Featured[];
  services: Services[];
}

