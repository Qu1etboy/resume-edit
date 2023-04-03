import { ObjectId } from "bson";

export interface Resume {
  id: string;
  uid: string;
  data: Data;
}

interface Data {
  id: string;
  name: string;
  job: string;
  address: string;
  email: string;
  phone: string;
  contact: Contact[];
  skill: Skill[];
  education: Education[];
  workExp: WorkExp[];
  project: Project[];
  interest: Interest[];

  [key: string]: any;
}

interface Contact {
  id: string;
  label: string;
  link: string;
}

interface Skill {
  id: string;
  skill: string;
}

interface Education {
  id: string;
  schoolName: string;
  degree: string;
  date: string;
  schoolDescr: any;
}

interface WorkExp {
  id: string;
  companyName: string;
  jobTitle: string;
  date: string;
  workDescr: any;
}

interface Project {
  id: string;
  projectName: string;
  projectDescr: any;
}

interface Interest {
  id: string;
  interest: string;
}
s;
