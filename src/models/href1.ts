import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The URL to where the user must be redirected after a successful payment. */
export type Href1 = {
  /** The full URL for the redirection. */
  href: string;
};

export const href1Schema: Schema<Href1> = s.object<Href1>({
  href: s.string(),
});
