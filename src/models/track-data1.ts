import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { trackFormat1Schema, type TrackFormat1 } from "./track-format1.js";

/** Magnetic track or magnetic ink characters line. Mandatory if CheckNumber absent. */
export type TrackData1 = {
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

export const trackData1Schema: Schema<TrackData1> = s.object<TrackData1>({
  trackNumb: s.defaulted(s.int(), 2),
  trackFormat: s.optional(s.lazy(() => trackFormat1Schema)),
  trackValue: s.string(),
  _keysMap: {
    trackNumb: "TrackNumb",
    trackFormat: "TrackFormat",
    trackValue: "TrackValue",
  },
});
