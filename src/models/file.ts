import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type File = {
  data: string;
  name: string;
};

export const fileSchema: Schema<File> = s.object<File>({
  data: s.string(),
  name: s.string(),
});
