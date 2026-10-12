import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DsPublicKeyDetail = {
  /** Card brand. */
  brand?: string;
  /** Directory Server (DS) identifier. */
  directoryServerId?: string;
  /**
   * The version of the mobile 3D Secure 2 SDK. For the possible values, refer to the versions in
   * [Adyen 3DS2 Android](https://github.com/Adyen/adyen-3ds2-android/releases) and [Adyen 3DS2
   * iOS](https://github.com/Adyen/adyen-3ds2-ios/releases).
   */
  fromSdkVersion?: string;
  /** Public key. The 3D Secure 2 SDK encrypts the device information by using the DS public key. */
  publicKey?: string;
  /**
   * Directory Server root certificates. The 3D Secure 2 SDK verifies the ACS signed content using
   * the rootCertificates.
   */
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
