"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Stars, Float, RoundedBox, Cylinder, Html, Loader, Billboard } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useRouter } from 'next/navigation';
import { useState, useRef } from 'react';
import * as THREE from 'three';
import { useStore } from '@/lib/store';

function LanguageModel({ type, hovered }: { type: string, hovered: boolean }) {
  const intensity = hovered ? 4 : 0.2;
  
  if (type === 'js') {
    return (
      <group position={[0, 1.5, 0]}>
        <RoundedBox args={[3, 3, 3]} radius={0.3} smoothness={4} castShadow receiveShadow>
          <meshStandardMaterial 
            color="#f7df1e" 
            emissive="#f7df1e" 
            emissiveIntensity={intensity * 0.5} 
            roughness={0.2}
            metalness={0.8}
          />
        </RoundedBox>
        <Text position={[0.6, -0.6, 1.52]} fontSize={1.2} color="black" font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf" fontWeight="bold">JS</Text>
      </group>
    );
  }
  
  if (type === 'sql') {
    return (
      <group position={[0, 2, 0]}>
        {/* Database Disks */}
        {[-1.2, 0, 1.2].map((y, i) => (
          <Cylinder key={i} args={[2, 2, 0.8, 32]} position={[0, y, 0]} castShadow receiveShadow>
            <meshStandardMaterial 
              color="#00758F" 
              emissive="#00758F" 
              emissiveIntensity={intensity * 0.5} 
              roughness={0.1} 
              metalness={0.9} 
            />
          </Cylinder>
        ))}
        {/* Orange Accent */}
        <Cylinder args={[2.05, 2.05, 0.1, 32]} position={[0, 0.6, 0]}>
          <meshBasicMaterial color="#F29111" />
        </Cylinder>
        <Cylinder args={[2.05, 2.05, 0.1, 32]} position={[0, -0.6, 0]}>
          <meshBasicMaterial color="#F29111" />
        </Cylinder>
      </group>
    );
  }

  if (type === 'git') {
    return (
      <group position={[0, 2, 0]} rotation={[0, 0, Math.PI / 4]}>
        <RoundedBox args={[2.5, 2.5, 0.8]} radius={0.2} castShadow receiveShadow>
          <meshStandardMaterial 
            color="#F1502F" 
            emissive="#F1502F" 
            emissiveIntensity={intensity * 0.5}
            roughness={0.3}
            metalness={0.5}
          />
        </RoundedBox>
        {/* Git Dots */}
        <Cylinder args={[0.3, 0.3, 1]} position={[0, 0.7, 0]} rotation={[Math.PI/2, 0, 0]}>
          <meshBasicMaterial color="white" />
        </Cylinder>
        <Cylinder args={[0.3, 0.3, 1]} position={[0, -0.7, 0]} rotation={[Math.PI/2, 0, 0]}>
          <meshBasicMaterial color="white" />
        </Cylinder>
        <Cylinder args={[0.3, 0.3, 1]} position={[-0.7, 0, 0]} rotation={[Math.PI/2, 0, 0]}>
          <meshBasicMaterial color="white" />
        </Cylinder>
        {/* Connecting Lines */}
        <Cylinder args={[0.1, 0.1, 1.4]} position={[0, 0, 0.4]} rotation={[0, 0, 0]}>
          <meshBasicMaterial color="white" />
        </Cylinder>
        <Cylinder args={[0.1, 0.1, 1]} position={[-0.35, -0.35, 0.4]} rotation={[0, 0, Math.PI/4]}>
          <meshBasicMaterial color="white" />
        </Cylinder>
      </group>
    );
  }

  return <mesh><boxGeometry args={[1,1,1]} /><meshStandardMaterial color="white" /></mesh>;
}

interface BuildingProps {
  position: [number, number, number];
  type: string;
  name: string;
  url: string;
  iconText: string;
  courseDetails?: {
    difficulty: string;
    level: string;
    title: string;
    description: string;
    lessonsCount: number;
    timeEst: string;
    progress: number;
    themeColor: string;
    bgButton: string;
  }
}

