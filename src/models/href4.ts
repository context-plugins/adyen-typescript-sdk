import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A short-lived URL that redirects the user to the iDEAL page that is required for authentication.
 */
export type Href4 = {
  /** The full URL for the redirection. */
  href: string;
};

export const href4Schema: Schema<Href4> = s.object<Href4>({
  href: s.string(),
});
