import { createShader } from "../shader/createShader.js";
import vertexGlsl from "../shader/vertexShader_shader_language.js";
import fragmentGlsl from "../shader/fragmentShader_shader_language.js";
import { createProgram } from "../shader/createProgram.js";
import { loadVertexData } from "./loadVertexData.js";

function initBuffer(gl, vertices) {
    const n = vertices.length / 2;
    //create a buffer object
    const vertexBuffer = gl.createBuffer();
    //bind the buffer object to target (for example ARRAY_BUFFER)
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    //write data into the buffer object
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    return n;
}

function initWebGl(gl) {
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexGlsl);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentGlsl);
    const prog = createProgram(gl, vertexShader, fragmentShader);
    //get the storage location of a position (pos)
    const positionAttributeLocation = gl.getAttribLocation(prog, "pos");
    //get the storage location of a uniform for example a transition
    const translationAttrib = gl.getUniformLocation(prog, "translation");
    const countVertices = initBuffer(gl, loadVertexData());
    //assign the buffer object to a position variable (pos in vertex shader)
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);
    //enable the assignment to a position variable (pos in vertex shader)
    gl.enableVertexAttribArray(positionAttributeLocation);
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
        countVertices: countVertices,
    };
}

export { initWebGl };
