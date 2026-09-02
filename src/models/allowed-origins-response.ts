import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { allowedOriginSchema, type AllowedOrigin } from "./allowed-origin.js";

export type AllowedOriginsResponse = {
  data?: AllowedOrigin[];
};

export const allowedOriginsResponseSchema: Schema<AllowedOriginsResponse> = s.object<AllowedOriginsResponse>({
  data: s.optional(s.array(s.lazy(() => allowedOriginSchema))),
});
