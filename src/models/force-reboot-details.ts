import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type210Schema, type Type210 } from "./type210.js";

export type ForceRebootDetails = {
  type?: Type210;
};

export const forceRebootDetailsSchema: Schema<ForceRebootDetails> = s.object<ForceRebootDetails>({
  type: s.optional(s.lazy(() => type210Schema)),
});
