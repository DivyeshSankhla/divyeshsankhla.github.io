export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  avatar: string;
  quote: { text: string; author: string };
  about: string;
  cv: { path: string; lastUpdated: string };
}

export interface ExperienceEntry {
  company: string;
  location: string;
  role: string;
  start: string;
  end: string;
  logo?: string;
  highlights: string[];
}

export interface ExperienceData {
  usa: ExperienceEntry[];
  india: ExperienceEntry[];
}

export interface EducationEntry {
  school: string;
  location: string;
  degree: string;
  department?: string;
  start: string;
  end: string;
  details?: string;
  logo?: string;
  links?: { label: string; url: string }[];
}

export interface ProjectEntry {
  title: string;
  org: string;
  tech: string;
  highlights: string[];
  links?: { label: string; url: string }[];
}

export interface ProjectCategory {
  name: string;
  projects: ProjectEntry[];
}

export interface PublicationEntry {
  title: string;
  venue: string;
  date: string;
  status: string;
  link?: string;
}

export interface AwardEntry {
  title: string;
  detail?: string;
  link?: string;
}

export interface VolunteerEntry {
  text: string;
}
