"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Text, Center, Float, Sparkles, OrbitControls } from "@react-three/drei"
import { useRef, Suspense } from "react"
import * as THREE from "three"

function HeroText() {
  const textRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
      textRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.2) * 0.05
    }
  })

  return (
    <group ref={textRef}>
      <Center position={[0, 1, 0]}>
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
          <Text fontSize={2.5} color="white" anchorX="center" anchorY="middle">
            ELBASAN
            <meshStandardMaterial color="#fff" metalness={0.8} roughness={0.2} />
          </Text>
        </Float>
      </Center>
      <Center position={[0, -1.5, 0]}>
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.1}>
          <Text fontSize={0.6} color="#ef4444" anchorX="center" anchorY="middle">
            TRADITA & INOVACIONI
            <meshStandardMaterial color="#ef4444" metalness={0.5} roughness={0.2} />
          </Text>
        </Float>
      </Center>
    </group>
  )
}

function Particles() {
  const count = 300
  const mesh = useRef<THREE.InstancedMesh>(null)
  const dummy = new THREE.Object3D()

  // Create static positions but animate in useFrame for performance
  const particles = new Array(count).fill(0).map(() => ({
    position: [(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30, (Math.random() - 0.5) * 10 - 5],
    speed: Math.random() * 0.02,
    factor: Math.random() * 10,
  }))

  useFrame((state) => {
    if (!mesh.current) return
    particles.forEach((particle, i) => {
      const t = state.clock.elapsedTime * particle.speed + particle.factor
      dummy.position.set(
        particle.position[0] + Math.sin(t) * 2,
        particle.position[1] + Math.cos(t * 0.5) * 2,
        particle.position[2],
      )
      const scale = (Math.sin(t * 3) + 1.5) * 0.5
      dummy.scale.set(scale, scale, scale)
      dummy.updateMatrix()
      mesh.current!.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <icosahedronGeometry args={[0.1, 0]} />
      <meshBasicMaterial color="#ef4444" transparent opacity={0.6} />
    </instancedMesh>
  )
}

export function Hero3D() {
  return (
    <div className="h-[90vh] w-full bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)]" />

      {/* Editorial Overlay */}
      <div className="absolute top-10 left-10 z-20 hidden md:block">
        <div className="text-white/40 font-mono text-xs tracking-[0.2em] rotate-90 origin-top-left absolute top-0 left-0">
          EST. 15th CENTURY
        </div>
      </div>

      <div className="absolute bottom-10 right-10 z-20 hidden md:block text-right">
        <p className="text-white font-serif text-2xl italic">"Zemra e Shqipërisë"</p>
        <p className="text-red-500 font-mono text-xs mt-2 uppercase tracking-widest">Explore Culture</p>
      </div>

      <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
        <color attach="background" args={["#000"]} />
        <fog attach="fog" args={["#000", 10, 25]} />

        <Suspense fallback={null}>
          <HeroText />
          <Particles />
          <Sparkles count={100} scale={20} size={2} speed={0.4} opacity={0.5} color="#fff" />
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#ef4444" />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.6}
          minPolarAngle={Math.PI / 2.5}
          maxAzimuthAngle={Math.PI / 4}
          minAzimuthAngle={-Math.PI / 4}
        />
      </Canvas>
    </div>
  )
}
