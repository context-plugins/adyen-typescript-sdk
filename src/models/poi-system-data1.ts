import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { poiSoftwareSchema, type PoiSoftware } from "./poi-software.js";
import { poiStatusSchema, type PoiStatus } from "./poi-status.js";

export type PoiSystemData1 = {
  dateTime: Date;
  poiSoftware: PoiSoftware;
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
