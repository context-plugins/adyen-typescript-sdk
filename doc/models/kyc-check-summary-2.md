
# Kyc Check Summary 2

A summary of the execution of the check.

*This model accepts additional fields of type unknown.*

## Structure

`KycCheckSummary2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `kycCheckCode` | `number \| undefined` | Optional | The code of the check. For possible values, refer to [Verification codes](https://docs.adyen.com/classic-platforms/verification-process/verification-codes). |
| `kycCheckDescription` | `string \| undefined` | Optional | A description of the check. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { KycCheckSummary2 } from 'adyenlib';

const kycCheckSummary2: KycCheckSummary2 = {
  kycCheckCode: 158,
  kycCheckDescription: 'kycCheckDescription6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

