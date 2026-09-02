import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type610Schema, type Type610 } from "./type610.js";

export type ReleaseUpdateDetails = {
  type?: Type610;
  updateAtFirstMaintenanceCall?: boolean;
};

export const releaseUpdateDetailsSchema: Schema<ReleaseUpdateDetails> = s.object<ReleaseUpdateDetails>({
  type: s.optional(s.lazy(() => type610Schema)),
  updateAtFirstMaintenanceCall: s.optional(s.boolean()),
});
