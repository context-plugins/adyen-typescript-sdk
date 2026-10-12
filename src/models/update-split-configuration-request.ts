import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateSplitConfigurationRequest = {
  /** Your description for the split configuration. */
  description: string;
};

export const updateSplitConfigurationRequestSchema: Schema<UpdateSplitConfigurationRequest> =
  s.object<UpdateSplitConfigurationRequest>({
    description: s.string(),
  });
