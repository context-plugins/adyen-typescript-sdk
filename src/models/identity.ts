import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Identity = {
  /** The complete legal name of the individual or entity. */
  fullLegalName: string;
  /** A commonly used or human-readable name for the individual or entity. */
  name: string;
};

export const identitySchema: Schema<Identity> = s.object<Identity>({
  fullLegalName: s.string(),
  name: s.string(),
});
