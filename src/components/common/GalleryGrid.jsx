import { motion } from "framer-motion";

const GalleryGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((img, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`relative overflow-hidden rounded-2xl ${
            index === 0 ? "col-span-2 row-span-2 h-full" : "h-48"
          }`}
        >
          <img
            src={img}
            alt={`PG Gallery ${index}`}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default GalleryGrid;