import { AmbientLight, DirectionalLight, Object3D, PCFSoftShadowMap, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { OrbitControls } from '../utils/OrbitControls';

export class BasicScene {
  element!: HTMLElement;
  scene = new Scene();
  camera!: PerspectiveCamera;
  renderer!: WebGLRenderer;

  public setup(element: HTMLElement) {
    this.element = element;
    this.camera = this.createCamera(this.scene, element);
    this.renderer = this.createRenderer(element);
    
    this.createDirectionalLight();
    new OrbitControls(this.camera, element)
    this.scene.add(new AmbientLight(0xffffff, 0.6));

    window.addEventListener('resize', () => {
      this.onResize();
    }, false);
  }

  public add(...obj: Object3D[]) {
    this.scene.add(...obj)
  }

  private createCamera(scene: Scene, element: HTMLElement) {
    const camera = new PerspectiveCamera(75, element.clientWidth / element.clientHeight, 0.1, 3000);
    camera.position.z = 16;
    scene.add(camera);
    return camera;
  }

  private createRenderer(element: HTMLElement) {
    const renderer = new WebGLRenderer({ antialias: true });
    renderer.setSize(element.clientWidth, element.clientHeight);
    renderer.setPixelRatio(2);
    renderer.setClearColor("#ececec", 0);
    renderer.setAnimationLoop(() => this.render());
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;
    renderer.localClippingEnabled = true;
    renderer.domElement.removeAttribute("data-engine")
    element.appendChild(renderer.domElement);
    return renderer;
  }

  private createDirectionalLight() {
    const light = new DirectionalLight(0xffffff, 0.3);
    light.position.set(50, 30, 50);
    light.castShadow = true;
    
    light.shadow.mapSize.width = 512;
    light.shadow.mapSize.height = 512;
    
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 1000;

    light.shadow.camera.top = 200;
    light.shadow.camera.right = 200;
    light.shadow.camera.bottom = -200;
    light.shadow.camera.left = -200;
    this.scene.add(light);
  }

  private onResize() {
    this.renderer.setSize(this.element.clientWidth, this.element.clientHeight);

    this.camera.aspect = this.element.clientWidth / this.element.clientHeight;
    this.camera.updateProjectionMatrix();
  }

  private render() {
    this.renderer.render(this.scene, this.camera);
    this.camera.updateMatrixWorld();
  }
}
