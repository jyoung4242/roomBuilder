export const pixelSwap = `#version 300 es
precision mediump float;
// Uniforms for the original colors and their replacements
const vec3 colorArray[8] = vec3[8](
    vec3(1.0, 1.0, 1.0),  // White
    vec3(0.0, 0.0, 0.0),  // Black
    vec3(0.4,0.467,0.51),  // first custom shade
    vec3(0.404,0.478,0.518),
    vec3(0.42,0.506,0.541),
    vec3(0.42,0.51,0.541),
    vec3(0.424,0.514,0.549),
    vec3(0.424,0.518,0.549)
);
uniform vec3 u_replacementColors[8];


// The texture being sampled
uniform sampler2D u_graphic;

// Texture coordinates
in vec2 v_uv;
in vec2 v_screenuv;

out vec4 fragColor;

void main() {
    vec4 pixelColor = texture(u_graphic, v_uv);

    // Iterate through the color arrays to find a match
    for (int i = 0; i < 8; i++) {

        // Check if the current pixel color matches any of the original colors
        if (distance(pixelColor.rgb, colorArray[i]) < 0.01) {
            vec3 newColor = vec3(u_replacementColors[i].r, u_replacementColors[i].g, u_replacementColors[i].b);
            pixelColor.rgb = newColor;
            break;
        }
        
    }
    vec3 newColor = vec3(u_replacementColors[0].r, u_replacementColors[0].g, u_replacementColors[0].b);
    fragColor = vec4(newColor,1.0);
}

`;
