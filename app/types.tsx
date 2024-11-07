import { TypedObject } from "sanity";

// types.ts
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

export interface Services {
  _id: string;
  service: string;
  price: string;
}

export interface Data {
  roles: Role[];
  careerSummaries: CareerSummary[];
  traits: Traits[];
  offerings: Offerings[];
  services: Services[];
}