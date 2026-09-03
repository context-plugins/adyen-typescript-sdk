import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type181Schema, type Type181 } from "./type181.js";

export type TargetUpdate = {
  id?: string;
  type?: Type181;
};

export const targetUpdateSchema: Schema<TargetUpdate> = s.object<TargetUpdate>({
  id: s.optional(s.string()),
  type: s.optional(s.lazy(() => type181Schema)),
});
