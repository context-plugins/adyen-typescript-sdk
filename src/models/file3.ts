import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type File3 = {
  data: string;
  name: string;
};

export const file3Schema: Schema<File3> = s.object<File3>({
  data: s.string(),
  name: s.string(),
});
