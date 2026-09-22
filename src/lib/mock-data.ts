export interface MockStartup {
  id: string;
  name: string;
  lat: number;
  lng: number;
  sector: string;
}

export const mockStartups: MockStartup[] = [
  { id: "1", name: "GigPlux HQ", lat: 18.5204, lng: 73.8567, sector: "HR Tech" },
  { id: "2", name: "Pune AI Labs", lat: 18.5590, lng: 73.7868, sector: "AI" },
  { id: "3", name: "Deccan FinTech", lat: 18.5158, lng: 73.8266, sector: "FinTech" },
  { id: "4", name: "Koregaon Web3", lat: 18.5362, lng: 73.8939, sector: "Blockchain" },
];