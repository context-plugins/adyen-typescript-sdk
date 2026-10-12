import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  capabilityProblemEntityRecursive2Schema,
  type CapabilityProblemEntityRecursive2,
} from "./capability-problem-entity-recursive2.js";
import { type33Schema, type Type33 } from "./type33.js";

/** Contains the type of the entity and the corresponding ID. */
export type CapabilityProblemEntity2 = {
  /**
   * List of document IDs to which the verification errors related to the capabilities correspond
   * to.
   */
  documents?: string[];
  /** The ID of the entity. */
  id?: string;
  /** Contains details about the owner of the entity that has an error. */
  owner?: CapabilityProblemEntityRecursive2;
  /**
   * Type of entity.
   *
   * Possible values: **LegalEntity**, **BankAccount**, **Document**.
   */
  type?: Type33;
};

export const capabilityProblemEntity2Schema: Schema<CapabilityProblemEntity2> =
  s.object<CapabilityProblemEntity2>({
    documents: s.optional(s.array(s.string())),
    id: s.optional(s.string()),
    owner: s.optional(s.lazy(() => capabilityProblemEntityRecursive2Schema)),
    type: s.optional(s.lazy(() => type33Schema)),
  });
