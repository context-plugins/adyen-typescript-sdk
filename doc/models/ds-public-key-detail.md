
# DS Public Key Detail

## Structure

`DSPublicKeyDetail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `brand` | `string \| undefined` | Optional | Card brand. |
| `directoryServerId` | `string \| undefined` | Optional | Directory Server (DS) identifier. |
| `fromSDKVersion` | `string \| undefined` | Optional | The version of the mobile 3D Secure 2 SDK. For the possible values, refer to the versions in [Adyen 3DS2 Android](https://github.com/Adyen/adyen-3ds2-android/releases) and [Adyen 3DS2 iOS](https://github.com/Adyen/adyen-3ds2-ios/releases). |
| `publicKey` | `string \| undefined` | Optional | Public key. The 3D Secure 2 SDK encrypts the device information by using the DS public key. |
| `rootCertificates` | `string \| undefined` | Optional | Directory Server root certificates. The 3D Secure 2 SDK verifies the ACS signed content using the rootCertificates. |

## Example

```ts
import { DSPublicKeyDetail } from 'adyen';

const dSPublicKeyDetail: DSPublicKeyDetail = {
  brand: 'brand2',
  directoryServerId: 'directoryServerId2',
  fromSDKVersion: 'fromSDKVersion4',
  publicKey: 'publicKey6',
  rootCertificates: 'rootCertificates0',
};
```

