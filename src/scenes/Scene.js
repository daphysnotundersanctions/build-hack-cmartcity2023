import {
  Engine,
  Scene,
  FreeCamera,
  Vector3,
  MeshBuilder,
  StandardMaterial,
  Color3,
  AssetsManager,
  FlyCamera,
  CubeTexture,
  SceneLoader,
  Texture,
  HemisphericLight,
  VirtualJoysticksCamera,
} from "@babylonjs/core";
import { OBJFileLoader } from "@babylonjs/loaders";
const createScene = (canvas) => {
  const engine = new Engine(canvas);
  const scene = new Scene(engine);

  engine.setHardwareScalingLevel(0.5);

  const camera = new FlyCamera("FlyCamera", new Vector3(0, 5, -10), scene);

  // const manager = new AssetsManager(scene);

  // const city = manager.addMeshTask("city", "", "src/assets/", "city.obj");

  // manager.load();

  // var hdrTexture = new CubeTexture.CreateFromPrefilteredData("/Assets/environment.dds", scene);
  // hdrTexture.gammaSpace = false;

  SceneLoader.Append("src/assets/", "city.obj", scene, function (scene) {
    // scene.createDefaultCameraOrLight(true, true, true);
    // scene.createDefaultSkybox(true, 100, 0.3);
    // scene.activeCamera.lowerRadiusLimit = 2;
    // scene.activeCamera.upperRadiusLimit = 20;
    // scene.createDefaultCameraOrLight(true, true, true);
    // The default camera looks at the back of the asset.
    // Rotate the camera by 180 degrees to the front of the asset.
    scene.activeCamera.alpha += Math.PI;
    // camera.rollCorrect = 10;
    // camera.bankedTurn = true;
    // camera.bankedTurnLimit = Math.PI / 2;
    // camera.bankedTurnMultiplier = 1;
    // camera.attachControl(canvas, true);
  });

  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, true);

  var skybox = MeshBuilder.CreateBox("skyBox", { size: 1000.0 }, scene);
  var skyboxMaterial = new StandardMaterial("skyBox", scene);
  skyboxMaterial.backFaceCulling = false;
  skyboxMaterial.reflectionTexture = new CubeTexture(
    "src/assets/skybox",
    scene
  );
  skyboxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE;
  skyboxMaterial.diffuseColor = new Color3(0, 0, 0);
  skyboxMaterial.specularColor = new Color3(0, 0, 0);
  skybox.material = skyboxMaterial;

  // new HemisphericLight("light", Vector3.Up(), scene);

  // const box = MeshBuilder.CreateBox("box", { size: 2 }, scene);
  // const material = new StandardMaterial("box-material", scene);
  // material.diffuseColor = Color3.Blue();
  // box.material = material;

  engine.runRenderLoop(() => {
    scene.render();
  });
};

export { createScene };
