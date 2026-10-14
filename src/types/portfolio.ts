export interface Project {
  id: string;
  title: string;
  category: 'civic' | 'residential' | 'facades' | 'experimental';
  categoryLabel: string;
  year: number;
  location: string;
  area: string;
  materials: string[];
  client: string;
  image: string;
  bentoClass: string;
  summary: string;
  challenge: string;
  solution: string;
  exif: {
    aperture: string;
    focalLength: string;
    shutter: string;
    iso: string;
  };
  metrics?: { label: string; value: string }[];
}

export interface ArchitecturePrinciple {
  number: string;
  title: string;
  tagline: string;
  description: string;
  keyAspects: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  education: string;
  focus: string;
  avatar: string;
  selectedWork: string;
}

export interface RecognitionItem {
  year: number;
  award: string;
  organization: string;
  project: string;
  type: string;
}
