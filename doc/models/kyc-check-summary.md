
# KYC Check Summary

## Structure

`KYCCheckSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `kycCheckCode` | `number \| undefined` | Optional | The code of the check. For possible values, refer to [Verification codes](https://docs.adyen.com/classic-platforms/verification-process/verification-codes). |
| `kycCheckDescription` | `string \| undefined` | Optional | A description of the check. |

## Example

```ts
import { KYCCheckSummary } from 'adyen';

const kYCCheckSummary: KYCCheckSummary = {
  kycCheckCode: 70,
  kycCheckDescription: 'kycCheckDescription8',
};
```