function Building({ position, type, name, url, iconText, courseDetails }: BuildingProps) {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef<THREE.Group>(null);
  const innerGroupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5 + position[0]) * 0.3;
    }
    if (innerGroupRef.current) {
      innerGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        innerGroupRef.current.rotation.y,
        hovered ? state.clock.elapsedTime * 0.5 : 0,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Subtle Holographic Ring Base (Instead of bulky island) */}
      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.8, 3, 32]} />
        <meshBasicMaterial color={hovered ? (type === 'js' ? '#60a5fa' : type === 'git' ? '#fb923c' : '#22d3ee') : "#374151"} transparent opacity={hovered ? 0.8 : 0.15} />
      </mesh>
      
      {/* Inner glowing dot */}
      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.5, 32]} />
        <meshBasicMaterial color={type === 'js' ? '#60a5fa' : type === 'git' ? '#fb923c' : '#22d3ee'} transparent opacity={hovered ? 0.1 : 0} />
      </mesh>

      <group 
        ref={innerGroupRef}
        onClick={() => router.push(url)}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
          document.body.style.cursor = 'auto';
        }}
      >
        <LanguageModel type={type} hovered={hovered} />
      </group>

      {/* Floating Name Hologram (Only show when NOT hovered) */}
      {!hovered && (
        <group>
          <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
            <Billboard position={[0, 5, 0]}>
              <Text
                fontSize={0.8}
                color="white"
                fillOpacity={0.6}
                anchorX="center"
                anchorY="middle"
                outlineWidth={0.03}
                outlineColor="#000000"
              >
                {iconText}
              </Text>
            </Billboard>
          </Float>

          <Billboard position={[0, -2, 3]}>
            <Text
              fontSize={0.5}
              color="#a1a1aa"
              fillOpacity={0.6}
              anchorX="center"
              anchorY="middle"
              outlineWidth={0.03}
              outlineColor="#000000"
            >
              {name}
            </Text>
          </Billboard>
        </group>
      )}

      {/* Interactive HTML Card (Show on Hover) */}
      {hovered && courseDetails && (
        <Html position={[0, 4, 0]} center zIndexRange={[100, 0]}>
          <div className="bg-gray-900/95 backdrop-blur-md border border-gray-700 p-5 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.8)] text-white w-72 pointer-events-none transform transition-all duration-300 scale-105">
            <div className={`text-xs font-bold mb-1 uppercase tracking-wider ${courseDetails.themeColor}`}>
              {courseDetails.difficulty} • {courseDetails.level}
            </div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold">{courseDetails.title}</h3>
              <span className="text-[10px] bg-gray-800 px-2 py-1 rounded-md text-gray-300 font-mono">SELECTED</span>
            </div>
            <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">{courseDetails.description}</p>
            
            <div className="flex justify-between items-center text-xs text-gray-500 mb-2 font-medium">
              <span className="flex items-center"><span className="mr-1">📚</span> {courseDetails.lessonsCount} Lessons</span>
              <span className="flex items-center"><span className="mr-1">⏱️</span> {courseDetails.timeEst}</span>
            </div>
            
            <div className="w-full bg-gray-800 rounded-full h-2 mb-4 overflow-hidden border border-gray-700/50 shadow-inner">
              <div className={`${courseDetails.bgButton.split(' ')[0]} h-2 rounded-full transition-all duration-1000 ease-out relative`} style={{ width: `${courseDetails.progress}%` }}>
                <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/20 blur-[2px]"></div>
              </div>
            </div>
            
            <div className={`w-full ${courseDetails.bgButton} text-white text-center text-sm font-bold py-2.5 rounded-xl transition-colors shadow-lg`}>
              {courseDetails.progress > 0 ? "Continue Mission" : "Start Mission"}
            </div>
          </div>
        </Html>
      )}
    </group>
  );
}

export default function WorldScene() {
  const { progress } = useStore();
  const isJsStarted = progress.javascript > 0;

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 8, 25], fov: 45 }} gl={{ antialias: false }}>
        <color attach="background" args={['#020205']} />
        
        {/* Environment */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 20, 10]} intensity={1.2} color="#ffffff" castShadow />
        <pointLight position={[0, 5, 0]} intensity={0.8} color="#ffffff" />
        <Stars radius={100} depth={50} count={1500} factor={3} saturation={0} fade speed={0.5} />

        {/* Buildings */}
        <Building 
          position={[-10, 0, -5]} 
          type="js"
          iconText="JavaScript"
          name={isJsStarted ? "Click to Enter" : "⭐ START HERE ⭐"} 
          url="/courses/javascript" 
          courseDetails={{
            difficulty: "Beginner",
            level: "Level 1",
            title: "JavaScript Planet",
            description: "เรียนรู้พื้นฐาน JavaScript ตั้งแต่ตัวแปรจนถึงฟังก์ชัน",
            lessonsCount: 26,
            timeEst: "ประมาณ 2 ชั่วโมง",
            progress: progress.javascript,
            themeColor: "text-blue-400",
            bgButton: "bg-blue-600 hover:bg-blue-500",
          }}
        />
        
        <Building 
          position={[10, 0, -5]} 
          type="git"
          iconText="Git"
          name="Click to Enter" 
          url="/courses/git" 
          courseDetails={{
            difficulty: "Intermediate",
            level: "Level 2",
            title: "Git Repository",
            description: "ระบบควบคุมเวอร์ชันและการทำงานร่วมกับทีมผ่าน GitHub",
            lessonsCount: 10,
            timeEst: "ประมาณ 45 นาที",
            progress: progress.git,
            themeColor: "text-orange-400",
            bgButton: "bg-orange-600 hover:bg-orange-500",
          }}
        />
        
        <Building 
          position={[0, -2, 8]} 
          type="sql"
          iconText="MySQL"
          name="Click to Enter" 
          url="/courses/mysql" 
          courseDetails={{
            difficulty: "Database",
            level: "Level 3",
            title: "MySQL Data Center",
            description: "จัดการฐานข้อมูล ความสัมพันธ์ และการคิวรีข้อมูล (SQL)",
            lessonsCount: 7,
            timeEst: "ประมาณ 30 นาที",
            progress: progress.mysql,
            themeColor: "text-cyan-400",
            bgButton: "bg-cyan-600 hover:bg-cyan-500",
          }}
        />

        {/* Post Processing Glow */}
        <EffectComposer>
          <Bloom luminanceThreshold={0.8} mipmapBlur intensity={1.2} />
        </EffectComposer>

        <OrbitControls 
          enablePan={false}
          maxPolarAngle={Math.PI / 2.1}
          minPolarAngle={Math.PI / 4}
          minDistance={15}
          maxDistance={35}
          autoRotate
          autoRotateSpeed={0.15}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>
      <Loader 
        containerStyles={{ background: '#080B14' }}
        innerStyles={{ width: '300px' }}
        barStyles={{ background: '#2563EB', height: '10px' }}
        dataInterpolation={(p) => `Loading 3D Universe ${p.toFixed(0)}%`}
      />
    </div>
  );
}
