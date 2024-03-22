import ImageSlider from "@/components/layout/gallery/image-slider";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

const images = [
  "/pets/cat.jpg",
  "/pets/dog.jpg",
  "/pets/cat2.jpg",
  "/pets/dog2.jpg",
  "/pets/ferret.jpg",
  "/pets/cat3.jpg",
  "/pets/bunny.jpg",
  "/pets/cat4.jpg",
  "/pets/dog3.jpg",
  "/pets/cat5.jpg",
  "/pets/dog4.jpg",
  "/pets/guinea_pig.jpg",
  "/pets/cat6.jpg",
];

const GalleryPage = () => {
  return (
    <div className="mt-10 mb-40">
      <h1 className="text-center text-4xl mb-10">Gallery</h1>
      <h2 className="text-center text-xl text-slate-500 mb-20">
        Take a look at some of the pets in our gallery!
      </h2>
      <ImageSlider images={images} />
      <ParallaxScroll images={images} className="mt-40" />
    </div>
  );
};

export default GalleryPage;
