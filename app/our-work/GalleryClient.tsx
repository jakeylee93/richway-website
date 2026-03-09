"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type ProjectType = "All" | "Extension" | "Loft" | "Renovation";

interface Project {
  id: number;
  image: string;
  alt: string;
  type: "Extension" | "Loft" | "Renovation";
  location: string;
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80",
    alt: "Double storey rear extension",
    type: "Extension",
    location: "Chingford, London",
    title: "Double-Storey Rear Extension",
    description: "A stunning double-storey rear extension adding a large kitchen-diner on the ground floor and master bedroom with en-suite above. 65m² of additional space.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&q=80",
    alt: "Dormer loft conversion bedroom",
    type: "Loft",
    location: "Epping, Essex",
    title: "Full Dormer Loft Conversion",
    description: "Master bedroom suite with walk-in wardrobe and en-suite bathroom, created from a previously unused loft space.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    alt: "Open plan kitchen renovation",
    type: "Renovation",
    location: "Waltham Forest, London",
    title: "Open-Plan Kitchen Renovation",
    description: "Complete ground-floor renovation creating a light-filled open-plan kitchen, dining, and living space with bi-fold doors.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    alt: "Single storey rear extension glass",
    type: "Extension",
    location: "Woodford Green, Essex",
    title: "Single-Storey Glass Extension",
    description: "Contemporary single-storey extension with a structural glass roof, flooding the kitchen with natural light.",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800&q=80",
    alt: "Hip to gable loft conversion",
    type: "Loft",
    location: "Chingford, London",
    title: "Hip-to-Gable Conversion",
    description: "Two-bedroom loft conversion on a semi-detached property, with hip-to-gable and rear dormer.",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    alt: "Luxury bathroom renovation",
    type: "Renovation",
    location: "Wanstead, London",
    title: "Luxury Master Bathroom",
    description: "Freestanding bath, walk-in rainfall shower, and marble tiling. A spa-like retreat in a family home.",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    alt: "Side return kitchen extension",
    type: "Extension",
    location: "Leytonstone, London",
    title: "Side Return Extension",
    description: "Victorian terraced house transformed with a side return extension, widening the kitchen by 2.8m.",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=800&q=80",
    alt: "Velux rooflight loft conversion",
    type: "Loft",
    location: "Redbridge, London",
    title: "Velux Rooflight Conversion",
    description: "Cost-effective Velux conversion turning an empty loft into a bright home office and guest bedroom.",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    alt: "Full house renovation",
    type: "Renovation",
    location: "Loughton, Essex",
    title: "Whole-House Renovation",
    description: "Top-to-bottom transformation of a 4-bedroom detached home — new kitchen, bathrooms, flooring, and decoration.",
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    alt: "Wraparound house extension",
    type: "Extension",
    location: "Buckhurst Hill, Essex",
    title: "Wraparound Extension",
    description: "Rear and side return combined to create a spectacular wraparound extension, adding 80m² to the ground floor.",
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    alt: "Mansard loft conversion",
    type: "Loft",
    location: "Highams Park, London",
    title: "Mansard Loft Conversion",
    description: "Full mansard conversion creating two large bedrooms and a bathroom. Maximum space, minimum disruption.",
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800&q=80",
    alt: "Kitchen diner renovation",
    type: "Renovation",
    location: "Theydon Bois, Essex",
    title: "Kitchen-Diner Transformation",
    description: "Opening up a Victorian home to create a modern kitchen-diner with structural steel, new flooring, and bespoke cabinetry.",
  },
];

const filterButtons: ProjectType[] = ["All", "Extension", "Loft", "Renovation"];

const typeColors: Record<string, string> = {
  Extension: "bg-amber text-white",
  Loft: "bg-charcoal text-white",
  Renovation: "bg-mid-grey text-charcoal",
};

export default function GalleryClient() {
  const [filter, setFilter] = useState<ProjectType>("All");
  const [modal, setModal] = useState<Project | null>(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.type === filter);

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {filterButtons.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
              filter === f
                ? "bg-amber text-white shadow-sm"
                : "bg-white border border-mid-grey text-charcoal hover:border-amber hover:text-amber"
            }`}
          >
            {f === "All" ? `All Projects (${projects.length})` : `${f}s (${projects.filter((p) => p.type === f).length})`}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setModal(project)}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${typeColors[project.type]}`}>
                  {project.type}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-charcoal mb-1" style={{ fontFamily: "var(--font-serif)" }}>
                  {project.title}
                </h3>
                <p className="text-charcoal/50 text-sm flex items-center gap-1">
                  <span>📍</span> {project.location}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-sm"
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-72">
                <Image
                  src={modal.image}
                  alt={modal.alt}
                  fill
                  className="object-cover"
                  sizes="672px"
                />
                <button
                  onClick={() => setModal(null)}
                  className="absolute top-4 right-4 w-9 h-9 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-charcoal text-lg font-bold transition-colors"
                  aria-label="Close"
                >
                  ×
                </button>
                <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full ${typeColors[modal.type]}`}>
                  {modal.type}
                </span>
              </div>
              <div className="p-8">
                <h2 className="text-2xl text-charcoal mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                  {modal.title}
                </h2>
                <p className="text-charcoal/50 text-sm flex items-center gap-1 mb-4">
                  <span>📍</span> {modal.location}
                </p>
                <p className="text-charcoal/70 leading-relaxed mb-6">{modal.description}</p>
                <a
                  href="/quote"
                  className="inline-block bg-amber hover:bg-amber-dark text-white font-semibold px-6 py-3 rounded transition-colors"
                >
                  Start a Similar Project
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
