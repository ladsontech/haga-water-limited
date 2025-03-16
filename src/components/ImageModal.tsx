
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import { ZoomIn, ZoomOut, X } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

const ImageModal = ({ isOpen, onClose, imageSrc, imageAlt }: ImageModalProps) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [loading, setLoading] = useState(true);
  
  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3));
  };
  
  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
  };
  
  const handleReset = () => {
    setZoomLevel(1);
  };

  const handleImageLoad = () => {
    setLoading(false);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) {
        setZoomLevel(1);
        onClose();
      }
    }}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 overflow-hidden bg-black/90 border-none sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vw]">
        <div className="relative w-full h-full">
          {/* Image container */}
          <div className="overflow-auto max-h-[90vh] flex items-center justify-center p-4">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <img
              src={imageSrc}
              alt={imageAlt}
              className="transition-transform duration-200 ease-in-out object-contain"
              style={{ transform: `scale(${zoomLevel})` }}
              onClick={(e) => e.stopPropagation()}
              onLoad={handleImageLoad}
              loading="lazy"
              width="800"
              height="600"
            />
          </div>
          
          {/* Image caption for SEO */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-center">
            <p className="text-sm">{imageAlt}</p>
          </div>
          
          {/* Controls overlay */}
          <div className="absolute right-4 top-4 flex gap-2 z-10">
            <button
              onClick={handleZoomIn}
              className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 rounded-full p-2 transition-colors"
              aria-label="Zoom in"
            >
              <ZoomIn size={20} />
            </button>
            <button
              onClick={handleZoomOut}
              className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 rounded-full p-2 transition-colors"
              aria-label="Zoom out"
            >
              <ZoomOut size={20} />
            </button>
            <button
              onClick={handleReset}
              className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 rounded-full p-2 transition-colors"
              aria-label="Reset zoom"
            >
              <span className="text-sm font-medium">100%</span>
            </button>
            <button
              onClick={onClose}
              className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 rounded-full p-2 transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
