
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

const ImageModal = ({ isOpen, onClose, imageSrc, imageAlt }: ImageModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] w-fit h-fit p-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-contain max-h-[85vh]"
          onClick={(e) => e.stopPropagation()}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
