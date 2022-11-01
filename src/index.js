"use strict";

import { initContext } from "./modules/initContext.js";
import { initWebGl } from "./modules/initWebGl.js";

const gl = initContext("gl_context");
const initObject = initWebGl(gl);
function initBuffer(gl) {
    gl.useProgram(initObject.program);
    //assign the buffer object to a position variable (pos in vertex shader)
    gl.vertexAttribPointer(
        initObject.attribLocation.positionAttributeLocation,
        2,
        gl.FLOAT,
        false,
        0,
        0
    );
    //enable the assignment to a position variable (pos in vertex shader)
    gl.enableVertexAttribArray(
        initObject.attribLocation.positionAttributeLocation
    );
}
function render(gl) {
    initBuffer(gl);
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.LINES, 0, 132);
}

render(gl);
