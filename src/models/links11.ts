import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { href1Schema, type Href1 } from "./href1.js";
import { href6Schema, type Href6 } from "./href6.js";

/**
 * Contains redirection URLs to guide the user to the appropriate page, after a successful payment
 * or a cancellation.
 */
export type Links11 = {
  /** The URL to where the user must be redirected after a payment has been canceled. */
  cancel?: Href6;
  /** The URL to where the user must be redirected after a successful payment. */
  success?: Href1;
};

export const links11Schema: Schema<Links11> = s.object<Links11>({
  cancel: s.optional(s.lazy(() => href6Schema)),
  success: s.optional(s.lazy(() => href1Schema)),
});
