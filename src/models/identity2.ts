import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains the identity details of the party. */
export type Identity2 = {
  /** The complete legal name of the individual or entity. */
  fullLegalName: string;
  /** A commonly used or human-readable name for the individual or entity. */
  name: string;
};

export const identity2Schema: Schema<Identity2> = s.object<Identity2>({
  fullLegalName: s.string(),
  name: s.string(),
});
