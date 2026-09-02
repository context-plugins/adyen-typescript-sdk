import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Href4 = {
  href: string;
};

export const href4Schema: Schema<Href4> = s.object<Href4>({
  href: s.string(),
});
