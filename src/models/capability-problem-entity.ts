import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  capabilityProblemEntityRecursive2Schema,
  type CapabilityProblemEntityRecursive2,
} from "./capability-problem-entity-recursive2.js";
import { type111Schema, type Type111 } from "./type111.js";

export type CapabilityProblemEntity = {
  documents?: string[];
  id?: string;
  owner?: CapabilityProblemEntityRecursive2;
  type?: Type111;
};

export const capabilityProblemEntitySchema: Schema<CapabilityProblemEntity> =
  s.object<CapabilityProblemEntity>({
    documents: s.optional(s.array(s.string())),
    id: s.optional(s.string()),
    owner: s.optional(s.lazy(() => capabilityProblemEntityRecursive2Schema)),
    type: s.optional(s.lazy(() => type111Schema)),
  });
