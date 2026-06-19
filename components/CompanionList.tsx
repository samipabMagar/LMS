import React from "react";
import CompanionCard from "./CompanionCard";

export interface CompanionData {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
}

interface CompanionListProps {
  companions: CompanionData[];
}

const CompanionList = ({ companions }: CompanionListProps) => {
  if (!companions || companions.length === 0) {
    return (
      <div className="w-full text-center py-10 text-gray-500">
        No companions found.
      </div>
    );
  }

  return (
    <div className="companions-grid gap-6">
      {companions.map((companion) => (
        <CompanionCard key={companion.id} {...companion} />
      ))}
    </div>
  );
};

export default CompanionList;