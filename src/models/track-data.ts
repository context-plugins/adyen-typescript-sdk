import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { trackFormat1Schema, type TrackFormat1 } from "./track-format1.js";

export type TrackData = {
  trackNumb?: number;
  trackFormat?: TrackFormat1;
  trackValue: string;
};

export const trackDataSchema: Schema<TrackData> = s.object<TrackData>({
  trackNumb: s.optional(s.number()),
  trackFormat: s.optional(s.lazy(() => trackFormat1Schema)),
  trackValue: s.string(),
  _keysMap: {
    trackNumb: "TrackNumb",
    trackFormat: "TrackFormat",
    trackValue: "TrackValue",
  },
});
