import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { file1Schema, type File1 } from "./file1.js";
import { file2Schema, type File2 } from "./file2.js";
import { file3Schema, type File3 } from "./file3.js";
import { file4Schema, type File4 } from "./file4.js";

export type Profile = {
  authType: string;
  autoWifi?: boolean;
  bssType: string;
  channel?: number;
  defaultProfile?: boolean;
  domainSuffix?: string;
  eap?: string;
  eapCaCert?: File1;
  eapClientCert?: File2;
  eapClientKey?: File3;
  eapClientPwd?: string;
  eapIdentity?: string;
  eapIntermediateCert?: File4;
  eapPwd?: string;
  hiddenSsid?: boolean;
  name?: string;
  psk?: string;
  ssid: string;
  wsec: string;
};

export const profileSchema: Schema<Profile> = s.object<Profile>({
  authType: s.string(),
  autoWifi: s.optional(s.boolean()),
  bssType: s.string(),
  channel: s.optional(s.number()),
  defaultProfile: s.optional(s.boolean()),
  domainSuffix: s.optional(s.string()),
  eap: s.optional(s.string()),
  eapCaCert: s.optional(s.lazy(() => file1Schema)),
  eapClientCert: s.optional(s.lazy(() => file2Schema)),
  eapClientKey: s.optional(s.lazy(() => file3Schema)),
  eapClientPwd: s.optional(s.string()),
  eapIdentity: s.optional(s.string()),
  eapIntermediateCert: s.optional(s.lazy(() => file4Schema)),
  eapPwd: s.optional(s.string()),
  hiddenSsid: s.optional(s.boolean()),
  name: s.optional(s.string()),
  psk: s.optional(s.string()),
  ssid: s.string(),
  wsec: s.string(),
});
