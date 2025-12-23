import { useState } from "react";
import { Download, Share2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// Import greeting images
import shravanMaas from "@/assets/greetings/shravan-maas.jpeg";
import saveWater from "@/assets/greetings/save-water.jpeg";
import discountOffer from "@/assets/greetings/discount-offer.jpeg";
import ganeshChaturthi from "@/assets/greetings/ganesh-chaturthi.jpeg";
import tribute from "@/assets/greetings/tribute.jpeg";
import voting from "@/assets/greetings/voting.jpeg";
import newYear from "@/assets/greetings/new-year.jpeg";

const greetingImages = [
  { id: 1, src: ganeshChaturthi, title: "Ganesh Chaturthi", category: "Festival" },
  { id: 2, src: shravanMaas, title: "Happy Shravan Maas", category: "Festival" },
  { id: 3, src: newYear, title: "नववर्ष की शुभकामनाएं", category: "Festival" },
  { id: 4, src: saveWater, title: "Save Water", category: "Social Awareness" },
  { id: 5, src: voting, title: "मतदान अवश्य करें", category: "Social Awareness" },
  { id: 6, src: tribute, title: "Sir Pherozeshah Mehta Ji", category: "Tribute" },
  { id: 7, src: discountOffer, title: "50% Discount Offer", category: "Promotional" },
];

const GreetingsGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleShare = async (imageSrc: string, title: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${title} - SYDNYTECH`,
          text: `Check out this greeting from SYDNYTECH`,
          url: window.location.href,
        });
      } catch (error) {
        toast.info("Sharing cancelled");
      }
    } else {
      // Fallback: Copy URL to clipboard
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  const handleDownload = async (imageSrc: string, title: string) => {
    try {
      const response = await fetch(imageSrc);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${title.replace(/\s+/g, '-').toLowerCase()}-sydnytech.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      toast.success("Image downloaded!");
    } catch (error) {
      toast.error("Failed to download image");
    }
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    const currentIndex = greetingImages.findIndex(img => img.id === selectedImage);
    if (direction === 'prev') {
      const newIndex = currentIndex > 0 ? currentIndex - 1 : greetingImages.length - 1;
      setSelectedImage(greetingImages[newIndex].id);
    } else {
      const newIndex = currentIndex < greetingImages.length - 1 ? currentIndex + 1 : 0;
      setSelectedImage(greetingImages[newIndex].id);
    }
  };

  const selectedImageData = greetingImages.find(img => img.id === selectedImage);

  return (
    <section className="px-4 py-10">
      <div className="max-w-lg mx-auto">
        <h2 className="font-display text-2xl font-bold text-center mb-2">
          Greeting <span className="text-primary">Gallery</span>
        </h2>
        <p className="text-muted-foreground text-center mb-6 text-sm">
          Daily wishes & festival images for your social media
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-3">
          {greetingImages.map((image, index) => (
            <div
              key={image.id}
              className="relative group cursor-pointer animate-fade-in overflow-hidden rounded-xl"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="aspect-square overflow-hidden rounded-xl border border-border/50 bg-card">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-3">
                <div>
                  <span className="text-[10px] text-primary font-medium">{image.category}</span>
                  <h4 className="text-xs font-semibold text-foreground line-clamp-1">{image.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && selectedImageData && (
          <div 
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/80 border border-border/50 flex items-center justify-center text-foreground hover:bg-card transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation buttons */}
            <button 
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 border border-border/50 flex items-center justify-center text-foreground hover:bg-card transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 border border-border/50 flex items-center justify-center text-foreground hover:bg-card transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Image container */}
            <div 
              className="max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="glass-card p-3 overflow-hidden">
                <img
                  src={selectedImageData.src}
                  alt={selectedImageData.title}
                  className="w-full rounded-lg"
                />
                <div className="pt-4 pb-2">
                  <span className="text-xs text-primary font-medium">{selectedImageData.category}</span>
                  <h3 className="font-display font-semibold text-lg mb-4">{selectedImageData.title}</h3>
                  <div className="flex gap-3">
                    <Button 
                      variant="glass" 
                      className="flex-1"
                      onClick={() => handleDownload(selectedImageData.src, selectedImageData.title)}
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                    <Button 
                      variant="hero" 
                      className="flex-1"
                      onClick={() => handleShare(selectedImageData.src, selectedImageData.title)}
                    >
                      <Share2 className="w-4 h-4" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GreetingsGallery;
