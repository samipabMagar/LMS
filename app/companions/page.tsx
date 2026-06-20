import React from 'react'
import CompanionCard from '@/components/CompanionCard'

const dummyCompanions = [
  {
    $id: "1",
    id: "1",
    slug: "albert-einstein",
    name: "Albert Einstein",
    topic: "Theory of Relativity",
    subject: "Science" as any, // bypassing enum check for dummy
    duration: 45,
    color: "#E2F0CB",
    bookmarked: false,
  },
  {
    $id: "2",
    id: "2",
    slug: "marie-curie",
    name: "Marie Curie",
    topic: "Radioactivity",
    subject: "Chemistry" as any,
    duration: 30,
    color: "#FFDFD3",
    bookmarked: false,
  },
  {
    $id: "3",
    id: "3",
    slug: "isaac-newton",
    name: "Isaac Newton",
    topic: "Laws of Motion",
    subject: "Physics" as any,
    duration: 60,
    color: "#C1E1C1",
    bookmarked: false,
  },
  {
    $id: "4",
    id: "4",
    slug: "ada-lovelace",
    name: "Ada Lovelace",
    topic: "Computer Programming",
    subject: "Computer Science" as any,
    duration: 40,
    color: "#F1CBFF",
    bookmarked: false,
  },
  {
    $id: "5",
    id: "5",
    slug: "charles-darwin",
    name: "Charles Darwin",
    topic: "Evolutionary Biology",
    subject: "Biology" as any,
    duration: 50,
    color: "#FFCBA4",
    bookmarked: false,
  },
];

const page = () => {
  return (
    <div className="w-full flex flex-col gap-8 pb-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-extrabold tracking-tight">Your AI Companions</h1>
        <p className="text-black/60 font-medium">Chat with historical figures and top experts across different subjects.</p>
      </div>
      <div className="companions-grid gap-6">
        {dummyCompanions.map((companion) => (
          <CompanionCard key={companion.id} {...companion} />
        ))}
      </div>
    </div>
  )
}

export default page