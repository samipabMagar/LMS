import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { recentSessions } from "@/constants";
import React from "react";

const popularCompanions = [
  {
    id: "1",
    name: "Neura the Brainy Explorer",
    topic: "Neural Network of the brain",
    subject: "Science",
    duration: 45,
    color: "#ffda6e",
    slug: "neura-the-brainy-explorer"
  },
  {
    id: "2",
    slug: "marie-curie",
    name: "Marie Curie",
    topic: "Radioactivity",
    subject: "Chemistry",
    duration: 30,
    color: "#FFDFD3",
  },
  {
    id: "3",
    slug: "isaac-newton",
    name: "Isaac Newton",
    topic: "Laws of Motion",
    subject: "Physics",
    duration: 60,
    color: "#C1E1C1",
  },
];

const Page = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-6">Popular Companions</h1>
      <section className="companions-grid gap-6">
        {popularCompanions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
          />
        ))}
      </section>
      
      <section className="home-section mt-12">
        <CompanionList title="Recently completed sessions" companions={recentSessions} classNames="w-2/3 max-lg:w-full" />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
