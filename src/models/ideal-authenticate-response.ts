import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { href4Schema, type Href4 } from "./href4.js";

export type IdealAuthenticateResponse = {
  redirectUrl?: Href4;
};

export const idealAuthenticateResponseSchema: Schema<IdealAuthenticateResponse> =
  s.object<IdealAuthenticateResponse>({
    redirectUrl: s.optional(s.lazy(() => href4Schema)),
  });
