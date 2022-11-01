export default `
    //zweidimensionaler Vektor
    attribute vec2 pos;
    void main() {
        //berechnet neue Position der Übergebenen Vertices
        //gl_position ist vierdimensionaler Vektor in homogenen Koordinaten
        //der form vec4(x, y, z, w)
        gl_Position = vec4(pos, 0, 1);
    }
`;
