import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type172Schema, type Type172 } from "./type172.js";

export type CapabilityProblemEntityRecursive1 = {
  documents?: string[];
  id?: string;
  type?: Type172;
};

export const capabilityProblemEntityRecursive1Schema: Schema<CapabilityProblemEntityRecursive1> =
  s.object<CapabilityProblemEntityRecursive1>({
    documents: s.optional(s.array(s.string())),
    id: s.optional(s.string()),
    type: s.optional(s.lazy(() => type172Schema)),
  });
