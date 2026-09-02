import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type510Schema, type Type510 } from "./type510.js";

export type Phone4 = {
  number: string;
  type: Type510;
};

export const phone4Schema: Schema<Phone4> = s.object<Phone4>({
  number: s.string(),
  type: type510Schema,
});
