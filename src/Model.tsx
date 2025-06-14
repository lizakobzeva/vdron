/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 src/assets/models/dron/scene.gltf -t -T
Files: src/assets/models/dron/scene.gltf [663.57KB] > /Users/lizakobzeva/Desktop/React/Vdron/scene-transformed.glb [2.1MB] (-217%)
Author: horizon man (https://sketchfab.com/mazurilla260)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/dron-d2d0be8972a1445da054363e0dd8f58d
Title: dron
*/

import * as THREE from 'three'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import {type GLTF, SkeletonUtils} from 'three-stdlib'
import {useMemo, useRef} from "react";

type ActionName = 'hover' | 'exploded_view' | 'step_by_step'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

type GLTFResult = GLTF & {
  nodes: {
    Object_96: THREE.SkinnedMesh
    Object_99: THREE.SkinnedMesh
    Object_102: THREE.SkinnedMesh
    Object_105: THREE.SkinnedMesh
    Object_108: THREE.SkinnedMesh
    Object_111: THREE.SkinnedMesh
    Object_114: THREE.SkinnedMesh
    Object_117: THREE.SkinnedMesh
    Object_120: THREE.SkinnedMesh
    Object_123: THREE.SkinnedMesh
    Object_126: THREE.SkinnedMesh
    Object_129: THREE.SkinnedMesh
    Object_132: THREE.SkinnedMesh
    Object_135: THREE.SkinnedMesh
    Object_138: THREE.SkinnedMesh
    Object_141: THREE.SkinnedMesh
    Object_144: THREE.SkinnedMesh
    Object_147: THREE.SkinnedMesh
    Object_150: THREE.SkinnedMesh
    Object_153: THREE.SkinnedMesh
    Object_156: THREE.SkinnedMesh
    Object_159: THREE.SkinnedMesh
    Object_162: THREE.SkinnedMesh
    Object_165: THREE.SkinnedMesh
    Object_168: THREE.SkinnedMesh
    Object_171: THREE.SkinnedMesh
    Object_174: THREE.SkinnedMesh
    Object_177: THREE.SkinnedMesh
    Object_180: THREE.SkinnedMesh
    Object_183: THREE.SkinnedMesh
    Object_186: THREE.SkinnedMesh
    Object_189: THREE.SkinnedMesh
    Object_192: THREE.SkinnedMesh
    Object_195: THREE.SkinnedMesh
    Object_198: THREE.SkinnedMesh
    Object_201: THREE.SkinnedMesh
    Object_204: THREE.SkinnedMesh
    Object_207: THREE.SkinnedMesh
    Object_210: THREE.SkinnedMesh
    Object_213: THREE.SkinnedMesh
    Object_216: THREE.SkinnedMesh
    Object_219: THREE.SkinnedMesh
    Object_222: THREE.SkinnedMesh
    Object_225: THREE.SkinnedMesh
    Object_228: THREE.SkinnedMesh
    Object_231: THREE.SkinnedMesh
    Object_234: THREE.SkinnedMesh
    Object_237: THREE.SkinnedMesh
    Object_240: THREE.SkinnedMesh
    Object_243: THREE.SkinnedMesh
    Object_246: THREE.SkinnedMesh
    Object_249: THREE.SkinnedMesh
    Object_252: THREE.SkinnedMesh
    Object_255: THREE.SkinnedMesh
    Object_258: THREE.SkinnedMesh
    Object_261: THREE.SkinnedMesh
    Object_264: THREE.SkinnedMesh
    Object_267: THREE.SkinnedMesh
    Object_270: THREE.SkinnedMesh
    Object_273: THREE.SkinnedMesh
    Object_276: THREE.SkinnedMesh
    Object_279: THREE.SkinnedMesh
    Object_282: THREE.SkinnedMesh
    Object_285: THREE.SkinnedMesh
    Object_288: THREE.SkinnedMesh
    Object_291: THREE.SkinnedMesh
    Object_294: THREE.SkinnedMesh
    Object_297: THREE.SkinnedMesh
    Object_300: THREE.SkinnedMesh
    Object_303: THREE.SkinnedMesh
    Object_306: THREE.SkinnedMesh
    Object_309: THREE.SkinnedMesh
    Object_312: THREE.SkinnedMesh
    Object_315: THREE.SkinnedMesh
    Object_318: THREE.SkinnedMesh
    Object_321: THREE.SkinnedMesh
    Object_324: THREE.SkinnedMesh
    GLTF_created_0_rootJoint: THREE.Bone
  }
  materials: {
    material_0: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function Model() {
  const group = useRef<THREE.Group>(null)
  const { scene } = useGLTF('/scene-transformed.glb')
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone) as unknown as GLTFResult
  // const { actions } = useAnimations(animations, group)
  return (
      <group ref={group}  dispose={null}>
        <group scale={1} name="Sketchfab_Scene">
          <primitive object={nodes.GLTF_created_0_rootJoint} />
          <skinnedMesh name="Object_96" geometry={nodes.Object_96.geometry} material={materials.material_0} skeleton={nodes.Object_96.skeleton}scale={1} />
          <skinnedMesh name="Object_99" geometry={nodes.Object_99.geometry} material={materials.material_0} skeleton={nodes.Object_99.skeleton}scale={1} />
          <skinnedMesh name="Object_102" geometry={nodes.Object_102.geometry} material={materials.material_0} skeleton={nodes.Object_102.skeleton}scale={1} />
          <skinnedMesh name="Object_105" geometry={nodes.Object_105.geometry} material={materials.material_0} skeleton={nodes.Object_105.skeleton}scale={1} />
          <skinnedMesh name="Object_108" geometry={nodes.Object_108.geometry} material={materials.material_0} skeleton={nodes.Object_108.skeleton}scale={1} />
          <skinnedMesh name="Object_111" geometry={nodes.Object_111.geometry} material={materials.material_0} skeleton={nodes.Object_111.skeleton}scale={1} />
          <skinnedMesh name="Object_114" geometry={nodes.Object_114.geometry} material={materials.material_0} skeleton={nodes.Object_114.skeleton}scale={1} />
          <skinnedMesh name="Object_117" geometry={nodes.Object_117.geometry} material={materials.material_0} skeleton={nodes.Object_117.skeleton}scale={1} />
          <skinnedMesh name="Object_120" geometry={nodes.Object_120.geometry} material={materials.material_0} skeleton={nodes.Object_120.skeleton}scale={1} />
          <skinnedMesh name="Object_123" geometry={nodes.Object_123.geometry} material={materials.material_0} skeleton={nodes.Object_123.skeleton}scale={1} />
          <skinnedMesh name="Object_126" geometry={nodes.Object_126.geometry} material={materials.material_0} skeleton={nodes.Object_126.skeleton}scale={1} />
          <skinnedMesh name="Object_129" geometry={nodes.Object_129.geometry} material={materials.material_0} skeleton={nodes.Object_129.skeleton}scale={1} />
          <skinnedMesh name="Object_132" geometry={nodes.Object_132.geometry} material={materials.material_0} skeleton={nodes.Object_132.skeleton}scale={1} />
          <skinnedMesh name="Object_135" geometry={nodes.Object_135.geometry} material={materials.material_0} skeleton={nodes.Object_135.skeleton}scale={1} />
          <skinnedMesh name="Object_138" geometry={nodes.Object_138.geometry} material={materials.material_0} skeleton={nodes.Object_138.skeleton}scale={1} />
          <skinnedMesh name="Object_141" geometry={nodes.Object_141.geometry} material={materials.material_0} skeleton={nodes.Object_141.skeleton}scale={1} />
          <skinnedMesh name="Object_144" geometry={nodes.Object_144.geometry} material={materials.material_0} skeleton={nodes.Object_144.skeleton}scale={1} />
          <skinnedMesh name="Object_147" geometry={nodes.Object_147.geometry} material={materials.material_0} skeleton={nodes.Object_147.skeleton}scale={1} />
          <skinnedMesh name="Object_150" geometry={nodes.Object_150.geometry} material={materials.material_0} skeleton={nodes.Object_150.skeleton}scale={1} />
          <skinnedMesh name="Object_153" geometry={nodes.Object_153.geometry} material={materials.material_0} skeleton={nodes.Object_153.skeleton}scale={1} />
          <skinnedMesh name="Object_156" geometry={nodes.Object_156.geometry} material={materials.material_0} skeleton={nodes.Object_156.skeleton}scale={1} />
          <skinnedMesh name="Object_159" geometry={nodes.Object_159.geometry} material={materials.material_0} skeleton={nodes.Object_159.skeleton}scale={1} />
          <skinnedMesh name="Object_162" geometry={nodes.Object_162.geometry} material={materials.material_0} skeleton={nodes.Object_162.skeleton}scale={1} />
          <skinnedMesh name="Object_165" geometry={nodes.Object_165.geometry} material={materials.material_0} skeleton={nodes.Object_165.skeleton}scale={1} />
          <skinnedMesh name="Object_168" geometry={nodes.Object_168.geometry} material={materials.material_0} skeleton={nodes.Object_168.skeleton}scale={1} />
          <skinnedMesh name="Object_171" geometry={nodes.Object_171.geometry} material={materials.material_0} skeleton={nodes.Object_171.skeleton}scale={1} />
          <skinnedMesh name="Object_174" geometry={nodes.Object_174.geometry} material={materials.material_0} skeleton={nodes.Object_174.skeleton}scale={1} />
          <skinnedMesh name="Object_177" geometry={nodes.Object_177.geometry} material={materials.material_0} skeleton={nodes.Object_177.skeleton}scale={1} />
          <skinnedMesh name="Object_180" geometry={nodes.Object_180.geometry} material={materials.material_0} skeleton={nodes.Object_180.skeleton}scale={1} />
          <skinnedMesh name="Object_183" geometry={nodes.Object_183.geometry} material={materials.material_0} skeleton={nodes.Object_183.skeleton}scale={1} />
          <skinnedMesh name="Object_186" geometry={nodes.Object_186.geometry} material={materials.material_0} skeleton={nodes.Object_186.skeleton}scale={1} />
          <skinnedMesh name="Object_189" geometry={nodes.Object_189.geometry} material={materials.material_0} skeleton={nodes.Object_189.skeleton}scale={1} />
          <skinnedMesh name="Object_192" geometry={nodes.Object_192.geometry} material={materials.material_0} skeleton={nodes.Object_192.skeleton}scale={1} />
          <skinnedMesh name="Object_195" geometry={nodes.Object_195.geometry} material={materials.material_0} skeleton={nodes.Object_195.skeleton}scale={1} />
          <skinnedMesh name="Object_198" geometry={nodes.Object_198.geometry} material={materials.material_0} skeleton={nodes.Object_198.skeleton}scale={1} />
          <skinnedMesh name="Object_201" geometry={nodes.Object_201.geometry} material={materials.material_0} skeleton={nodes.Object_201.skeleton}scale={1} />
          <skinnedMesh name="Object_204" geometry={nodes.Object_204.geometry} material={materials.material_0} skeleton={nodes.Object_204.skeleton}scale={1} />
          <skinnedMesh name="Object_207" geometry={nodes.Object_207.geometry} material={materials.material_0} skeleton={nodes.Object_207.skeleton}scale={1} />
          <skinnedMesh name="Object_210" geometry={nodes.Object_210.geometry} material={materials.material_0} skeleton={nodes.Object_210.skeleton}scale={1} />
          <skinnedMesh name="Object_213" geometry={nodes.Object_213.geometry} material={materials.material_0} skeleton={nodes.Object_213.skeleton}scale={1} />
          <skinnedMesh name="Object_216" geometry={nodes.Object_216.geometry} material={materials.material_0} skeleton={nodes.Object_216.skeleton}scale={1} />
          <skinnedMesh name="Object_219" geometry={nodes.Object_219.geometry} material={materials.material_0} skeleton={nodes.Object_219.skeleton}scale={1} />
          <skinnedMesh name="Object_222" geometry={nodes.Object_222.geometry} material={materials.material_0} skeleton={nodes.Object_222.skeleton}scale={1} />
          <skinnedMesh name="Object_225" geometry={nodes.Object_225.geometry} material={materials.material_0} skeleton={nodes.Object_225.skeleton}scale={1} />
          <skinnedMesh name="Object_228" geometry={nodes.Object_228.geometry} material={materials.material_0} skeleton={nodes.Object_228.skeleton}scale={1} />
          <skinnedMesh name="Object_231" geometry={nodes.Object_231.geometry} material={materials.material_0} skeleton={nodes.Object_231.skeleton}scale={1} />
          <skinnedMesh name="Object_234" geometry={nodes.Object_234.geometry} material={materials.material_0} skeleton={nodes.Object_234.skeleton}scale={1} />
          <skinnedMesh name="Object_237" geometry={nodes.Object_237.geometry} material={materials.material_0} skeleton={nodes.Object_237.skeleton}scale={1} />
          <skinnedMesh name="Object_240" geometry={nodes.Object_240.geometry} material={materials.material_0} skeleton={nodes.Object_240.skeleton}scale={1} />
          <skinnedMesh name="Object_243" geometry={nodes.Object_243.geometry} material={materials.material_0} skeleton={nodes.Object_243.skeleton}scale={1} />
          <skinnedMesh name="Object_246" geometry={nodes.Object_246.geometry} material={materials.material_0} skeleton={nodes.Object_246.skeleton}scale={1} />
          <skinnedMesh name="Object_249" geometry={nodes.Object_249.geometry} material={materials.material_0} skeleton={nodes.Object_249.skeleton}scale={1} />
          <skinnedMesh name="Object_252" geometry={nodes.Object_252.geometry} material={materials.material_0} skeleton={nodes.Object_252.skeleton}scale={1} />
          <skinnedMesh name="Object_255" geometry={nodes.Object_255.geometry} material={materials.material_0} skeleton={nodes.Object_255.skeleton}scale={1} />
          <skinnedMesh name="Object_258" geometry={nodes.Object_258.geometry} material={materials.material_0} skeleton={nodes.Object_258.skeleton}scale={1} />
          <skinnedMesh name="Object_261" geometry={nodes.Object_261.geometry} material={materials.material_0} skeleton={nodes.Object_261.skeleton}scale={1} />
          <skinnedMesh name="Object_264" geometry={nodes.Object_264.geometry} material={materials.material_0} skeleton={nodes.Object_264.skeleton}scale={1} />
          <skinnedMesh name="Object_267" geometry={nodes.Object_267.geometry} material={materials.material_0} skeleton={nodes.Object_267.skeleton}scale={1} />
          <skinnedMesh name="Object_270" geometry={nodes.Object_270.geometry} material={materials.material_0} skeleton={nodes.Object_270.skeleton}scale={1} />
          <skinnedMesh name="Object_273" geometry={nodes.Object_273.geometry} material={materials.material_0} skeleton={nodes.Object_273.skeleton}scale={1} />
          <skinnedMesh name="Object_276" geometry={nodes.Object_276.geometry} material={materials.material_0} skeleton={nodes.Object_276.skeleton}scale={1} />
          <skinnedMesh name="Object_279" geometry={nodes.Object_279.geometry} material={materials.material_0} skeleton={nodes.Object_279.skeleton}scale={1} />
          <skinnedMesh name="Object_282" geometry={nodes.Object_282.geometry} material={materials.material_0} skeleton={nodes.Object_282.skeleton}scale={1} />
          <skinnedMesh name="Object_285" geometry={nodes.Object_285.geometry} material={materials.material_0} skeleton={nodes.Object_285.skeleton}scale={1} />
          <skinnedMesh name="Object_288" geometry={nodes.Object_288.geometry} material={materials.material_0} skeleton={nodes.Object_288.skeleton}scale={1} />
          <skinnedMesh name="Object_291" geometry={nodes.Object_291.geometry} material={materials.material_0} skeleton={nodes.Object_291.skeleton}scale={1} />
          <skinnedMesh name="Object_294" geometry={nodes.Object_294.geometry} material={materials.material_0} skeleton={nodes.Object_294.skeleton}scale={1} />
          <skinnedMesh name="Object_297" geometry={nodes.Object_297.geometry} material={materials.material_0} skeleton={nodes.Object_297.skeleton}scale={1} />
          <skinnedMesh name="Object_300" geometry={nodes.Object_300.geometry} material={materials.material_0} skeleton={nodes.Object_300.skeleton}scale={1} />
          <skinnedMesh name="Object_303" geometry={nodes.Object_303.geometry} material={materials.material_0} skeleton={nodes.Object_303.skeleton}scale={1} />
          <skinnedMesh name="Object_306" geometry={nodes.Object_306.geometry} material={materials.material_0} skeleton={nodes.Object_306.skeleton}scale={1} />
          <skinnedMesh name="Object_309" geometry={nodes.Object_309.geometry} material={materials.material_0} skeleton={nodes.Object_309.skeleton}scale={1} />
          <skinnedMesh name="Object_312" geometry={nodes.Object_312.geometry} material={materials.material_0} skeleton={nodes.Object_312.skeleton}scale={1} />
          <skinnedMesh name="Object_315" geometry={nodes.Object_315.geometry} material={materials.material_0} skeleton={nodes.Object_315.skeleton}scale={1} />
          <skinnedMesh name="Object_318" geometry={nodes.Object_318.geometry} material={materials.material_0} skeleton={nodes.Object_318.skeleton}scale={1} />
          <skinnedMesh name="Object_321" geometry={nodes.Object_321.geometry} material={materials.material_0} skeleton={nodes.Object_321.skeleton}scale={1} />
          <skinnedMesh name="Object_324" geometry={nodes.Object_324.geometry} material={materials.material_0} skeleton={nodes.Object_324.skeleton}scale={1} />
        </group>
      </group>
  )
}

useGLTF.preload('/scene-transformed.glb')
