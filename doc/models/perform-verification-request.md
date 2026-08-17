
# Perform Verification Request

## Structure

`PerformVerificationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The code of the account holder to verify. |
| `accountStateType` | [`AccountStateTypeEnum`](../../doc/models/account-state-type-enum.md) | Required | The state required for the account holder.<br><br>> Permitted values: `Processing`, `Payout`. |
| `tier` | `number` | Required | The tier required for the account holder. |

## Example

```ts
import { AccountStateTypeEnum, PerformVerificationRequest } from 'adyen';

const performVerificationRequest: PerformVerificationRequest = {
  accountHolderCode: 'accountHolderCode6',
  accountStateType: AccountStateTypeEnum.LimitedPayout,
  tier: 110,
};
```

