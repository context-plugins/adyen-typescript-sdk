
# Three DS 2 Result

The ThreeDS2Result that was returned in the final CRes., The result of the 3D Secure 2 authentication.

## Structure

`ThreeDS2Result`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authenticationValue` | `string \| undefined` | Optional | The `authenticationValue` value as defined in the 3D Secure 2 specification. |
| `cavvAlgorithm` | `string \| undefined` | Optional | The algorithm used by the ACS to calculate the authentication value, only for Cartes Bancaires integrations. |
| `challengeCancel` | [`ChallengeCancelEnum \| undefined`](../../doc/models/challenge-cancel-enum.md) | Optional | Indicator informing the Access Control Server (ACS) and the Directory Server (DS) that the authentication has been cancelled. For possible values, refer to [3D Secure API reference](https://docs.adyen.com/online-payments/3d-secure/api-reference#mpidata). |
| `dsTransID` | `string \| undefined` | Optional | The `dsTransID` value as defined in the 3D Secure 2 specification. |
| `eci` | `string \| undefined` | Optional | The `eci` value as defined in the 3D Secure 2 specification. |
| `exemptionIndicator` | [`ExemptionIndicatorEnum \| undefined`](../../doc/models/exemption-indicator-enum.md) | Optional | Indicates the exemption type that was applied by the issuer to the authentication, if exemption applied.<br>Allowed values:<br><br>* `lowValue`<br>* `secureCorporate`<br>* `trustedBeneficiary`<br>* `transactionRiskAnalysis` |
| `messageVersion` | `string \| undefined` | Optional | The `messageVersion` value as defined in the 3D Secure 2 specification. |
| `riskScore` | `string \| undefined` | Optional | Risk score calculated by Cartes Bancaires Directory Server (DS). |
| `threeDSRequestorChallengeInd` | [`ThreeDSRequestorChallengeIndEnum \| undefined`](../../doc/models/three-ds-requestor-challenge-ind-enum.md) | Optional | Indicates whether a challenge is requested for this transaction. Possible values:<br><br>* **01** — No preference<br>* **02** — No challenge requested<br>* **03** — Challenge requested (3DS Requestor preference)<br>* **04** — Challenge requested (Mandate)<br>* **05** — No challenge (transactional risk analysis is already performed)<br>* **06** — Data Only |
| `threeDSServerTransID` | `string \| undefined` | Optional | The `threeDSServerTransID` value as defined in the 3D Secure 2 specification. |
| `timestamp` | `string \| undefined` | Optional | The `timestamp` value of the 3D Secure 2 authentication. |
| `transStatus` | `string \| undefined` | Optional | The `transStatus` value as defined in the 3D Secure 2 specification. |
| `transStatusReason` | `string \| undefined` | Optional | Provides information on why the `transStatus` field has the specified value. For possible values, refer to [our docs](https://docs.adyen.com/online-payments/3d-secure/api-reference#possible-transstatusreason-values). |
| `whiteListStatus` | `string \| undefined` | Optional | The `whiteListStatus` value as defined in the 3D Secure 2 specification. |

## Example

```ts
import { ChallengeCancelEnum, ThreeDS2Result } from 'adyen';

const threeDS2Result: ThreeDS2Result = {
  authenticationValue: 'authenticationValue8',
  cavvAlgorithm: 'cavvAlgorithm8',
  challengeCancel: ChallengeCancelEnum.Enum06,
  dsTransID: 'dsTransID2',
  eci: 'eci6',
};
```

