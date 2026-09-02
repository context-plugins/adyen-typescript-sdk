import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type File1 = {
  data: string;
  name: string;
};

export const file1Schema: Schema<File1> = s.object<File1>({
  data: s.string(),
  name: s.string(),
});
