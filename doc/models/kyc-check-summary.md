
# Kyc Check Summary

*This model accepts additional fields of type unknown.*

## Structure

`KycCheckSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `kycCheckCode` | `number \| undefined` | Optional | The code of the check. For possible values, refer to [Verification codes](https://docs.adyen.com/classic-platforms/verification-process/verification-codes). |
| `kycCheckDescription` | `string \| undefined` | Optional | A description of the check. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { KycCheckSummary } from 'adyenlib';

const kycCheckSummary: KycCheckSummary = {
  kycCheckCode: 164,
  kycCheckDescription: 'kycCheckDescription8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

