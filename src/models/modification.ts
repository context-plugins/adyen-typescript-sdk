import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status24Schema, type Status24 } from "./status24.js";

export type Modification = {
  /** The direction of the money movement. */
  direction?: string;
  /** Our reference for the modification. */
  id?: string;
  /** Your reference for the modification, used internally within your platform. */
  reference?: string;
  /** The status of the transfer event. */
  status?: Status24;
  /** The type of transfer modification. */
  type?: string;
};

export const modificationSchema: Schema<Modification> = s.object<Modification>({
  direction: s.optional(s.string()),
  id: s.optional(s.string()),
  reference: s.optional(s.string()),
  status: s.optional(s.lazy(() => status24Schema)),
  type: s.optional(s.string()),
});
