import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Name6 = {
  status: string;
};

export const name6Schema: Schema<Name6> = s.object<Name6>({
  status: s.string(),
});
