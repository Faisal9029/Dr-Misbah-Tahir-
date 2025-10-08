// studio/schemas/index.ts
import procedure from "./procedure";
import video from "./video"; 
// Agar aur schemas hain toh unko bhi import karein

export const schema = {
  types: [procedure, video], // ✅ Procedure ko add karein
};