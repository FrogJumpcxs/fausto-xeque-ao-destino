import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import * as Chess from 'chess.js'

export default function FaustoTabuleiro() {
  const chessRef = useRef(null)

  useEffect(() => {
    const game = new Chess.Chess()
    chessRef.current = game
    console.log('Jogo iniciado:', game.fen())
  }, [])

  return (
    <div className="w-screen h-screen bg-black">
      <Canvas camera={{ position: [0, 5, 10], fov: 50 }} shadows>
        <ambientLight intensity={0.4} />
        <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} castShadow />
        <Chessboard3D />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

function Chessboard3D() {
  const board = []
  const size = 8

  for (let x = 0; x < size; x++) {
    for (let z = 0; z < size; z++) {
      const isWhite = (x + z) % 2 === 0
      board.push(
        <mesh
          key={`tile-${x}-${z}`}
          position={[x - 4, 0, z - 4]}
          receiveShadow>
          <boxGeometry args={[1, 0.1, 1]} />
          <meshStandardMaterial color={isWhite ? '#e0e0e0' : '#303030'} />
        </mesh>
      )
    }
  }

  return <group>{board}</group>
}
