import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  capabilityProblemEntityRecursive1Schema,
  type CapabilityProblemEntityRecursive1,
} from "./capability-problem-entity-recursive1.js";
import { type172Schema, type Type172 } from "./type172.js";

export type CapabilityProblemEntity1 = {
  documents?: string[];
  id?: string;
  owner?: CapabilityProblemEntityRecursive1;
  type?: Type172;
};

export const capabilityProblemEntity1Schema: Schema<CapabilityProblemEntity1> =
  s.object<CapabilityProblemEntity1>({
    documents: s.optional(s.array(s.string())),
    id: s.optional(s.string()),
    owner: s.optional(s.lazy(() => capabilityProblemEntityRecursive1Schema)),
    type: s.optional(s.lazy(() => type172Schema)),
  });
