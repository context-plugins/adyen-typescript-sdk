import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type33Schema, type Type33 } from "./type33.js";

export type CapabilityProblemEntityRecursive2 = {
  documents?: string[];
  id?: string;
  type?: Type33;
};

export const capabilityProblemEntityRecursive2Schema: Schema<CapabilityProblemEntityRecursive2> =
  s.object<CapabilityProblemEntityRecursive2>({
    documents: s.optional(s.array(s.string())),
    id: s.optional(s.string()),
    type: s.optional(s.lazy(() => type33Schema)),
  });
