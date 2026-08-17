
# Three DS Availability Response

## Structure

`ThreeDSAvailabilityResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `binDetails` | [`BinDetail1 \| undefined`](../../doc/models/bin-detail-1.md) | Optional | Bin Group Details |
| `dsPublicKeys` | [`DSPublicKeyDetail[] \| undefined`](../../doc/models/ds-public-key-detail.md) | Optional | List of Directory Server (DS) public keys. |
| `threeDS1Supported` | `boolean \| undefined` | Optional | Indicator if 3D Secure 1 is supported. |
| `threeDS2CardRangeDetails` | [`ThreeDS2CardRangeDetail[] \| undefined`](../../doc/models/three-ds-2-card-range-detail.md) | Optional | List of brand and card range pairs. |
| `threeDS2supported` | `boolean \| undefined` | Optional | Indicator if 3D Secure 2 is supported. |

## Example

```ts
import { ThreeDSAvailabilityResponse } from 'adyen';

const threeDSAvailabilityResponse: ThreeDSAvailabilityResponse = {
  binDetails: {
    issuerCountry: 'issuerCountry8',
  },
  dsPublicKeys: [
    {
      brand: 'brand6',
      directoryServerId: 'directoryServerId6',
      fromSDKVersion: 'fromSDKVersion8',
      publicKey: 'publicKey0',
      rootCertificates: 'rootCertificates4',
    }
  ],
  threeDS1Supported: false,
  threeDS2CardRangeDetails: [
    {
      acsInfoInd: [
        'acsInfoInd1',
        'acsInfoInd0',
        'acsInfoInd9'
      ],
      brandCode: 'brandCode6',
      endRange: 'endRange2',
      startRange: 'startRange0',
      threeDS2Versions: [
        'threeDS2Versions9'
      ],
    }
  ],
  threeDS2supported: false,
};
```

