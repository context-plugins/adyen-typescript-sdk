import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The URL to where the user must be redirected after a payment has been canceled. */
export type Href6 = {
  /** The full URL for the redirection. */
  href: string;
};

export const href6Schema: Schema<Href6> = s.object<Href6>({
  href: s.string(),
});
