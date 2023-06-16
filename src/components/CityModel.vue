<template>
  <canvas ref="bjsCanvas" width="500" height="500" />
</template>

<script setup>
import { ref, onMounted } from "@vue/runtime-core";
import { createScene } from "../scenes/Scene.js";

const bjsCanvas = ref(null);

onMounted(async () => {
  if (bjsCanvas.value) {
    createScene(bjsCanvas.value);
  }
});
</script>
<!-- 
<script setup>
import BABYLON from "@babylonjs/core";
function createScene() {
  // This creates a basic Babylon Scene object (non-mesh)
  var scene = new BABYLON.Scene(engine);

  // This creates and positions a free camera (non-mesh)
  var camera = new BABYLON.FreeCamera(
    "camera1",
    new BABYLON.Vector3(0, 5, -10),
    scene
  );

  // This targets the camera to scene origin
  camera.setTarget(BABYLON.Vector3.Zero());

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  var light = new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(0, 1, 0),
    scene
  );

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.7;

  // Our built-in 'sphere' shape.
  // var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 2, segments: 32}, scene);
  var builidng = BABYLON.MeshBuilder.CreateBox(
    "box",
    { diameter: 2, segments: 32 },
    scene
  );
  var builidng2 = BABYLON.MeshBuilder.CreateBox(
    "box",
    { diameter: 2, segments: 32 },
    scene
  );
  var builidng3 = BABYLON.MeshBuilder.CreateBox(
    "box",
    { diameter: 2, segments: 32 },
    scene
  );
  builidng.position.y = 1;
  builidng2.position.x = -1;
  // Move the sphere upward 1/2 its height
  // sphere.position.y = 1;

  // Our built-in 'ground' shape.
  var ground = BABYLON.MeshBuilder.CreateGround(
    "ground",
    { width: 6, height: 6 },
    scene
  );

  return scene;
}
</script> -->
<style lang=""></style>
