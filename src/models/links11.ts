import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { href1Schema, type Href1 } from "./href1.js";
import { href6Schema, type Href6 } from "./href6.js";

export type Links11 = {
  cancel?: Href6;
  success?: Href1;
};

export const links11Schema: Schema<Links11> = s.object<Links11>({
  cancel: s.optional(s.lazy(() => href6Schema)),
  success: s.optional(s.lazy(() => href1Schema)),
});
