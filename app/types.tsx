import { TypedObject } from "sanity";

export interface Role {
  _id: string;
  title: string;
  subtitle: string;
}

export interface ProfileSummary {
  _id: string;
  // content: Array<{
  //   [x: string]: string | { text: string }[];
  //   children: { text: string }[];
  // }>;
  content: TypedObject[];
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
  video: string;
}

export interface BlogContentProps {
  params: {
    slug: string;
  };
}

export interface MusicProject {
  _id: string;
  name: string;
  description: string;
  video: string;
  image: string;
  slug: {
    current: string;
  };
}

export interface HomepageData {
  roles: Role[];
  profileSummary: ProfileSummary[];
  traits: Traits[];
  offerings: Offerings[];
  featured: Featured[];
  services: Services[];
}

