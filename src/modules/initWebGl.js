import { createShader } from "../shader/createShader.js";
import vertexGlsl from "../shader/vertexShader_shader_language.js";
import fragmentGlsl from "../shader/fragmentShader_shader_language.js";
import { createProgram } from "../shader/createProgram.js";
import { loadVertexData } from "./loadVertexData.js";

function initWebGl(gl) {
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexGlsl);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentGlsl);
    const prog = createProgram(gl, vertexShader, fragmentShader);
    //get the storage location of a position (pos)
    const positionAttributeLocation = gl.getAttribLocation(prog, "pos");
    //get the storage location of a uniform for example a transition
    const translationAttrib = gl.getUniformLocation(prog, "translation");
    //create a buffer onject
    const positionBuffer = gl.createBuffer();
    //bind the buffer object to target for example ARRAY_BUFFER
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    //write data into the buffer object
    gl.bufferData(gl.ARRAY_BUFFER, loadVertexData(), gl.STATIC_DRAW);
    //return javascript object with all relevant data/objects
    return {
        shader: {
            vertex_shader: vertexShader,
            fragment_shader: fragmentShader,
        },
        program: prog,
        attribLocation: {
            position: positionAttributeLocation,
            translation: translationAttrib,
        },
        bindingBuffer: positionBuffer,
    };
}

export { initWebGl };
