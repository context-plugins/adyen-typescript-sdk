import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { routeSchema, type Route } from "./route.js";

export type AccountVerificationRoutesResponse = {
  routes: Route[];
};

export const accountVerificationRoutesResponseSchema: Schema<AccountVerificationRoutesResponse> =
  s.object<AccountVerificationRoutesResponse>({
    routes: s.array(s.lazy(() => routeSchema)),
  });
