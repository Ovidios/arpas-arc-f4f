import { create } from "zustand";
import { Position } from "../types/transform";
import { gpsToMeters } from "../utility/geolocation";

interface LocationState {
    origin: GeolocationCoordinates | null;
    setOrigin: (coords: GeolocationCoordinates) => void;
    setOriginOnce: (coords: GeolocationCoordinates) => void;
    // Backward-compatible alias (older code expects getPosition)
    getPosition: (lat: number, lon: number) => Position;
    getStaticPosition: (lat: number, lon: number) => Position;
}

const useLocationStore = create<LocationState>((set, get) => ({
    origin: null,

    // Set origin explicitly (used internally once we have a reliable reading)
    setOrigin: (coords) => set({ origin: coords }),

    // 🔒 Origin wird NUR EINMAL gesetzt
    setOriginOnce: (coords) =>
        set((state) => {
            if (state.origin) return state;
            return { origin: coords };
        }),

    // 🔙 alias für ältere Aufrufe
    getPosition: (lat, lon) => get().getStaticPosition(lat, lon),

    // 🧱 Statische Objektposition relativ zum Origin
    getStaticPosition: (lat, lon) => {
        const origin = get().origin;
        if (!origin) return new Position();

        const target: GeolocationCoordinates = {
            latitude: lat,
            longitude: lon,
            altitude: 0,
            accuracy: 0,
            altitudeAccuracy: null,
            heading: 0,
            speed: 0,
            toJSON: () => ({ latitude: lat, longitude: lon }),
        };

        const { x, y, z } = gpsToMeters(origin, target);
        return new Position(x, y, z);
    },
}));

export default useLocationStore;
