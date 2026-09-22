"use client";

import React, { useState } from "react";
import Link from "next/link";
import Map, { Marker } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { mockStartups, type MockStartup } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { MapPin, X, BadgeCheck } from "lucide-react";

export default function MapPage(): React.ReactElement {
  const [selectedStartup, setSelectedStartup] = useState<MockStartup | null>(null);

  return (
    <main className="flex h-screen flex-col bg-background overflow-hidden">
      <header className="z-10 flex h-16 shrink-0 items-center justify-between border-b border-border bg-card px-6 shadow-sm">
        <Link href="/" className="text-xl font-bold text-white hover:text-primary transition-colors">
          Skillory <span className="text-primary">Map</span>
        </Link>
        <div className="text-sm font-medium text-muted-foreground">Showing Pune (Mock Data)</div>
      </header>

      {/* Map Canvas - No filters, pure bright colors */}
      <div className="relative flex-1 bg-white">
        <Map
          initialViewState={{
            longitude: 73.8567,
            latitude: 18.5204,
            zoom: 12,
          }}
          mapStyle={{
            version: 8,
            sources: {
              "osm-colorful": {
                type: "raster",
                tiles: [
                  "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                ],
                tileSize: 256,
                attribution: '&copy; OpenStreetMap contributors'
              }
            },
            layers: [
              {
                id: "osm-colorful-layer",
                type: "raster",
                source: "osm-colorful",
                minzoom: 0,
                maxzoom: 19
              }
            ]
          }}
          interactive={true}
        >
          {/* Markers */}
          {mockStartups.map((startup) => (
            <Marker
              key={startup.id}
              longitude={startup.lng}
              latitude={startup.lat}
              anchor="bottom"
              onClick={(e) => {
                e.originalEvent.stopPropagation();
                setSelectedStartup(startup);
              }}
            >
              <div className="group cursor-pointer flex flex-col items-center">
                <div className="rounded-full bg-primary p-2 text-white shadow-lg transition-transform group-hover:scale-110">
                  <MapPin size={20} className="fill-current" />
                </div>
              </div>
            </Marker>
          ))}
        </Map>

        {/* Bottom Sheet Card */}
        {selectedStartup && (
          <div className="absolute bottom-6 left-1/2 w-full max-w-md -translate-x-1/2 px-4 animate-in slide-in-from-bottom-10 fade-in duration-300 pointer-events-auto">
            <div className="relative flex flex-col rounded-3xl border border-border bg-card p-6 shadow-2xl">
              <button 
                onClick={() => setSelectedStartup(null)}
                className="absolute right-4 top-4 text-muted-foreground hover:text-white"
              >
                <X size={20} />
              </button>
              
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-2xl font-bold text-white">{selectedStartup.name}</h3>
                <BadgeCheck size={20} className="text-accent" />
              </div>
              <p className="text-sm font-medium text-primary mb-4">{selectedStartup.sector}</p>
              
              <div className="flex items-center justify-between rounded-xl bg-background p-3 mb-6 border border-border">
                <span className="text-sm text-muted-foreground">Response Rate</span>
                <span className="text-sm font-bold text-accent">92% in 3 days</span>
              </div>
              
              <Button size="lg" className="w-full rounded-xl font-bold text-white">
                Apply with Story
              </Button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}