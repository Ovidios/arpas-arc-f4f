import * as THREE from "three";
import { useRef } from "react";
import { NavNode } from "../../types/navNode";
import { calculateRoute } from "../../utility/navigation";
import { Position } from "../../types/transform";
import useLocationStore from "../../store/locationStore";

const NavMap = ({ worldPosition, worldRotation, nodes, originNode, targetNode }: { worldPosition: Position, worldRotation: number, nodes: NavNode[], originNode?: NavNode, targetNode?: NavNode }) => {
    const navRef = useRef<THREE.Group>(null);
    const getPosition = useLocationStore(state => state.getPosition);
    const path = (originNode == undefined || targetNode == undefined) ? undefined : calculateRoute(originNode, targetNode);

    console.log(worldPosition);

    return (
        <group rotation={[0, -worldRotation - Math.PI / 2, 0]}>
            {nodes.map((node) => {
                let pos = new Position(getPosition(node.position[0], node.position[1]))
                                .substractedPosition(worldPosition);

                return <mesh position={pos.toArray()}>
                    <sphereGeometry args={[0.1]}></sphereGeometry>
                    <meshStandardMaterial color={node.id == originNode?.id ? "blue" : node.id == targetNode?.id ? "green" : "red"} metalness={1} roughness={0.7} />
                </mesh>
            })}
            {nodes.map((node) => {
                return <>
                    {node.neighbors.map((neighbor) => {
                        if (neighbor.id < node.id) return;
                        if (!(path && path.has(node.id + "-" + neighbor.id))) return;

                        let pos = new Position(getPosition(node.position[0], node.position[1]))
                            .substractedPosition(worldPosition);
                        let pos2 = new Position(getPosition(neighbor.position[0], neighbor.position[1]))
                            .substractedPosition(worldPosition);

                        let curve = new THREE.LineCurve3(new THREE.Vector3(0,0,0), pos2.substractedPosition(pos));



                        return <mesh position={pos.toArray()}>
                            <tubeGeometry args={[curve, 1, 0.05, 5]}></tubeGeometry>
                            <meshStandardMaterial color="red" metalness={1} roughness={0.7} />
                        </mesh>
                    })}
                </>
            })}
        </group>
    );
};

export default NavMap;
