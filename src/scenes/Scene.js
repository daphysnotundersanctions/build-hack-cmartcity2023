import {
  Engine,
  Scene,
  FreeCamera,
  MeshBuilder,
  StandardMaterial,
  Color3,
  AssetsManager,
  DirectionalLight,
  Vector3,
  ShadowGenerator,
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
  // scene.ambientColor = new Color3(0.3, 0.3, 0.3);
  engine.setHardwareScalingLevel(0.8);

  const camera = new FlyCamera("FlyCamera", new Vector3(0, 5, -10), scene);

  // const manager = new AssetsManager(scene);

  // const city = manager.addMeshTask("city", "", "src/assets/", "city.obj");

  // manager.load();

  // var hdrTexture = new CubeTexture.CreateFromPrefilteredData("/Assets/environment.dds", scene);
  // hdrTexture.gammaSpace = false;

  const city = SceneLoader.Append(
    "src/assets/",
    "city.obj",
    scene,
    function (scene) {
      scene.createDefaultCameraOrLight(true, true, true);

      scene.lights[0].dispose();
      var light = new DirectionalLight("light1", new Vector3(-2, -3, 1), scene);
      light.position = new Vector3(6, 9, 3);
      var generator = new ShadowGenerator(512, light);
      generator.useBlurExponentialShadowMap = true;
      generator.blurKernel = 32;

      for (var i = 0; i < scene.meshes.length; i++) {
        generator.addShadowCaster(scene.meshes[i]);
      }

      var helper = scene.createDefaultEnvironment({
        enableGroundMirror: true,
        groundShadowLevel: 0.6,
      });

      // scene.createDefaultSkybox(true, 100, 0.3);

      // scene.activeCamera.lowerRadiusLimit = 2;
      // scene.activeCamera.upperRadiusLimit = 20;
      // scene.createDefaultCameraOrLight(true, true, true);
      // The default camera looks at the back of the asset.
      // Rotate the camera by 180 degrees to the front of the asset.
      // scene.activeCamera.alpha += Math.PI;
      // camera.rollCorrect = 10;
      // camera.bankedTurn = true;
      // camera.bankedTurnLimit = Math.PI / 2;
      // camera.bankedTurnMultiplier = 1;
      // camera.attachControl(canvas, true);
      helper.setMainColor(Color3.Gray());
    }
  );

  const texture = new CubeTexture("src/assets/skybox", scene);
  scene.createDefaultSkybox(texture, true, 100);
  // OBJFileLoader.OPTIMIZE_WITH_UV = true;
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, true);

  // Cкайбокс
  // const skybox = MeshBuilder.CreateBox("skyBox", { size: 100.0 }, scene);
  // const skyboxMaterial = new StandardMaterial("skyBox", scene);

  // skyboxMaterial.backFaceCulling = false;
  // skyboxMaterial.disableLighting = true;

  // skyboxMaterial.reflectionTexture = new CubeTexture(
  //   "src/assets/skybox",
  //   scene
  // );
  // skyboxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE;
  // skyboxMaterial.diffuseColor = new Color3(0, 0, 0);
  // skyboxMaterial.specularColor = new Color3(0, 0, 0);
  // skybox.renderingGroupId = 0;
  // city.renderingGroupId = 1;
  // scene.createDefaultSkybox();

  // skybox.material = skyboxMaterial;

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
