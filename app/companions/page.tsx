import React from 'react'
import CompanionList, { CompanionData } from '@/components/CompanionList'

const dummyCompanions: CompanionData[] = [
  {
    id: "1",
    name: "Albert Einstein",
    topic: "Theory of Relativity",
    subject: "Physics",
    duration: 45,
    color: "#E2F0CB",
  },
  {
    id: "2",
    name: "Marie Curie",
    topic: "Radioactivity",
    subject: "Chemistry",
    duration: 30,
    color: "#FFDFD3",
  },
  {
    id: "3",
    name: "Isaac Newton",
    topic: "Laws of Motion",
    subject: "Physics",
    duration: 60,
    color: "#C1E1C1",
  },
  {
    id: "4",
    name: "Ada Lovelace",
    topic: "Computer Programming",
    subject: "Computer Science",
    duration: 40,
    color: "#F1CBFF",
  },
  {
    id: "5",
    name: "Charles Darwin",
    topic: "Evolutionary Biology",
    subject: "Biology",
    duration: 50,
    color: "#FFCBA4",
  },
];

const page = () => {
  return (
    <div className="w-full flex flex-col gap-8 pb-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-extrabold tracking-tight">Your AI Companions</h1>
        <p className="text-black/60 font-medium">Chat with historical figures and top experts across different subjects.</p>
      </div>
      <CompanionList companions={dummyCompanions} />
    </div>
  )
}

export default page