import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { trackDataSchema, type TrackData } from "./track-data.js";

/**
 * This data structure could be CMS protected (EnvelopedData). In this case the data structure
 * SensitiveCardData is replaced by the data structure ProtectedCardData of type
 * ContentInformationType. When this data is protected, the exact content is unknown by the Sale
 * System, and might include all the information which are required by an external backup POI Server
 * to make a batch payment transaction in case of problem with the POI System. Sensitive information
 * related to the payment card, entered or read by the Sale System.
 */
export type SensitiveCardData = {
  /** Primary Account Number. */
  pan?: number;
  /** Card Sequence Number. If EntryMode is File, Keyed, or Manual. */
  cardSeqNumb?: number;
  /** Date after which the card cannot be used. If EntryMode is File. */
  expiryDate?: number;
  /** Magnetic track or magnetic ink characters line. If EntryMode is MagStripe or RFID . */
  trackData?: TrackData[];
};

export const sensitiveCardDataSchema: Schema<SensitiveCardData> = s.object<SensitiveCardData>({
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
