import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type61Schema, type Type61 } from "./type61.js";

export type ReleaseUpdateDetails = {
  type?: Type61;
  updateAtFirstMaintenanceCall?: boolean;
};

export const releaseUpdateDetailsSchema: Schema<ReleaseUpdateDetails> = s.object<ReleaseUpdateDetails>({
  type: s.optional(s.lazy(() => type61Schema)),
  updateAtFirstMaintenanceCall: s.optional(s.boolean()),
});
