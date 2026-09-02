import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { trackDataSchema, type TrackData } from "./track-data.js";

export type SensitiveCardData = {
  pan?: number;
  cardSeqNumb?: number;
  expiryDate?: number;
  trackData?: TrackData[];
};

export const sensitiveCardDataSchema: Schema<SensitiveCardData> = s.object<SensitiveCardData>({
  pan: s.optional(s.number()),
  cardSeqNumb: s.optional(s.number()),
  expiryDate: s.optional(s.number()),
  trackData: s.optional(s.array(s.lazy(() => trackDataSchema))),
  _keysMap: {
    pan: "PAN",
    cardSeqNumb: "CardSeqNumb",
    expiryDate: "ExpiryDate",
    trackData: "TrackData",
  },
});
