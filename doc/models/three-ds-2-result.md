
# Three Ds 2 Result

The ThreeDS2Result that was returned in the final CRes.

*This model accepts additional fields of type unknown.*

## Structure

`ThreeDs2Result`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authenticationValue` | `string \| undefined` | Optional | The `authenticationValue` value as defined in the 3D Secure 2 specification. |
| `cavvAlgorithm` | `string \| undefined` | Optional | The algorithm used by the ACS to calculate the authentication value, only for Cartes Bancaires integrations. |
| `challengeCancel` | [`ChallengeCancel \| undefined`](../../doc/models/challenge-cancel.md) | Optional | - |
| `dsTransId` | `string \| undefined` | Optional | The `dsTransID` value as defined in the 3D Secure 2 specification. |
| `eci` | `string \| undefined` | Optional | The `eci` value as defined in the 3D Secure 2 specification. |
| `exemptionIndicator` | [`ExemptionIndicator \| undefined`](../../doc/models/exemption-indicator.md) | Optional | - |
| `messageVersion` | `string \| undefined` | Optional | The `messageVersion` value as defined in the 3D Secure 2 specification. |
| `riskScore` | `string \| undefined` | Optional | Risk score calculated by Cartes Bancaires Directory Server (DS). |
| `threeDsRequestorChallengeInd` | [`ThreeDsRequestorChallengeInd \| undefined`](../../doc/models/three-ds-requestor-challenge-ind.md) | Optional | - |
| `threeDsServerTransId` | `string \| undefined` | Optional | The `threeDSServerTransID` value as defined in the 3D Secure 2 specification. |
| `timestamp` | `string \| undefined` | Optional | The `timestamp` value of the 3D Secure 2 authentication. |
| `transStatus` | `string \| undefined` | Optional | The `transStatus` value as defined in the 3D Secure 2 specification. |
| `transStatusReason` | `string \| undefined` | Optional | Provides information on why the `transStatus` field has the specified value. For possible values, refer to [our docs](https://docs.adyen.com/online-payments/3d-secure/api-reference#possible-transstatusreason-values). |
| `whiteListStatus` | `string \| undefined` | Optional | The `whiteListStatus` value as defined in the 3D Secure 2 specification. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ChallengeCancel, ThreeDs2Result } from 'adyen';

const threeDs2Result: ThreeDs2Result = {
  authenticationValue: 'authenticationValue4',
  cavvAlgorithm: 'cavvAlgorithm8',
  challengeCancel: ChallengeCancel.Enum03,
  dsTransId: 'dsTransID8',
  eci: 'eci2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

