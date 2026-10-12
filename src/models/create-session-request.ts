import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateSessionRequest = {
  /** The unique identifier of your merchant account. */
  merchantAccount: string;
  /**
   * The setup token provided by the POS Mobile SDK.
   * - When using the Android POS Mobile SDK, obtain the token through the
   *   `AuthenticationService.authenticate(setupToken)` callback of `AuthenticationService`.
   * - When using the iOS POS Mobile SDK, obtain the token through the
   *   `PaymentServiceDelegate.register(with:)` callback of `PaymentServiceDelegate`.
   */
  setupToken: string;
  /** The unique identifier of the store that you want to process transactions for. */
  store?: string;
};

export const createSessionRequestSchema: Schema<CreateSessionRequest> = s.object<CreateSessionRequest>({
  merchantAccount: s.string(),
  setupToken: s.string(),
  store: s.optional(s.string()),
});
