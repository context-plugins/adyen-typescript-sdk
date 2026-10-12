import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { href4Schema, type Href4 } from "./href4.js";

export type IdealAuthenticateResponse = {
  /**
   * A short-lived URL that redirects the user to the iDEAL page that is required for
   * authentication.
   */
  redirectUrl?: Href4;
};

export const idealAuthenticateResponseSchema: Schema<IdealAuthenticateResponse> =
  s.object<IdealAuthenticateResponse>({
    redirectUrl: s.optional(s.lazy(() => href4Schema)),
  });
