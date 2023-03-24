import { v4 as uuidv4 } from "uuid";

export const users = [
  {
    name: "Adam",
    id: uuidv4(),
    job: "",
    age: 25,
    sex: "m",
    weight: 150,
    activityLevel: "high",
    metabolicRate: null,
  },
  {
    name: "Jane",
    id: uuidv4(),
    job: "",
    age: 25,
    sex: "f",
    weight: 140,
    activityLevel: "high",
    metabolicRate: null,
  },
  {
    name: "Mike",
    id: uuidv4(),
    job: "",
    age: 25,
    sex: "m",
    weight: 170,
    activityLevel: "average",
    metabolicRate: null,
  },
  {
    name: "John",
    id: uuidv4(),
    job: "",
    age: 41,
    sex: "m",
    weight: 250,
    activityLevel: "low",
    metabolicRate: null,
  },
  {
    name: "Rachel",
    id: uuidv4(),
    job: "",
    age: 21,
    sex: "f",
    weight: 120,
    activityLevel: "average",
    metabolicRate: null,
  },
  {
    name: "Mitch",
    id: uuidv4(),
    job: "",
    age: 26,
    sex: "m",
    weight: 180,
    activityLevel: "average",
    metabolicRate: null,
  },
];

export type User = {
  name: string;
  id: string;
  job: string;
  age: number;
  sex: string;
  weight: number;
  activityLevel: "low" | "average" | "high";
  metabolicRate: number;
};
