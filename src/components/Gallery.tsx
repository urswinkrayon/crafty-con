import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Helper
const getAssetUrl = (folder: string, name: string) => {
  return new URL(`../assets/${folder}/${name}`, import.meta.url).href;
};

// ----------------- Types -----------------

interface GalleryItem {
  src: string;
  label: string;
}

interface VideoItem {
  src: string;
  label: string;
}

type ViewState =
  | "categories"
  | "blueprints"
  | "exterior"
  | "interior"
  | "liveFootage"
  | "aluminium"
  | "doors"
  | "roofing"
  | "tile"
  | "window"
  | "woodwork";

// ----------------- Image Loaders -----------------
// ⚠️ Change the number to match how many images are inside each folder

const blueprintImages: GalleryItem[] = Array.from({ length: 29 }, (_, i) => ({
  src: getAssetUrl("Blueprints", `bp${i + 1}.jpg`),
  label: `Blueprint ${i + 1}`,
}));

const exteriorImages: GalleryItem[] = Array.from({ length: 16 }, (_, i) => ({
  src: getAssetUrl("Exterior", `ew${i + 1}.jpg`),
  label: `Exterior ${i + 1}`,
}));

const interiorImages: GalleryItem[] = Array.from({ length: 26 }, (_, i) => ({
  src: getAssetUrl("Interior", `iw${i + 1}.jpg`),
  label: `Interior ${i + 1}`,
}));

const aluminiumImages: GalleryItem[] = Array.from({ length: 7 }, (_, i) => ({
  src: getAssetUrl("Aluminium", `al${i + 1}.jpg`),
  label: `Aluminium ${i + 1}`,
}));

// NEW CATEGORIES (Update counts to match folders)

const doorImages: GalleryItem[] = Array.from({ length: 8 }, (_, i) => ({
  src: getAssetUrl("doors", `door${i + 1}.jpg`),
  label: `Door ${i + 1}`,
}));

const roofingImages: GalleryItem[] = Array.from({ length: 6 }, (_, i) => ({
  src: getAssetUrl("roofing", `roof${i + 1}.jpg`),
  label: `Roofing ${i + 1}`,
}));

const tileImages: GalleryItem[] = Array.from({ length: 6 }, (_, i) => ({
  src: getAssetUrl("tile", `tile${i + 1}.jpg`),
  label: `Tile ${i + 1}`,
}));

const windowImages: GalleryItem[] = Array.from({ length: 6 }, (_, i) => ({
  src: getAssetUrl("window", `win${i + 1}.jpg`),
  label: `Window ${i + 1}`,
}));

const woodworkImages: GalleryItem[] = Array.from({ length: 6 }, (_, i) => ({
  src: getAssetUrl("woodwork", `wood${i + 1}.jpg`),
  label: `Woodwork ${i + 1}`,
}));

// ----------------- Videos -----------------

const liveFootageVideos: VideoItem[] = [
  {
    src: getAssetUrl("LiveFootage", "video1.mp4"),
    label: "Live Footage 1",
  },
  {
    src: getAssetUrl("LiveFootage", "video2.mp4"),
    label: "Live Footage 2",
  },
];

// ----------------- Titles -----------------

const titles: Record<ViewState, string> = {
  categories: "Our Work",
  blueprints: "Blueprint Designs",
  exterior: "Exterior Work",
  interior: "Interior Work",
  liveFootage: "Live Project Footage",
  aluminium: "Aluminium Work",
  doors: "Door Installations",
  roofing: "Roofing Work",
  tile: "Tile Work",
  window: "Window Installations",
  woodwork: "Woodwork",
};

// ----------------- Component -----------------

const Gallery = () => {
  const [view, setView] = useState<ViewState>("categories");

  const RenderGrid = ({ images }: { images: GalleryItem[] }) => (
    <motion.div
      key="grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full"
    >
      <button
        onClick={() => setView("categories")}
        className="mb-8 text-primary font-semibold hover:underline"
      >
        ← Back to Categories
      </button>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl break-inside-avoid shadow-sm hover:shadow-md"
          >
            <img
              src={img.src}
              alt={img.label}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );

  const RenderVideoGrid = ({ videos }: { videos: VideoItem[] }) => (
    <RenderGrid
      images={videos.map((v) => ({ src: v.src, label: v.label }))}
    />
  );

  return (
    <section className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            {titles[view]}
          </h2>
        </div>

        <AnimatePresence mode="wait">
          {view === "categories" ? (
            <motion.div
              key="cats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              <CategoryCard title="Blueprints" img={blueprintImages[0].src} count={blueprintImages.length} onClick={() => setView("blueprints")} />
              <CategoryCard title="Exterior" img={exteriorImages[0].src} count={exteriorImages.length} onClick={() => setView("exterior")} />
              <CategoryCard title="Interior" img={interiorImages[0].src} count={interiorImages.length} onClick={() => setView("interior")} />
              <CategoryCard title="Aluminium" img={aluminiumImages[0].src} count={aluminiumImages.length} onClick={() => setView("aluminium")} />
              <CategoryCard title="Doors" img={doorImages[0].src} count={doorImages.length} onClick={() => setView("doors")} />
              <CategoryCard title="Roofing" img={roofingImages[0].src} count={roofingImages.length} onClick={() => setView("roofing")} />
              <CategoryCard title="Tile" img={tileImages[0].src} count={tileImages.length} onClick={() => setView("tile")} />
              <CategoryCard title="Windows" img={windowImages[0].src} count={windowImages.length} onClick={() => setView("window")} />
              <CategoryCard title="Woodwork" img={woodworkImages[0].src} count={woodworkImages.length} onClick={() => setView("woodwork")} />
              <CategoryCard title="Live Footage" img={getAssetUrl("LiveFootage", "thumb.png")} count={liveFootageVideos.length} onClick={() => setView("liveFootage")} />
            </motion.div>
          ) : (
            <>
              {view === "blueprints" && <RenderGrid images={blueprintImages} />}
              {view === "exterior" && <RenderGrid images={exteriorImages} />}
              {view === "interior" && <RenderGrid images={interiorImages} />}
              {view === "aluminium" && <RenderGrid images={aluminiumImages} />}
              {view === "doors" && <RenderGrid images={doorImages} />}
              {view === "roofing" && <RenderGrid images={roofingImages} />}
              {view === "tile" && <RenderGrid images={tileImages} />}
              {view === "window" && <RenderGrid images={windowImages} />}
              {view === "woodwork" && <RenderGrid images={woodworkImages} />}
              {view === "liveFootage" && <RenderVideoGrid videos={liveFootageVideos} />}
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// ----------------- Category Card -----------------

const CategoryCard = ({
  title,
  img,
  count,
  onClick,
}: {
  title: string;
  img: string;
  count: number;
  onClick: () => void;
}) => (
  <div
    onClick={onClick}
    className="group relative h-[350px] overflow-hidden rounded-2xl cursor-pointer shadow-xl"
  >
    <img
      src={img}
      alt={title}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
      <h3 className="text-white text-xl font-bold">{title}</h3>
      <p className="text-white/70 text-sm">{count} Projects</p>
    </div>
  </div>
);

export default Gallery;