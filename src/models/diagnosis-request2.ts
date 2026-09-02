import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DiagnosisRequest2 = {
  poiid?: string;
  hostDiagnosisFlag?: boolean;
  acquirerId?: number[];
};

export const diagnosisRequest2Schema: Schema<DiagnosisRequest2> = s.object<DiagnosisRequest2>({
  poiid: s.optional(s.string()),
  hostDiagnosisFlag: s.optional(s.boolean()),
  acquirerId: s.optional(s.array(s.number())),
  _keysMap: {
    poiid: "POIID",
    hostDiagnosisFlag: "HostDiagnosisFlag",
    acquirerId: "AcquirerID",
  },
});
