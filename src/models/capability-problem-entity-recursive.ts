import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type111Schema, type Type111 } from "./type111.js";

export type CapabilityProblemEntityRecursive = {
  documents?: string[];
  id?: string;
  type?: Type111;
};

export const capabilityProblemEntityRecursiveSchema: Schema<CapabilityProblemEntityRecursive> =
  s.object<CapabilityProblemEntityRecursive>({
    documents: s.optional(s.array(s.string())),
    id: s.optional(s.string()),
    type: s.optional(s.lazy(() => type111Schema)),
  });
