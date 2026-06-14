export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  level: string;
  description: string;
};

export const jobs: Job[] = [
  {
    id: 1,
    title: "UX Designer",
    company: "DCI",
    location: "Berlin",
    level: "Experte",
    description: "Gestalte benutzerfreundliche und moderne digitale Produkte.",
  },
  {
    id: 2,
    title: "Frontend Entwickler",
    company: "Google",
    location: "Hamburg",
    level: "Junior",
    description:
      "Entwickle moderne Benutzeroberflächen mit React und TypeScript.",
  },
  {
    id: 3,
    title: "Backend Entwickler",
    company: "Amazon",
    location: "München",
    level: "Fortgeschritten",
    description: "Entwickle APIs, Datenbanken und serverseitige Anwendungen.",
  },
  {
    id: 4,
    title: "Fullstack Entwickler",
    company: "Microsoft",
    location: "Berlin",
    level: "Senior",
    description:
      "Arbeite sowohl am Frontend als auch am Backend moderner Webanwendungen.",
  },
  {
    id: 5,
    title: "UI Designer",
    company: "Spotify",
    location: "Stockholm",
    level: "Junior",
    description:
      "Entwerfe moderne und ansprechende Benutzeroberflächen für digitale Produkte.",
  },
  {
    id: 6,
    title: "React Entwickler",
    company: "Netflix",
    location: "Amsterdam",
    level: "Fortgeschritten",
    description: "Erstelle performante und moderne Anwendungen mit React.",
  },
];
