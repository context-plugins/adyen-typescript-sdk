import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Third-party developed platform used to initiate payment requests. For example, Magento, Zuora,
 * etc.
 */
export type ExternalPlatform = {
  /** External platform integrator. */
  integrator?: string;
  /** Name of the field. For example, Name of External Platform. */
  name?: string;
  /** Version of the field. For example, Version of External Platform. */
  version?: string;
};

export const externalPlatformSchema: Schema<ExternalPlatform> = s.object<ExternalPlatform>({
  integrator: s.optional(s.string()),
  name: s.optional(s.string()),
  version: s.optional(s.string()),
});
