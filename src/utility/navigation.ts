import { NavNode } from "../types/navNode";


const getOrMax = (map: Map<NavNode, number>, key: NavNode) => {
    const value = map.get(key);
    return value === undefined ? Number.MAX_VALUE : value;
}

const getLowest = (openSet: Set<NavNode>, fScore: Map<NavNode, number>) => {
    return (Array.from(openSet).sort((a, b) => getOrMax(fScore, a) - getOrMax(fScore, b)))[0]
}

const reconstructPath = (cameFrom: Map<NavNode, NavNode>, current: NavNode) => {
    const includedConnetions: Set<string> = new Set();

    while (cameFrom.has(current)) {
        const prev = current;
        current = cameFrom.get(current)!;
        includedConnetions.add(prev.id < current.id ? prev.id + "-" + current.id : current.id + "-" + prev.id);
    }

    return includedConnetions;
}

// Implementation follows: https://en.wikipedia.org/wiki/A*_search_algorithm
export const calculateRoute = (originNode: NavNode, targetNode: NavNode) => {
    const openSet: Set<NavNode> = new Set([originNode]);
    const cameFrom: Map<NavNode, NavNode> = new Map();
    
    const gScore: Map<NavNode, number> = new Map();
    gScore.set(originNode, 0);

    const fScore: Map<NavNode, number> = new Map();
    fScore.set(originNode, originNode.distanceTo(targetNode));

    while(openSet.size > 0) {
        const current = getLowest(openSet, fScore);
        if (current == targetNode) {
            return reconstructPath(cameFrom, current);
        }

        openSet.delete(current);
        current.neighbors.forEach(neighbor => {
            const tentativeGScore = getOrMax(gScore, current) + current.distanceTo(neighbor)
            if (tentativeGScore < getOrMax(gScore, neighbor)) {
                cameFrom.set(neighbor, current);
                gScore.set(neighbor, tentativeGScore);
                fScore.set(neighbor, tentativeGScore + neighbor.distanceTo(targetNode));
                if (!openSet.has(neighbor)) {
                    openSet.add(neighbor)
                }
            }
        })
    }
}

export const getClosestNode = (nodes: NavNode[], lat: number, long: number) => {
    return nodes.toSorted((a, b) => {
        return a.distanceToPosition(lat, long) - b.distanceToPosition(lat, long);
    })[0];
}