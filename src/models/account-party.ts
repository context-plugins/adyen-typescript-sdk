import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { identity2Schema, type Identity2 } from "./identity2.js";
import { partyRole2Schema, type PartyRole2 } from "./party-role2.js";

export type AccountParty = {
  identity: Identity2;
  role: PartyRole2;
};

export const accountPartySchema: Schema<AccountParty> = s.object<AccountParty>({
  identity: identity2Schema,
  role: partyRole2Schema,
});
