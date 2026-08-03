
# Ds Public Key Detail

*This model accepts additional fields of type unknown.*

## Structure

`DsPublicKeyDetail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `brand` | `string \| undefined` | Optional | Card brand. |
| `directoryServerId` | `string \| undefined` | Optional | Directory Server (DS) identifier. |
| `fromSdkVersion` | `string \| undefined` | Optional | The version of the mobile 3D Secure 2 SDK. For the possible values, refer to the versions in [Adyen 3DS2 Android](https://github.com/Adyen/adyen-3ds2-android/releases) and [Adyen 3DS2 iOS](https://github.com/Adyen/adyen-3ds2-ios/releases). |
| `publicKey` | `string \| undefined` | Optional | Public key. The 3D Secure 2 SDK encrypts the device information by using the DS public key. |
| `rootCertificates` | `string \| undefined` | Optional | Directory Server root certificates. The 3D Secure 2 SDK verifies the ACS signed content using the rootCertificates. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DsPublicKeyDetail } from 'adyenlib';

const dsPublicKeyDetail: DsPublicKeyDetail = {
  brand: 'brand6',
  directoryServerId: 'directoryServerId6',
  fromSdkVersion: 'fromSDKVersion8',
  publicKey: 'publicKey0',
  rootCertificates: 'rootCertificates4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

