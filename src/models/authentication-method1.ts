import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AuthenticationMethod1 = {
  Bypass: "Bypass",
  ManualVerification: "ManualVerification",
  MerchantAuthentication: "MerchantAuthentication",
  OfflinePin: "OfflinePIN",
  OnlinePin: "OnlinePIN",
  PaperSignature: "PaperSignature",
  SecuredChannel: "SecuredChannel",
  SecureCertificate: "SecureCertificate",
  SecureNoCertificate: "SecureNoCertificate",
  SignatureCapture: "SignatureCapture",
  UnknownMethod: "UnknownMethod",
} as const;
export type AuthenticationMethod1 =
  | (typeof AuthenticationMethod1)[keyof typeof AuthenticationMethod1]
  | (string & {});

export const authenticationMethod1Schema: EnumSchema<AuthenticationMethod1> =
  s.enumOf<AuthenticationMethod1>(AuthenticationMethod1);
