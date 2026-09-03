import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type410Schema, type Type410 } from "./type410.js";

export type Phone11 = {
  number: string;
  type: Type410;
};

export const phone11Schema: Schema<Phone11> = s.object<Phone11>({
  number: s.string(),
  type: type410Schema,
});
