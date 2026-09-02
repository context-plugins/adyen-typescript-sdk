import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  threeDsReqPriorAuthMethodSchema,
  type ThreeDsReqPriorAuthMethod,
} from "./three-ds-req-prior-auth-method.js";

export type ThreeDsRequestorPriorAuthenticationInfo = {
  threeDsReqPriorAuthData?: string;
  threeDsReqPriorAuthMethod?: ThreeDsReqPriorAuthMethod;
  threeDsReqPriorAuthTimestamp?: string;
  threeDsReqPriorRef?: string;
};

export const threeDsRequestorPriorAuthenticationInfoSchema: Schema<ThreeDsRequestorPriorAuthenticationInfo> =
  s.object<ThreeDsRequestorPriorAuthenticationInfo>({
    threeDsReqPriorAuthData: s.optional(s.string()),
    threeDsReqPriorAuthMethod: s.optional(s.lazy(() => threeDsReqPriorAuthMethodSchema)),
    threeDsReqPriorAuthTimestamp: s.optional(s.string()),
    threeDsReqPriorRef: s.optional(s.string()),
    _keysMap: {
      threeDsReqPriorAuthData: "threeDSReqPriorAuthData",
      threeDsReqPriorAuthMethod: "threeDSReqPriorAuthMethod",
      threeDsReqPriorAuthTimestamp: "threeDSReqPriorAuthTimestamp",
      threeDsReqPriorRef: "threeDSReqPriorRef",
    },
  });
