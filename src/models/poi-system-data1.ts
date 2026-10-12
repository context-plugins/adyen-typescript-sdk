import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { poiSoftwareSchema, type PoiSoftware } from "./poi-software.js";
import { poiStatusSchema, type PoiStatus } from "./poi-status.js";

/** Information related to the POI System. Returned if the response result is Success. */
export type PoiSystemData1 = {
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

export const poiSystemData1Schema: Schema<PoiSystemData1> = s.object<PoiSystemData1>({
  dateTime: s.dateTime(),
  poiSoftware: poiSoftwareSchema,
  poiStatus: s.optional(s.lazy(() => poiStatusSchema)),
  _keysMap: {
    dateTime: "DateTime",
    poiSoftware: "POISoftware",
    poiStatus: "POIStatus",
  },
});
