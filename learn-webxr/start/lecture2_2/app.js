import * as THREE from '../../libs/three/three.module.js';
import { OrbitControls } from '../../libs/three/jsm/OrbitControls.js';

class App{
	constructor(){
		const container = document.createElement( 'div' );
		document.body.appendChild( container );
    
		this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
		this.camera.position.set(0, 0, 4);

		
// 光を当てる
		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color(0xaaaaaa);

		const ambient = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 0.3);
		this.scene.add(ambient);

		const light = new THREE.DirectionalLight();
		light.position.set(0.2, 1, 1);
		this.scene.add(light);
// 

		this.renderer = new THREE.WebGL1Renderer({ antialias: true });
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		container.appendChild(this.renderer.domElement);

		this.renderer.setAnimationLoop(this.render.bind(this));

		// 物体を追加
		const geometry = new THREE.BoxBufferGeometry();
		const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });

		this.mesh = new THREE.Mesh(geometry, material);

		this.scene.add(this.mesh);
		// 

		const controls = new OrbitControls(this.camera, this.renderer.domElement);

        window.addEventListener('resize', this.resize.bind(this) );
	}	
    
    resize(){
        
    }
    
	render() {  
		// 物体を回転
		this.mesh.rotateY(0.01);
		// 
		this.renderer.render(this.scene, this.camera);
    }
}

export { App };
