import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  image: string;
  alt: string;
  type: "Extension" | "Loft" | "Renovation";
  location: string;
  description: string;
  href?: string;
}

const typeColors: Record<string, string> = {
  Extension: "bg-amber text-white",
  Loft: "bg-charcoal text-white",
  Renovation: "bg-mid-grey text-charcoal",
};

export default function ProjectCard({
  image,
  alt,
  type,
  location,
  description,
  href = "/our-work",
}: ProjectCardProps) {
  return (
    <div className="group rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span
          className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full ${typeColors[type]}`}
        >
          {type}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-1.5 text-text-muted text-sm mb-2">
          <span>📍</span>
          <span>{location}</span>
        </div>
        <p className="text-charcoal/80 text-sm leading-relaxed mb-4">
          {description}
        </p>
        <Link
          href={href}
          className="text-amber hover:text-amber-dark text-sm font-semibold inline-flex items-center gap-1 transition-colors"
        >
          View Project →
        </Link>
      </div>
    </div>
  );
}
