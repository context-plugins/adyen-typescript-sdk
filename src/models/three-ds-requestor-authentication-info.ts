import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { threeDsReqAuthMethodSchema, type ThreeDsReqAuthMethod } from "./three-ds-req-auth-method.js";

export type ThreeDsRequestorAuthenticationInfo = {
  threeDsReqAuthData?: string;
  threeDsReqAuthMethod?: ThreeDsReqAuthMethod;
  threeDsReqAuthTimestamp?: string;
};

export const threeDsRequestorAuthenticationInfoSchema: Schema<ThreeDsRequestorAuthenticationInfo> =
  s.object<ThreeDsRequestorAuthenticationInfo>({
    threeDsReqAuthData: s.optional(s.string()),
    threeDsReqAuthMethod: s.optional(s.lazy(() => threeDsReqAuthMethodSchema)),
    threeDsReqAuthTimestamp: s.optional(s.string()),
    _keysMap: {
      threeDsReqAuthData: "threeDSReqAuthData",
      threeDsReqAuthMethod: "threeDSReqAuthMethod",
      threeDsReqAuthTimestamp: "threeDSReqAuthTimestamp",
    },
  });
