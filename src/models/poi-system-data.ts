import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { poiSoftwareSchema, type PoiSoftware } from "./poi-software.js";
import { poiStatusSchema, type PoiStatus } from "./poi-status.js";

export type PoiSystemData = {
  dateTime: Date;
  poiSoftware: PoiSoftware;
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
