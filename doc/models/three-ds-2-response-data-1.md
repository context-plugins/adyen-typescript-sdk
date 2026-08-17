
# Three DS 2 Response Data 1

Response of the 3D Secure 2 authentication.

## Structure

`ThreeDS2ResponseData1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acsChallengeMandated` | `string \| undefined` | Optional | - |
| `acsOperatorID` | `string \| undefined` | Optional | - |
| `acsReferenceNumber` | `string \| undefined` | Optional | - |
| `acsSignedContent` | `string \| undefined` | Optional | - |
| `acsTransID` | `string \| undefined` | Optional | - |
| `acsURL` | `string \| undefined` | Optional | - |
| `authenticationType` | `string \| undefined` | Optional | - |
| `cardHolderInfo` | `string \| undefined` | Optional | - |
| `cavvAlgorithm` | `string \| undefined` | Optional | - |
| `challengeIndicator` | `string \| undefined` | Optional | - |
| `dsReferenceNumber` | `string \| undefined` | Optional | - |
| `dsTransID` | `string \| undefined` | Optional | - |
| `exemptionIndicator` | `string \| undefined` | Optional | - |
| `messageVersion` | `string \| undefined` | Optional | - |
| `riskScore` | `string \| undefined` | Optional | - |
| `sdkEphemPubKey` | `string \| undefined` | Optional | - |
| `threeDSServerTransID` | `string \| undefined` | Optional | - |
| `transStatus` | `string \| undefined` | Optional | - |
| `transStatusReason` | `string \| undefined` | Optional | - |

## Example

```ts
import { ThreeDS2ResponseData1 } from 'adyen';

const threeDS2ResponseData1: ThreeDS2ResponseData1 = {
  acsChallengeMandated: 'acsChallengeMandated0',
  acsOperatorID: 'acsOperatorID0',
  acsReferenceNumber: 'acsReferenceNumber0',
  acsSignedContent: 'acsSignedContent6',
  acsTransID: 'acsTransID0',
};
```

