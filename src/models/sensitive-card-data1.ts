import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { trackDataSchema, type TrackData } from "./track-data.js";

/**
 * Sensitive information related to the payment card, entered or read by the Sale System. If
 * structure non empty and unprotected.
 */
export type SensitiveCardData1 = {
  /** Primary Account Number. */
  pan?: number;
  /** Card Sequence Number. If EntryMode is File, Keyed, or Manual. */
  cardSeqNumb?: number;
  /** Date after which the card cannot be used. If EntryMode is File. */
  expiryDate?: number;
  /** Magnetic track or magnetic ink characters line. If EntryMode is MagStripe or RFID . */
  trackData?: TrackData[];
};

export const sensitiveCardData1Schema: Schema<SensitiveCardData1> = s.object<SensitiveCardData1>({
  pan: s.optional(s.int()),
  cardSeqNumb: s.optional(s.int()),
  expiryDate: s.optional(s.int()),
  trackData: s.optional(s.array(s.lazy(() => trackDataSchema))),
  _keysMap: {
    pan: "PAN",
    cardSeqNumb: "CardSeqNumb",
    expiryDate: "ExpiryDate",
    trackData: "TrackData",
  },
});
