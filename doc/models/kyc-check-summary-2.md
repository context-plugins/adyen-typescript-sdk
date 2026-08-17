
# KYC Check Summary 2

A summary of the execution of the check.

## Structure

`KYCCheckSummary2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `kycCheckCode` | `number \| undefined` | Optional | The code of the check. For possible values, refer to [Verification codes](https://docs.adyen.com/classic-platforms/verification-process/verification-codes). |
| `kycCheckDescription` | `string \| undefined` | Optional | A description of the check. |

## Example

```ts
import { KYCCheckSummary2 } from 'adyen';

const kYCCheckSummary2: KYCCheckSummary2 = {
  kycCheckCode: 40,
  kycCheckDescription: 'kycCheckDescription8',
};
```

