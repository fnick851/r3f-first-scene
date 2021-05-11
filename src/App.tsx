import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useControls } from "leva"
import React from "react"
import { Vector3 } from "three"
import "./App.css"

const CustomMesh = (props: {
  position: [number, number, number] | Vector3
  material: JSX.Element
  geometry: JSX.Element
}) => (
  <mesh position={props.position}>
    {props.geometry}
    {props.material}
  </mesh>
)

function App() {
  const { material, geometry, position } = useControls({
    material: {
      options: {
        Phong: <meshPhongMaterial />,
        Normal: <meshNormalMaterial />,
        Basic: <meshBasicMaterial />,
      },
    },
    geometry: {
      options: {
        Box: <boxGeometry />,
        Sphere: <sphereGeometry />,
        Octahedron: <octahedronGeometry />,
      },
    },
    position: [0, 0, 0],
  })

  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.4} color="#ededd0" />
        <directionalLight color="#907fa4" position={[0, 0, 5]} />
        <CustomMesh
          position={position}
          material={material}
          geometry={geometry}
        />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export { App }
