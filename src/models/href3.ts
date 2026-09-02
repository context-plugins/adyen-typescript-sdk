import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Href3 = {
  href: string;
};

export const href3Schema: Schema<Href3> = s.object<Href3>({
  href: s.string(),
});
