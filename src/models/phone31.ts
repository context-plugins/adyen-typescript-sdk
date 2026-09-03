import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type410Schema, type Type410 } from "./type410.js";

export type Phone31 = {
  number: string;
  type: Type410;
};

export const phone31Schema: Schema<Phone31> = s.object<Phone31>({
  number: s.string(),
  type: type410Schema,
});
