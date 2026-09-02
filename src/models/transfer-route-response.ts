import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferRouteSchema, type TransferRoute } from "./transfer-route.js";

export type TransferRouteResponse = {
  transferRoutes?: TransferRoute[];
};

export const transferRouteResponseSchema: Schema<TransferRouteResponse> = s.object<TransferRouteResponse>({
  transferRoutes: s.optional(s.array(s.lazy(() => transferRouteSchema))),
});
