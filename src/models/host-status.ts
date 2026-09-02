import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HostStatus = {
  acquirerId: number;
  isReachableFlag?: boolean;
};

export const hostStatusSchema: Schema<HostStatus> = s.object<HostStatus>({
  acquirerId: s.number(),
  isReachableFlag: s.optional(s.boolean()),
  _keysMap: {
    acquirerId: "AcquirerID",
    isReachableFlag: "IsReachableFlag",
  },
});
