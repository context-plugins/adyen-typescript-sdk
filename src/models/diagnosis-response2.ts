import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { hostStatusSchema, type HostStatus } from "./host-status.js";
import { poiStatus1Schema, type PoiStatus1 } from "./poi-status1.js";
import { response11Schema, type Response11 } from "./response11.js";

/** Content of the Diagnosis Response message. */
export type DiagnosisResponse2 = {
  /** Result of a message request processing. */
  response: Response11;
  /** State of a POI Terminal. If `Response.Result` is Success. */
  poiStatus?: PoiStatus1;
  /** State of a Host. */
  hostStatus?: HostStatus[];
};

export const diagnosisResponse2Schema: Schema<DiagnosisResponse2> = s.object<DiagnosisResponse2>({
  response: response11Schema,
  poiStatus: s.optional(s.lazy(() => poiStatus1Schema)),
  hostStatus: s.optional(s.array(s.lazy(() => hostStatusSchema))),
  _keysMap: {
    response: "Response",
    poiStatus: "POIStatus",
    hostStatus: "HostStatus",
  },
});
