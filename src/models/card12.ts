import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardIdentification3Schema, type CardIdentification3 } from "./card-identification3.js";
import { partyIdentification1Schema, type PartyIdentification1 } from "./party-identification1.js";

/** Contains information about the counterparty card. */
export type Card12 = {
  /** Contains information about the cardholder. */
  cardHolder: PartyIdentification1;
  /** Contains the identification details of the card. */
  cardIdentification: CardIdentification3;
};

export const card12Schema: Schema<Card12> = s.object<Card12>({
  cardHolder: partyIdentification1Schema,
  cardIdentification: cardIdentification3Schema,
});
