import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { trackFormat1Schema, type TrackFormat1 } from "./track-format1.js";

/**
 * Magnetic track or magnetic ink characters line. ISO 7813 - ISO 4909. Generic data structure for a
 * card track, used when the magstripe card reader is located on the Sale Terminal, or for magstripe
 * Card Reader device request. The data structure is also used to store the line at the bottom of a
 * bank check.
 */
export type TrackData = {
  /** Card track number. @default 2 */
  trackNumb?: number;
  /**
   * Card track format. Possible values:
   * * **AAMVA**
   * * **ISO**
   */
  trackFormat?: TrackFormat1;
  /** Card track content. */
  trackValue: string;
};

export const trackDataSchema: Schema<TrackData> = s.object<TrackData>({
  trackNumb: s.defaulted(s.int(), 2),
  trackFormat: s.optional(s.lazy(() => trackFormat1Schema)),
  trackValue: s.string(),
  _keysMap: {
    trackNumb: "TrackNumb",
    trackFormat: "TrackFormat",
    trackValue: "TrackValue",
  },
});
