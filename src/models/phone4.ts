import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type410Schema, type Type410 } from "./type410.js";

export type Phone4 = {
  number: string;
  type: Type410;
};

export const phone4Schema: Schema<Phone4> = s.object<Phone4>({
  number: s.string(),
  type: type410Schema,
});
