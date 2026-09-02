import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthorisedCardUsers = {
  legalEntityIds?: string[];
};

export const authorisedCardUsersSchema: Schema<AuthorisedCardUsers> = s.object<AuthorisedCardUsers>({
  legalEntityIds: s.optional(s.array(s.string())),
});
