import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type510Schema, type Type510 } from "./type510.js";

export type Phone11 = {
  number: string;
  type: Type510;
};

export const phone11Schema: Schema<Phone11> = s.object<Phone11>({
  number: s.string(),
  type: type510Schema,
});
