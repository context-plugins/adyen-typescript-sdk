import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type181Schema, type Type181 } from "./type181.js";

export type Target1 = {
  id: string;
  type: Type181;
};

export const target1Schema: Schema<Target1> = s.object<Target1>({
  id: s.string(),
  type: type181Schema,
});
