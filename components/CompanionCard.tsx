import Image from "next/image";
import { Clock } from "lucide-react";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
}

const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color,
}: CompanionCardProps) => {
  return (
    <article className="companion-card" style={{ backgroundColor: color }}>
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <div className="subject-badge w-fit">{subject}</div>
          <div className="mt-2 text-black">
            <h3 className="text-2xl font-bold tracking-tight">{name}</h3>
            <p className="text-sm font-medium opacity-80">{topic}</p>
          </div>
        </div>
        <button className="companion-bookmark shrink-0 transition-transform hover:scale-105 active:scale-95">
          <Image
            src="/icons/bookmark.svg"
            alt="Bookmark"
            width={12.5}
            height={15}
          />
        </button>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/5 text-black text-xs font-semibold backdrop-blur-sm border border-black/10">
          <Clock className="w-3.5 h-3.5" />
          <span>{duration} mins</span>
        </div>
        <button className="px-4 py-2 border border-black rounded-full text-sm font-bold bg-white/40 hover:bg-white text-black transition-colors backdrop-blur-sm cursor-pointer">
          Chat Now
        </button>
      </div>
    </article>
  );
};

export default CompanionCard;
