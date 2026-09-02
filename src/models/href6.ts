import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Href6 = {
  href: string;
};

export const href6Schema: Schema<Href6> = s.object<Href6>({
  href: s.string(),
});
