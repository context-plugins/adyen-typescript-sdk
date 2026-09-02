import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Href5 = {
  href: string;
};

export const href5Schema: Schema<Href5> = s.object<Href5>({
  href: s.string(),
});
