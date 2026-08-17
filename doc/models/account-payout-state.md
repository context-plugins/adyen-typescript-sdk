
# Account Payout State

## Structure

`AccountPayoutState`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allowPayout` | `boolean \| undefined` | Optional | Indicates whether payouts are allowed. This field is the overarching payout status, and is the aggregate of multiple conditions (e.g., KYC status, disabled flag, etc). If this field is false, no payouts will be permitted for any of the account holder's accounts. If this field is true, payouts will be permitted for any of the account holder's accounts. |
| `disableReason` | `string \| undefined` | Optional | The reason why payouts (to all of the account holder's accounts) have been disabled (by the platform). If the `disabled` field is true, this field can be used to explain why. |
| `disabled` | `boolean \| undefined` | Optional | Indicates whether payouts have been disabled (by the platform) for all of the account holder's accounts. A platform may enable and disable this field at their discretion. If this field is true, `allowPayout` will be false and no payouts will be permitted for any of the account holder's accounts. If this field is false, `allowPayout` may or may not be enabled, depending on other factors. |
| `notAllowedReason` | `string \| undefined` | Optional | The reason why payouts (to all of the account holder's accounts) have been disabled (by Adyen). If payouts have been disabled by Adyen, this field will explain why. If this field is blank, payouts have not been disabled by Adyen. |
| `payoutLimit` | [`Amount \| undefined`](../../doc/models/amount.md) | Optional | The maximum amount that payouts are limited to. Only applies if payouts are allowed but limited. |
| `tierNumber` | `number \| undefined` | Optional | The payout tier that the account holder occupies. |

## Example

```ts
import { AccountPayoutState } from 'adyen';

const accountPayoutState: AccountPayoutState = {
  allowPayout: false,
  disableReason: 'disableReason8',
  disabled: false,
  notAllowedReason: 'notAllowedReason0',
  payoutLimit: {
    currency: 'currency8',
    value: BigInt(88),
  },
};
```

