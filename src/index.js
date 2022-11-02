"use strict";

import { initContext } from "./modules/initContext.js";
import { initWebGl } from "./modules/initWebGl.js";

const gl = initContext("gl_context");
const initObject = initWebGl(gl);
gl.useProgram(initObject.program);

function draw(type, countVertices) {
    gl.drawArrays(type, 0, countVertices);
}

function render(gl) {
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    draw(gl.LINES, initObject.countVertices);
    draw(gl.LINE_LOOP, initObject.countVertices);
    //draw(gl.LINE_STRIP, initObject.countVertices);
    // gl.drawArrays(gl.LINES, 0, 132);
}

render(gl);
