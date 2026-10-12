import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { file1Schema, type File1 } from "./file1.js";
import { file2Schema, type File2 } from "./file2.js";
import { file3Schema, type File3 } from "./file3.js";
import { file4Schema, type File4 } from "./file4.js";

export type Profile = {
  /**
   * The type of Wi-Fi network. Possible values: **wpa-psk**, **wpa2-psk**, **wpa-eap**,
   * **wpa2-eap**.
   */
  authType: string;
  /**
   * Indicates whether to automatically select the best authentication method available. Does not
   * work on older terminal models.
   */
  autoWifi?: boolean;
  /**
   * Use **infra** for infrastructure-based networks. This applies to most networks. Use **adhoc**
   * only if the communication is p2p-based between base stations.
   */
  bssType: string;
  /**
   * The channel number of the Wi-Fi network. The recommended setting is **0** for automatic channel
   * selection.
   */
  channel?: number;
  /**
   * Indicates whether this is your preferred wireless network. If **true**, the terminal will try
   * connecting to this network first.
   */
  defaultProfile?: boolean;
  /**
   * Specifies the server domain name for EAP-TLS and EAP-PEAP WiFi profiles on Android 11 and
   * above.
   */
  domainSuffix?: string;
  /**
   * For `authType` **wpa-eap** or **wpa2-eap**. Possible values: **tls**, **peap**, **leap**,
   * **fast**
   */
  eap?: string;
  /**
   * For `authType` **wpa-eap** or **wpa2-eap**. The root certificate from the CA that signed the
   * certificate of the RADIUS server that is part of your wireless network.
   */
  eapCaCert?: File1;
  /**
   * For `eap` **tls**. The certificate chain for the terminals. All terminals in the same network
   * will use the same EAP client certificate.
   */
  eapClientCert?: File2;
  /**
   * For `eap` **tls**. The RSA private key for the client. Include the lines BEGIN RSA PRIVATE KEY
   * and END RSA PRIVATE KEY.
   */
  eapClientKey?: File3;
  /** For `eap` **tls**. The password of the RSA key file, if that file is password-protected. */
  eapClientPwd?: string;
  /**
   * For `authType` **wpa-eap** or **wpa2-eap**. The EAP-PEAP username from your MS-CHAP account.
   * Must match the configuration of your RADIUS server.
   */
  eapIdentity?: string;
  /** For `eap` **tls**. The EAP intermediate certificate. */
  eapIntermediateCert?: File4;
  /**
   * For `eap` **peap**. The EAP-PEAP password from your MS-CHAP account. Must match the
   * configuration of your RADIUS server.
   */
  eapPwd?: string;
  /**
   * Indicates if the network doesn't broadcast its SSID. Mandatory for Android terminals, because
   * these terminals rely on this setting to be able to connect to any network.
   */
  hiddenSsid?: boolean;
  /** Your name for the Wi-Fi profile. */
  name?: string;
  /** For `authType` **wpa-psk or **wpa2-psk**. The password to the wireless network. */
  psk?: string;
  /** The name of the wireless network. */
  ssid: string;
  /**
   * The type of encryption. Possible values: **auto**, **ccmp** (recommended), **tkip**
   */
  wsec: string;
};

export const profileSchema: Schema<Profile> = s.object<Profile>({
  authType: s.string(),
  autoWifi: s.optional(s.boolean()),
  bssType: s.string(),
  channel: s.optional(s.int()),
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
