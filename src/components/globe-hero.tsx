"use client";

import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { mockStartups } from "@/lib/mock-data";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

interface GlobeMethods {
  controls: () => { autoRotate: boolean; autoRotateSpeed: number; enableZoom: boolean };
  pointOfView: (pov: { lat: number; lng: number; altitude: number }, ms: number) => void;
}

export default function GlobeHero(): React.ReactElement | null {
  const [mounted, setMounted] = useState<boolean>(false);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const globeRef = useRef<GlobeMethods | null>(null);

  useEffect(() => {
    setMounted(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        () => setUserLocation({ lat: 18.5204, lng: 73.8567 }) 
      );
    }
  }, []);

  useEffect(() => {
    if (mounted && globeRef.current && userLocation) {
      const controls = globeRef.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.3;
      controls.enableZoom = true;
      globeRef.current.pointOfView({ lat: userLocation.lat - 8, lng: userLocation.lng, altitude: 1.8 }, 3000);
    }
  }, [mounted, userLocation]);

  if (!mounted) return null;

  const allPoints = [
    ...mockStartups.map((s) => ({ ...s, isUser: false })),
    ...(userLocation ? [{ id: "user", name: "You are here", sector: "Current Location", lat: userLocation.lat, lng: userLocation.lng, isUser: true }] : []),
  ];

  return (
    // 'pointer-events-auto' explicitly ensures this layer responds to your mouse
    <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden bg-background pointer-events-auto cursor-grab active:cursor-grabbing">
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundColor="rgba(0,0,0,0)"
        htmlElementsData={allPoints}
        htmlLat="lat"
        htmlLng="lng"
        htmlElement={(d: any) => {
          const el = document.createElement("div");
          const color = d.isUser ? "#2DD4A7" : "#FF6B1A"; 
          
          el.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; transform: translate(-50%, -50%); pointer-events: none;">
              <div style="position: relative; display: flex; align-items: center; justify-content: center; width: 24px; height: 24px;">
                ${d.isUser ? `<div style="position: absolute; width: 100%; height: 100%; border-radius: 50%; background-color: ${color}; opacity: 0.6; animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>` : ''}
                <div style="position: relative; width: 12px; height: 12px; border-radius: 50%; background-color: ${color}; box-shadow: 0 0 12px ${color};"></div>
              </div>
              <div style="margin-top: 4px; background: rgba(22, 22, 22, 0.9); backdrop-filter: blur(4px); border: 1px solid #262626; border-radius: 8px; padding: 4px 8px; font-family: sans-serif; font-size: 12px; color: #FFFFFF; white-space: nowrap; font-weight: 600; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.5);">
                ${d.name}
              </div>
            </div>
          `;
          return el;
        }}
      />
      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
}