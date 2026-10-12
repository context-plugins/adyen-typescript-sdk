import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BalancePlatform = {
  /** Your description of the balance platform. */
  description?: string;
  /** The unique identifier of the balance platform. */
  id: string;
  /**
   * The status of the balance platform.
   *
   * Possible values: **Active**, **Inactive**, **Closed**, **Suspended**.
   */
  status?: string;
};

export const balancePlatformSchema: Schema<BalancePlatform> = s.object<BalancePlatform>({
  description: s.optional(s.string()),
  id: s.string(),
  status: s.optional(s.string()),
});
