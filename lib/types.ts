export type Contact = {
  id: string;
  label: string;
  link?: string;
};

export type Skill = {
  id: string;
  skill: string;
};

export type Education = {
  id: string;
  schoolName: string;
  degree: string;
  date: string;
  schoolDescr: string;
};

export type WorkExp = {
  id: string;
  companyName: string;
  jobTitle: string;
  date: string;
  workDescr: string;
};

export type Project = {
  id: string;
  projectName: string;
  projectDescr: string;
};

export type Interest = {
  id: string;
  interest: string;
};

export type Resume = {
  name: any;
  job: any;
  [propName: string]: any;
};
