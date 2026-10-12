import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetPciUrlRequest = {
  /** The account holder code you provided when you created the account holder. */
  accountHolderCode: string;
  /**
   * The URL where the account holder will be redirected back to after they fill out the
   * questionnaire, or if their session times out. Maximum length of 500 characters.
   */
  returnUrl?: string;
};

export const getPciUrlRequestSchema: Schema<GetPciUrlRequest> = s.object<GetPciUrlRequest>({
  accountHolderCode: s.string(),
  returnUrl: s.optional(s.string()),
});
