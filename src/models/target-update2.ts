import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type181Schema, type Type181 } from "./type181.js";

export type TargetUpdate2 = {
  id?: string;
  type?: Type181;
};

export const targetUpdate2Schema: Schema<TargetUpdate2> = s.object<TargetUpdate2>({
  id: s.optional(s.string()),
  type: s.optional(s.lazy(() => type181Schema)),
});
