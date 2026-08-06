
# Additional Data 3 D Secure

*This model accepts additional fields of type unknown.*

## Structure

`AdditionalData3DSecure`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allow3Ds2` | `string \| undefined` | Optional | Indicates if you are able to process 3D Secure 2 transactions natively on your payment page. Send this parameter when you are using `/payments` endpoint with any of our [native 3D Secure 2 solutions](https://docs.adyen.com/online-payments/3d-secure/native-3ds2).<br><br>> This parameter only indicates readiness to support native 3D Secure 2 authentication. To specify if you _want_ to perform 3D Secure, use [Dynamic 3D Secure](/risk-management/dynamic-3d-secure) or send the `executeThreeD` parameter.<br><br>Possible values:<br><br>* **true** - Ready to support native 3D Secure 2 authentication. Setting this to true does not mean always applying 3D Secure 2. Adyen selects redirect or native authentication based on your configuration to optimize authorization rates and improve the shopper's experience.<br>* **false** – Not ready to support native 3D Secure 2 authentication. Adyen offers redirect 3D Secure 2 authentication instead, based on your configuration. |
| `challengeWindowSize` | [`ChallengeWindowSize \| undefined`](../../doc/models/challenge-window-size.md) | Optional | - |
| `executeThreeD` | `string \| undefined` | Optional | Indicates if you want to perform 3D Secure authentication on a transaction.<br><br>> Alternatively, you can use [Dynamic 3D Secure](/risk-management/dynamic-3d-secure) to configure rules for applying 3D Secure.<br><br>Possible values:<br><br>* **true** – Perform 3D Secure authentication.<br>* **false** – Don't perform 3D Secure authentication. Note that this setting results in refusals if the issuer mandates 3D Secure because of the PSD2 directive  or other, national regulations. |
| `mpiImplementationType` | `string \| undefined` | Optional | In case of Secure+, this field must be set to **CUPSecurePlus**. |
| `scaExemption` | `string \| undefined` | Optional | Indicates the [exemption type](https://docs.adyen.com/payments-fundamentals/psd2-sca-compliance-and-implementation-guide#specifypreferenceinyourapirequest) that you want to request for the transaction.<br><br>Possible values:<br><br>* **lowValue**<br>* **secureCorporate**<br>* **trustedBeneficiary**<br>* **transactionRiskAnalysis** |
| `threeDsVersion` | `string \| undefined` | Optional | Indicates your preference for the 3D Secure version.<br><br>> If you use this parameter, you override the checks from Adyen's Authentication Engine. We recommend to use this field only if you have an extensive knowledge of 3D Secure.<br><br>Possible values:<br><br>* **2.1.0**: Apply 3D Secure version 2.1.0.<br>* **2.2.0**: Apply 3D Secure version 2.2.0. If the issuer does not support version 2.2.0, we will fall back to 2.1.0.<br><br>The following rules apply:<br><br>* If you prefer 2.1.0 or 2.2.0 but we receive a negative `transStatus` in the `ARes`, we will apply the fallback policy configured in your account.<br>* If you the BIN is not enrolled, you will receive an error. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AdditionalData3DSecure, ChallengeWindowSize } from 'adyen';

const additionalData3DSecure: AdditionalData3DSecure = {
  allow3Ds2: 'allow3DS26',
  challengeWindowSize: ChallengeWindowSize.Enum01,
  executeThreeD: 'executeThreeD4',
  mpiImplementationType: 'mpiImplementationType0',
  scaExemption: 'scaExemption2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

