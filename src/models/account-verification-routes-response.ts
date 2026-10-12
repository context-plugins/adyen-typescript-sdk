import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { routeSchema, type Route } from "./route.js";

export type AccountVerificationRoutesResponse = {
  /**
   * This array lists available open banking redirection links, each with its associated provider
   * metadata.
   */
  routes: Route[];
};

export const accountVerificationRoutesResponseSchema: Schema<AccountVerificationRoutesResponse> =
  s.object<AccountVerificationRoutesResponse>({
    routes: s.array(s.lazy(() => routeSchema)),
  });
