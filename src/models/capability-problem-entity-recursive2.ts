import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type33Schema, type Type33 } from "./type33.js";

/** Contains details about the owner of the entity that has an error. */
export type CapabilityProblemEntityRecursive2 = {
  /**
   * List of document IDs to which the verification errors related to the capabilities correspond
   * to.
   */
  documents?: string[];
  /** The ID of the entity. */
  id?: string;
  /**
   * Type of entity.
   *
   * Possible values: **LegalEntity**, **BankAccount**, **Document**.
   */
  type?: Type33;
};

export const capabilityProblemEntityRecursive2Schema: Schema<CapabilityProblemEntityRecursive2> =
  s.object<CapabilityProblemEntityRecursive2>({
    documents: s.optional(s.array(s.string())),
    id: s.optional(s.string()),
    type: s.optional(s.lazy(() => type33Schema)),
  });
