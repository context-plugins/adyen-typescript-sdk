import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthenticationSessionResponse = {
  /** The unique identifier of the session. */
  id?: string;
  /** The session token created. */
  token?: string;
};

export const authenticationSessionResponseSchema: Schema<AuthenticationSessionResponse> =
  s.object<AuthenticationSessionResponse>({
    id: s.optional(s.string()),
    token: s.optional(s.string()),
  });
