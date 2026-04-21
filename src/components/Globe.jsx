"use client";
import React from "react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";

const World = dynamic(() => import("../../ui/globe").then((m) => m.World), {
  ssr: false,
});

export function GlobeDemo() {
  const globeConfig = {
    pointSize: 2,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#030412",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1200,
    arcLength: 0.9,
    rings: 0,
    maxRings: 0,
    initialPosition: { lat: 80, lng: 40 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
  {
    order: 1,
    startLat: 18.9582,
    startLng: 72.8320,
    endLat: 51.5074, // London
    endLng: -0.1278,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: 18.9582,
    startLng: 72.8320,
    endLat: 40.7128, // New York
    endLng: -74.0060,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: 18.9582,
    startLng: 72.8320,
    endLat: 35.6895, // Tokyo
    endLng: 139.6917,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: 18.9582,
    startLng: 72.8320,
    endLat: -33.8688, // Sydney
    endLng: 151.2093,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 18.9582,
    startLng: 72.8320,
    endLat: 48.8566, // Paris
    endLng: 2.3522,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: 18.9582,
    startLng: 72.8320,
    endLat: 55.7558, // Moscow
    endLng: 37.6173,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: 18.9582,
    startLng: 72.8320,
    endLat: 52.5200, // Berlin
    endLng: 13.4050,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: 18.9582,
    startLng: 72.8320,
    endLat: 1.3521, // Singapore
    endLng: 103.8198,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: 18.9582,
    startLng: 72.8320,
    endLat: 28.6139, // Delhi
    endLng: 77.2090,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 12,
    startLat: 18.9582,
    startLng: 72.8320,
    endLat: -23.5505, // São Paulo
    endLng: -46.6333,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 13,
    startLat: 18.9582,
    startLng: 72.8320,
    endLat: -34.6037, // Buenos Aires
    endLng: -58.3816,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 14,
    startLat: 18.9582,
    startLng: 72.8320,
    endLat: 30.0444, // Cairo
    endLng: 31.2357,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 15,
    startLat: 18.9582,
    startLng: 72.8320,
    endLat: -1.2921, // Nairobi
    endLng: 36.8219,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 16,
    startLat: 18.9582,
    startLng: 72.8320,
    endLat: 41.9028, // Rome
    endLng: 12.4964,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 17,
    startLat: 18.9582,
    startLng: 72.8320,
    endLat: 37.7749, // San Francisco
    endLng: -122.4194,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 18,
    startLat: 18.9582,
    startLng: 72.8320,
    endLat: 43.6532, // Toronto
    endLng: -79.3832,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 19,
    startLat: 18.9582,
    startLng: 72.8320,
    endLat: 25.276987, // Dubai
    endLng: 55.296249,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 20,
    startLat: 18.9582,
    startLng: 72.8320,
    endLat: 13.7563, // Bangkok
    endLng: 100.5018, 
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  
];

  return (
    <div
      className="flex flex-row items-center justify-center py-20 h-screen md:h-auto bg-nightfury relative w-full pb-32 md:pb-0">
      <div
        className="max-w-7xl mx-auto w-full relative overflow-x-clip md:overflow-x-visible h-full md:h-[40rem] px-4 max-h-[30rem]">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div">
          <h2
            className="text-center text-3xl md:text-6xl font-bold text-white">
            Based in Mumbai, India
          </h2>
          <p
            className="text-center text-2xl md:text-4xl font-normal text-neutral-200 max-w-md mt-5 mx-auto">
            Open to work worldwide
          </p>
        </motion.div>
        <div
          className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent to-nightfury  z-40" />
        <div className="absolute w-full mt-10 md:mt-20 -bottom-10 md:-bottom-20 h-72 md:h-full z-10 cursor-grab active:cursor-grabbing">
  <World data={sampleArcs} globeConfig={globeConfig} />
</div>
      </div>
    </div>
  );
}
