import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type510Schema, type Type510 } from "./type510.js";

export type Phone31 = {
  number: string;
  type: Type510;
};

export const phone31Schema: Schema<Phone31> = s.object<Phone31>({
  number: s.string(),
  type: type510Schema,
});
