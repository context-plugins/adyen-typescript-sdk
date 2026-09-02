import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type File4 = {
  data: string;
  name: string;
};

export const file4Schema: Schema<File4> = s.object<File4>({
  data: s.string(),
  name: s.string(),
});
