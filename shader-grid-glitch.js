/* global AFRAME, THREE */

const glsl = require('glslify');
const vertexShader = glsl.file('../shaders/vertex.glsl');
const fragmentShader = glsl.file('../shaders/fragment.glsl');

AFRAME.registerComponent('material-grid-glitch', {
  schema: {color: {type: 'color'}},

  /**
   * Creates a new THREE.ShaderMaterial using the two shaders defined
   * in vertex.glsl and fragment.glsl.
   */
  init: function () {
    const data = this.data;
  
    this.material  = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0.0 },
        color: { value: new THREE.Color(data.color) }
      },
      vertexShader,
      fragmentShader
    });

    this.applyToMesh();
    this.el.addEventListener('model-loaded', () => this.applyToMesh());
  },


  /**
   * Update the ShaderMaterial when component data changes.
   */
  update: function () {
    this.material.uniforms.color.value.set(this.data.color);
  },
    
  /**
   * Apply the material to the current entity.
   */
  applyToMesh: function() {
    const mesh = this.el.getObject3D('mesh');
    if (mesh) {
      mesh.material = this.material;
    }
  },

  /**
   * On each frame, update the 'time' uniform in the shaders.
   */
  tick: function (t) {
    this.material.uniforms.time.value = t / 1000;
  }
  
})
