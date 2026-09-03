import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type181Schema, type Type181 } from "./type181.js";

export type Target = {
  id: string;
  type: Type181;
};

export const targetSchema: Schema<Target> = s.object<Target>({
  id: s.string(),
  type: type181Schema,
});
