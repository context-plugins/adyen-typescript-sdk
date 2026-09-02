import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type File2 = {
  data: string;
  name: string;
};

export const file2Schema: Schema<File2> = s.object<File2>({
  data: s.string(),
  name: s.string(),
});
