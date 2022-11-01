//Fragment Shader dienen unter anderem der Einfärbung
export default `
    void main(){
        //vierdimensionaler Vektor vec4(1, 1, 1, 1, 1)
        //RGB + Alpha Kanal
        gl_FragColor = vec4(1, 0, 0, 1);
    }
`;
