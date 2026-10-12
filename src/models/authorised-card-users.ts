import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthorisedCardUsers = {
  /**
   * The legal entity IDs of the authorized card users linked to the specified payment instrument.
   */
  legalEntityIds?: string[];
};

export const authorisedCardUsersSchema: Schema<AuthorisedCardUsers> = s.object<AuthorisedCardUsers>({
  legalEntityIds: s.optional(s.array(s.string())),
});
