import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status16Schema, type Status16 } from "./status16.js";

export type UpdateNetworkTokenRequest = {
  /**
   * The new status of the network token. Possible values: **active**, **suspended**, **closed**.
   * The **closed** status is final and cannot be changed.
   */
  status?: Status16;
};

export const updateNetworkTokenRequestSchema: Schema<UpdateNetworkTokenRequest> =
  s.object<UpdateNetworkTokenRequest>({
    status: s.optional(s.lazy(() => status16Schema)),
  });
