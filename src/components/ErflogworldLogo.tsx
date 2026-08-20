import React, { useState, useEffect } from 'react';

interface ErflogworldLogoProps {
  className?: string;
  isDarkBackground?: boolean;
}

export const CLOUDINARY_LOGO_URL = "https://res.cloudinary.com/gxlvsmbr/image/upload/v1787222757/ChatGPT_Image_Aug_20_2026_04_06_50_PM.png";

// In-memory cache for processed transparent trimmed logo data URLs
let cachedDarkLogo: string | null = null;
let cachedLightLogo: string | null = null;

export const ErflogworldLogo: React.FC<ErflogworldLogoProps> = ({
  className = "h-7 sm:h-8 w-auto",
  isDarkBackground = false,
}) => {
  const [processedUrl, setProcessedUrl] = useState<string | null>(
    isDarkBackground ? cachedLightLogo : cachedDarkLogo
  );

  useEffect(() => {
    // If already cached, use cached version
    if (isDarkBackground && cachedLightLogo) {
      setProcessedUrl(cachedLightLogo);
      return;
    }
    if (!isDarkBackground && cachedDarkLogo) {
      setProcessedUrl(cachedDarkLogo);
      return;
    }

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = CLOUDINARY_LOGO_URL;

    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) return;

        canvas.width = img.naturalWidth || img.width;
        canvas.height = img.naturalHeight || img.height;
        ctx.drawImage(img, 0, 0);

        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;

        let minX = canvas.width;
        let minY = canvas.height;
        let maxX = 0;
        let maxY = 0;

        // Process pixels: remove white/light background and calculate bounding box
        for (let y = 0; y < canvas.height; y++) {
          for (let x = 0; x < canvas.width; x++) {
            const idx = (y * canvas.width + x) * 4;
            const r = data[idx];
            const g = data[idx + 1];
            const b = data[idx + 2];

            // If pixel is near-white (background)
            const brightness = (r + g + b) / 3;
            if (brightness > 230 && r > 210 && g > 210 && b > 210) {
              data[idx + 3] = 0; // Transparent
            } else {
              // Smooth edge anti-aliasing
              if (brightness > 180) {
                const factor = (230 - brightness) / 50;
                data[idx + 3] = Math.min(255, Math.floor(data[idx + 3] * Math.max(0, factor)));
              }
              // Track bounding box of visible logo text
              if (data[idx + 3] > 20) {
                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;
              }
            }
          }
        }

        ctx.putImageData(imgData, 0, 0);

        // Crop tightly around the logo without large white empty margins
        if (maxX > minX && maxY > minY) {
          const pad = 10;
          const cropX = Math.max(0, minX - pad);
          const cropY = Math.max(0, minY - pad);
          const cropW = Math.min(canvas.width - cropX, (maxX - minX) + pad * 2);
          const cropH = Math.min(canvas.height - cropY, (maxY - minY) + pad * 2);

          const cropCanvas = document.createElement("canvas");
          cropCanvas.width = cropW;
          cropCanvas.height = cropH;
          const cropCtx = cropCanvas.getContext("2d");
          if (cropCtx) {
            cropCtx.drawImage(canvas, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);
            const darkUrl = cropCanvas.toDataURL("image/png");
            cachedDarkLogo = darkUrl;

            // Generate inverted pure white logo for dark background
            const whiteCanvas = document.createElement("canvas");
            whiteCanvas.width = cropW;
            whiteCanvas.height = cropH;
            const whiteCtx = whiteCanvas.getContext("2d");
            if (whiteCtx) {
              whiteCtx.drawImage(cropCanvas, 0, 0);
              whiteCtx.globalCompositeOperation = "source-in";
              whiteCtx.fillStyle = "#FFFFFF";
              whiteCtx.fillRect(0, 0, cropW, cropH);
              const lightUrl = whiteCanvas.toDataURL("image/png");
              cachedLightLogo = lightUrl;

              setProcessedUrl(isDarkBackground ? lightUrl : darkUrl);
              return;
            }

            setProcessedUrl(isDarkBackground ? null : darkUrl);
          }
        }
      } catch {
        // Fallback to CSS mix-blend if CORS restriction occurs
      }
    };
  }, [isDarkBackground]);

  // If processed transparent & trimmed image is available
  if (processedUrl) {
    return (
      <div className={`inline-flex items-center select-none bg-transparent ${className}`}>
        <img
          src={processedUrl}
          alt="ERFLOGWORLD"
          className="h-full w-auto object-contain max-h-8 sm:max-h-9 transition-all duration-300 drop-shadow-none"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Fallback while loading or if canvas fails: direct image with CSS background blending & auto-scaling
  return (
    <div className={`inline-flex items-center select-none bg-transparent overflow-hidden ${className}`}>
      <img
        src={CLOUDINARY_LOGO_URL}
        alt="ERFLOGWORLD"
        className={`h-full w-auto object-contain max-h-8 sm:max-h-9 transition-all duration-300 ${
          isDarkBackground
            ? "brightness-0 invert mix-blend-screen"
            : "mix-blend-multiply"
        }`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
