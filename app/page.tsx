import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the brain"
          subject="science"
          duration={45}
          color="#ffda6e"
        />
        {/* <CompanionCard />
        <CompanionCard />
        <CompanionCard /> */}
      </section>
      <section className="home-section">
        {/* <CompanionList /> */}
        <CTA />
      </section>
    </main>
  );
};

export default Page;
