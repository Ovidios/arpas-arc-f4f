export class NavNode {
    id: number;
    position: [number, number];
    neighbors: NavNode[] = [];

    constructor(id: number, position: [number, number]) {
        this.id = id;
        this.position = position;
    }

    addNeighbor(neighbor: NavNode) {
        this.neighbors.push(neighbor);
    }

    // source: https://www.movable-type.co.uk/scripts/latlong.html
    distanceTo(other: NavNode) {
        const lat1 = other.position[0] * Math.PI/180;
        const lat2 = this.position[0] * Math.PI/180;
        const deltaLat = (this.position[0]-other.position[0]) * Math.PI/180
        const deltaLon = (this.position[1]-other.position[1]) * Math.PI/180
        const radius = 6371000; // approximate radius of earth in meters

        const a = Math.sin(deltaLat/2) * Math.sin(deltaLat/2) +
                  Math.cos(lat1) * Math.cos(lat2) *
                  Math.sin(deltaLon/2) * Math.sin(deltaLon/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        return radius * c;
    }
}