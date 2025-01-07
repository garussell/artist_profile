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

