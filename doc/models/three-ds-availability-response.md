
# Three Ds Availability Response

*This model accepts additional fields of type unknown.*

## Structure

`ThreeDsAvailabilityResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `binDetails` | [`BinDetail \| undefined`](../../doc/models/bin-detail.md) | Optional | - |
| `dsPublicKeys` | [`DsPublicKeyDetail[] \| undefined`](../../doc/models/ds-public-key-detail.md) | Optional | List of Directory Server (DS) public keys. |
| `threeDs1Supported` | `boolean \| undefined` | Optional | Indicator if 3D Secure 1 is supported. |
| `threeDs2CardRangeDetails` | [`ThreeDs2CardRangeDetail[] \| undefined`](../../doc/models/three-ds-2-card-range-detail.md) | Optional | List of brand and card range pairs. |
| `threeDs2Supported` | `boolean \| undefined` | Optional | Indicator if 3D Secure 2 is supported. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ThreeDsAvailabilityResponse } from 'adyenlib';

const threeDsAvailabilityResponse: ThreeDsAvailabilityResponse = {
  binDetails: {
    issuerCountry: 'issuerCountry8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  dsPublicKeys: [
    {
      brand: 'brand6',
      directoryServerId: 'directoryServerId6',
      fromSdkVersion: 'fromSDKVersion8',
      publicKey: 'publicKey0',
      rootCertificates: 'rootCertificates4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      brand: 'brand6',
      directoryServerId: 'directoryServerId6',
      fromSdkVersion: 'fromSDKVersion8',
      publicKey: 'publicKey0',
      rootCertificates: 'rootCertificates4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  threeDs1Supported: false,
  threeDs2CardRangeDetails: [
    {
      acsInfoInd: [
        'acsInfoInd1',
        'acsInfoInd0',
        'acsInfoInd9'
      ],
      brandCode: 'brandCode6',
      endRange: 'endRange2',
      startRange: 'startRange0',
      threeDs2Versions: [
        'threeDS2Versions9'
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      acsInfoInd: [
        'acsInfoInd1',
        'acsInfoInd0',
        'acsInfoInd9'
      ],
      brandCode: 'brandCode6',
      endRange: 'endRange2',
      startRange: 'startRange0',
      threeDs2Versions: [
        'threeDS2Versions9'
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      acsInfoInd: [
        'acsInfoInd1',
        'acsInfoInd0',
        'acsInfoInd9'
      ],
      brandCode: 'brandCode6',
      endRange: 'endRange2',
      startRange: 'startRange0',
      threeDs2Versions: [
        'threeDS2Versions9'
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  threeDs2Supported: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

