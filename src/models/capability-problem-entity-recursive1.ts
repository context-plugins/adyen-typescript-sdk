import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type311Schema, type Type311 } from "./type311.js";

export type CapabilityProblemEntityRecursive1 = {
  documents?: string[];
  id?: string;
  type?: Type311;
};

export const capabilityProblemEntityRecursive1Schema: Schema<CapabilityProblemEntityRecursive1> =
  s.object<CapabilityProblemEntityRecursive1>({
    documents: s.optional(s.array(s.string())),
    id: s.optional(s.string()),
    type: s.optional(s.lazy(() => type311Schema)),
  });
