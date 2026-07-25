export const social = [
  { url: "mailto:itsgauravrawat2005@gmail.com", name: "mail" },
  { url: "https://github.com/GauravRawat05", name: "github" },
  { url: "https://linkedin.com/in/gauravsinghrawat1310", name: "linkedin" }
] as const satisfies { url: string; name: "mail" | "github" | "linkedin" }[];
