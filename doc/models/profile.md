
# Profile

## Structure

`Profile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authType` | `string` | Required | The type of Wi-Fi network. Possible values: **wpa-psk**, **wpa2-psk**, **wpa-eap**, **wpa2-eap**. |
| `autoWifi` | `boolean \| undefined` | Optional | Indicates whether to automatically select the best authentication method available. Does not work on older terminal models. |
| `bssType` | `string` | Required | Use **infra** for infrastructure-based networks. This applies to most networks. Use **adhoc** only if the communication is p2p-based between base stations. |
| `channel` | `number \| undefined` | Optional | The channel number of the Wi-Fi network. The recommended setting is **0** for automatic channel selection. |
| `defaultProfile` | `boolean \| undefined` | Optional | Indicates whether this is your preferred wireless network. If **true**, the terminal will try connecting to this network first. |
| `domainSuffix` | `string \| undefined` | Optional | Specifies the server domain name for EAP-TLS and EAP-PEAP WiFi profiles on Android 11 and above. |
| `eap` | `string \| undefined` | Optional | For `authType` **wpa-eap** or **wpa2-eap**. Possible values: **tls**, **peap**, **leap**, **fast** |
| `eapCaCert` | [`File1 \| undefined`](../../doc/models/file-1.md) | Optional | For `authType` **wpa-eap** or **wpa2-eap**. The root certificate from the CA that signed the certificate of the RADIUS server that is part of your wireless network. |
| `eapClientCert` | [`File2 \| undefined`](../../doc/models/file-2.md) | Optional | For `eap` **tls**. The certificate chain for the terminals. All terminals in the same network will use the same EAP client certificate. |
| `eapClientKey` | [`File3 \| undefined`](../../doc/models/file-3.md) | Optional | For `eap` **tls**. The RSA private key for the client. Include the lines BEGIN RSA PRIVATE KEY and END RSA PRIVATE KEY. |
| `eapClientPwd` | `string \| undefined` | Optional | For `eap` **tls**. The password of the RSA key file, if that file is password-protected. |
| `eapIdentity` | `string \| undefined` | Optional | For `authType` **wpa-eap** or **wpa2-eap**. The EAP-PEAP username from your MS-CHAP account. Must match the configuration of your RADIUS server. |
| `eapIntermediateCert` | [`File4 \| undefined`](../../doc/models/file-4.md) | Optional | For `eap` **tls**. The EAP intermediate certificate. |
| `eapPwd` | `string \| undefined` | Optional | For `eap` **peap**. The EAP-PEAP password from your MS-CHAP account. Must match the configuration of your RADIUS server. |
| `hiddenSsid` | `boolean \| undefined` | Optional | Indicates if the network doesn't broadcast its SSID. Mandatory for Android terminals, because these terminals rely on this setting to be able to connect to any network. |
| `name` | `string \| undefined` | Optional | Your name for the Wi-Fi profile. |
| `psk` | `string \| undefined` | Optional | For `authType` **wpa-psk or **wpa2-psk**. The password to the wireless network. |
| `ssid` | `string` | Required | The name of the wireless network. |
| `wsec` | `string` | Required | The type of encryption. Possible values: **auto**, **ccmp** (recommended), **tkip** |

## Example

```ts
import { Profile } from 'adyen';

const profile: Profile = {
  authType: 'authType0',
  bssType: 'bssType6',
  ssid: 'ssid8',
  wsec: 'wsec4',
  autoWifi: false,
  channel: 114,
  defaultProfile: false,
  domainSuffix: 'domainSuffix4',
  eap: 'eap2',
};
```

