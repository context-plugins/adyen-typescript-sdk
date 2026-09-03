import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  capabilityProblemEntityRecursive2Schema,
  type CapabilityProblemEntityRecursive2,
} from "./capability-problem-entity-recursive2.js";
import { type33Schema, type Type33 } from "./type33.js";

export type CapabilityProblemEntity2 = {
  documents?: string[];
  id?: string;
  owner?: CapabilityProblemEntityRecursive2;
  type?: Type33;
};

export const capabilityProblemEntity2Schema: Schema<CapabilityProblemEntity2> =
  s.object<CapabilityProblemEntity2>({
    documents: s.optional(s.array(s.string())),
    id: s.optional(s.string()),
    owner: s.optional(s.lazy(() => capabilityProblemEntityRecursive2Schema)),
    type: s.optional(s.lazy(() => type33Schema)),
  });
