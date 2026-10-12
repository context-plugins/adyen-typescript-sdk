import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { namespaceSchema, type Namespace } from "./namespace.js";

/** Contains information that explains why the transfer was rejected or returned by the network. */
export type NetworkReason2 = {
  /** The reason code provided by the network. */
  code?: string;
  /** The description of the reason code. */
  description?: string;
  /**
   * The namespace that corresponds to the reason code.
   *
   * Possible values:
   * * **ukFpsRejectionCode**
   * * **ukFpsReturnReasonCode**
   * * **usAchReturnReasonCode**
   * * **iso8583ResponseCode**
   */
  namespace?: Namespace;
};

export const networkReason2Schema: Schema<NetworkReason2> = s.object<NetworkReason2>({
  code: s.optional(s.string()),
  description: s.optional(s.string()),
  namespace: s.optional(s.lazy(() => namespaceSchema)),
});
