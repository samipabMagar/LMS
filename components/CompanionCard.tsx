import Image from "next/image";
import { Clock } from "lucide-react";
import Link from "next/link";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
  slug: string;
}

const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color,
  slug,
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
        <button className="companion-bookmark  transition-transform hover:scale-105 active:scale-95">
          <Image
            src="/icons/bookmark.svg"
            alt="Bookmark"
            width={12.5}
            height={15}
          />
        </button>
      </div>
      <div className="mt-6 flex flex-col gap-4">
        <div className="flex items-center gap-1.5 text-black text-xs font-semibold">
          <Clock className="w-4 h-4" />
          <span>{duration} mins</span>
        </div>
        <Link href={`/companions/${slug}`} className="w-full">
          <button className="btn-primary w-full justify-center">
            Launch Lesson
          </button>
        </Link>
      </div>
    </article>
  );
};

export default CompanionCard;
