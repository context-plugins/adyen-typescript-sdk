import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type181Schema, type Type181 } from "./type181.js";

export type Target3 = {
  id: string;
  type: Type181;
};

export const target3Schema: Schema<Target3> = s.object<Target3>({
  id: s.string(),
  type: type181Schema,
});
