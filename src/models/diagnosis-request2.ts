import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Content of the Diagnosis Request message. */
export type DiagnosisRequest2 = {
  /**
   * Identification of a POI System or a POI Terminal for the Sale to POI protocol.
   * MessageHeader.POIID.
   */
  poiid?: string;
  /** Indicates if Host Diagnosis are required. @default false */
  hostDiagnosisFlag?: boolean;
  /** Identification of the Acquirer. Present if requesting the diagnosis of these hosts only. */
  acquirerId?: number[];
};

export const diagnosisRequest2Schema: Schema<DiagnosisRequest2> = s.object<DiagnosisRequest2>({
  poiid: s.optional(s.string()),
  hostDiagnosisFlag: s.defaulted(s.boolean(), false),
  acquirerId: s.optional(s.array(s.int())),
  _keysMap: {
    poiid: "POIID",
    hostDiagnosisFlag: "HostDiagnosisFlag",
    acquirerId: "AcquirerID",
  },
});
