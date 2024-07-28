import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
// export default defineConfig({
//   base: import.meta.env.DEV ? "/" : "/WayOfJedi/",
//   plugins: [react()],
// });

export default defineConfig(({ command, mode }) => {
  if (command === "serve") {
    return {
      base: "/",
      plugins: [react()],
    };
  } else {
    return {
      base: "/WayOfJedi/",
      plugins: [react()],
    };
  }
});
