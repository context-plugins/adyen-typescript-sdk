import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Indicate the reachability of the host by the POI Terminal. State of a Host. */
export type HostStatus = {
  /** Identification of the Acquirer. */
  acquirerId: number;
  /** Indicate if a Host is reachable. @default true */
  isReachableFlag?: boolean;
};

export const hostStatusSchema: Schema<HostStatus> = s.object<HostStatus>({
  acquirerId: s.int(),
  isReachableFlag: s.defaulted(s.boolean(), true),
  _keysMap: {
    acquirerId: "AcquirerID",
    isReachableFlag: "IsReachableFlag",
  },
});
