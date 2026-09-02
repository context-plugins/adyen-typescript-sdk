import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExternalPlatform = {
  integrator?: string;
  name?: string;
  version?: string;
};

export const externalPlatformSchema: Schema<ExternalPlatform> = s.object<ExternalPlatform>({
  integrator: s.optional(s.string()),
  name: s.optional(s.string()),
  version: s.optional(s.string()),
});
