import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { href5Schema, type Href5 } from "./href5.js";

export type ProfileRegistrationResponse = {
  redirectUrl?: Href5;
};

export const profileRegistrationResponseSchema: Schema<ProfileRegistrationResponse> =
  s.object<ProfileRegistrationResponse>({
    redirectUrl: s.optional(s.lazy(() => href5Schema)),
  });
