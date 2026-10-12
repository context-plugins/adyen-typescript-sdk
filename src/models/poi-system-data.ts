import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { poiSoftwareSchema, type PoiSoftware } from "./poi-software.js";
import { poiStatusSchema, type PoiStatus } from "./poi-status.js";

export type PoiSystemData = {
  /** Date and Time. In the response, the POI System gives its date and time to the Sale System. */
  dateTime: Date;
  /**
   * Information related to the software of the POI System which manages the Sale to POI protocol.
   * In a session allows identifying the product features of a POI System.
   */
  poiSoftware: PoiSoftware;
  /**
   * Indicate the availability of the POI Terminal components. The data element is absent if the
   * component is not part of the POI Terminal. State of a POI Terminal.
   */
  poiStatus?: PoiStatus;
};

export const poiSystemDataSchema: Schema<PoiSystemData> = s.object<PoiSystemData>({
  dateTime: s.dateTime(),
  poiSoftware: poiSoftwareSchema,
  poiStatus: s.optional(s.lazy(() => poiStatusSchema)),
  _keysMap: {
    dateTime: "DateTime",
    poiSoftware: "POISoftware",
    poiStatus: "POIStatus",
  },
});
