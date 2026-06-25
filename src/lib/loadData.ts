import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { load } from 'js-yaml';
import type {
  AwardEntry,
  EducationEntry,
  ExperienceData,
  Profile,
  ProjectCategory,
  PublicationEntry,
  VolunteerEntry,
} from './types';

const dataDir = join(process.cwd(), 'src/data');

function loadYaml<T>(filename: string): T {
  const raw = readFileSync(join(dataDir, filename), 'utf8');
  return load(raw) as T;
}

export const profile = loadYaml<Profile>('profile.yml');
export const experience = loadYaml<ExperienceData>('experience.yml');
export const education = loadYaml<EducationEntry[]>('education.yml');
export const projects = loadYaml<ProjectCategory[]>('projects.yml');
export const publications = loadYaml<PublicationEntry[]>('publications.yml');
export const awards = loadYaml<AwardEntry[]>('awards.yml');
export const volunteer = loadYaml<VolunteerEntry>('volunteer.yml');
