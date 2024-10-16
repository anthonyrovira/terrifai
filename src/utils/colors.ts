type ColorInfo = {
  hex: string;
  label: string;
};

type ColorPalette = {
  [key: string]: ColorInfo;
};

const colorPalette: ColorPalette = {
  black: { hex: "#000000", label: "Black" },
  white: { hex: "#FFFFFF", label: "White" },
  midnightBlue: { hex: "#191970", label: "Midnight Blue" },
  royalBlue: { hex: "#4169E1", label: "Royal Blue" },
  skyBlue: { hex: "#87CEEB", label: "Sky Blue" },
  turquoise: { hex: "#40E0D0", label: "Turquoise" },
  emeraldGreen: { hex: "#50C878", label: "Emerald Green" },
  limeGreen: { hex: "#32CD32", label: "Lime Green" },
  olive: { hex: "#808000", label: "Olive" },
  goldenrod: { hex: "#DAA520", label: "Goldenrod" },
  saffron: { hex: "#F4C430", label: "Saffron" },
  tangerine: { hex: "#F28500", label: "Tangerine" },
  coral: { hex: "#FF7F50", label: "Coral" },
  crimson: { hex: "#DC143C", label: "Crimson" },
  maroon: { hex: "#800000", label: "Maroon" },
  purple: { hex: "#800080", label: "Purple" },
  plum: { hex: "#DDA0DD", label: "Plum" },
  lavender: { hex: "#E6E6FA", label: "Lavender" },
  lilac: { hex: "#C8A2C8", label: "Lilac" },
  periwinkle: { hex: "#CCCCFF", label: "Periwinkle" },
  mauve: { hex: "#E0B0FF", label: "Mauve" },
  taupe: { hex: "#483C32", label: "Taupe" },
  sepia: { hex: "#704214", label: "Sepia" },
  sienna: { hex: "#A0522D", label: "Sienna" },
  khaki: { hex: "#C3B091", label: "Khaki" },
  ivory: { hex: "#FFFFF0", label: "Ivory" },
  pearl: { hex: "#FDEEF4", label: "Pearl" },
  platinum: { hex: "#E5E4E2", label: "Platinum" },
  charcoal: { hex: "#36454F", label: "Charcoal" },
  jet: { hex: "#343434", label: "Jet" },
  onyx: { hex: "#353839", label: "Onyx" },
  ebony: { hex: "#555D50", label: "Ebony" },
  slate: { hex: "#708090", label: "Slate" },
};

export default colorPalette;
