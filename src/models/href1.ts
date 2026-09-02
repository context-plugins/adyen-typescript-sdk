import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Href1 = {
  href: string;
};

export const href1Schema: Schema<Href1> = s.object<Href1>({
  href: s.string(),
});
