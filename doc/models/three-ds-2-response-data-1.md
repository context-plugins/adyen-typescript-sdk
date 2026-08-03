
# Three Ds 2 Response Data 1

Response of the 3D Secure 2 authentication.

*This model accepts additional fields of type unknown.*

## Structure

`ThreeDs2ResponseData1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acsChallengeMandated` | `string \| undefined` | Optional | - |
| `acsOperatorId` | `string \| undefined` | Optional | - |
| `acsReferenceNumber` | `string \| undefined` | Optional | - |
| `acsSignedContent` | `string \| undefined` | Optional | - |
| `acsTransId` | `string \| undefined` | Optional | - |
| `acsUrl` | `string \| undefined` | Optional | - |
| `authenticationType` | `string \| undefined` | Optional | - |
| `cardHolderInfo` | `string \| undefined` | Optional | - |
| `cavvAlgorithm` | `string \| undefined` | Optional | - |
| `challengeIndicator` | `string \| undefined` | Optional | - |
| `dsReferenceNumber` | `string \| undefined` | Optional | - |
| `dsTransId` | `string \| undefined` | Optional | - |
| `exemptionIndicator` | `string \| undefined` | Optional | - |
| `messageVersion` | `string \| undefined` | Optional | - |
| `riskScore` | `string \| undefined` | Optional | - |
| `sdkEphemPubKey` | `string \| undefined` | Optional | - |
| `threeDsServerTransId` | `string \| undefined` | Optional | - |
| `transStatus` | `string \| undefined` | Optional | - |
| `transStatusReason` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ThreeDs2ResponseData1 } from 'adyenlib';

const threeDs2ResponseData1: ThreeDs2ResponseData1 = {
  acsChallengeMandated: 'acsChallengeMandated0',
  acsOperatorId: 'acsOperatorID0',
  acsReferenceNumber: 'acsReferenceNumber0',
  acsSignedContent: 'acsSignedContent6',
  acsTransId: 'acsTransID0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

