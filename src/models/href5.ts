import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A short-lived URL that redirects the user to the iDEAL profile registration page. */
export type Href5 = {
  /** The full URL for the redirection. */
  href: string;
};

export const href5Schema: Schema<Href5> = s.object<Href5>({
  href: s.string(),
});
