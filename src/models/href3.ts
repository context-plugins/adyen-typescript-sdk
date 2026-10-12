import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A short-lived URL that redirects the user to the iDEAL profile management page. */
export type Href3 = {
  /** The full URL for the redirection. */
  href: string;
};

export const href3Schema: Schema<Href3> = s.object<Href3>({
  href: s.string(),
});
