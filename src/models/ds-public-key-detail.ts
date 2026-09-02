import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DsPublicKeyDetail = {
  brand?: string;
  directoryServerId?: string;
  fromSdkVersion?: string;
  publicKey?: string;
  rootCertificates?: string;
};

export const dsPublicKeyDetailSchema: Schema<DsPublicKeyDetail> = s.object<DsPublicKeyDetail>({
  brand: s.optional(s.string()),
  directoryServerId: s.optional(s.string()),
  fromSdkVersion: s.optional(s.string()),
  publicKey: s.optional(s.string()),
  rootCertificates: s.optional(s.string()),
  _keysMap: {
    fromSdkVersion: "fromSDKVersion",
  },
});
