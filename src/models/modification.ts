import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status24Schema, type Status24 } from "./status24.js";

export type Modification = {
  direction?: string;
  id?: string;
  reference?: string;
  status?: Status24;
  type?: string;
};

export const modificationSchema: Schema<Modification> = s.object<Modification>({
  direction: s.optional(s.string()),
  id: s.optional(s.string()),
  reference: s.optional(s.string()),
  status: s.optional(s.lazy(() => status24Schema)),
  type: s.optional(s.string()),
});
