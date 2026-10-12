import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Href = {
  /** The full URL for the redirection. */
  href: string;
};

export const hrefSchema: Schema<Href> = s.object<Href>({
  href: s.string(),
});
