import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type33Schema, type Type33 } from "./type33.js";

export type CapabilityProblemEntityRecursive = {
  documents?: string[];
  id?: string;
  type?: Type33;
};

export const capabilityProblemEntityRecursiveSchema: Schema<CapabilityProblemEntityRecursive> =
  s.object<CapabilityProblemEntityRecursive>({
    documents: s.optional(s.array(s.string())),
    id: s.optional(s.string()),
    type: s.optional(s.lazy(() => type33Schema)),
  });
