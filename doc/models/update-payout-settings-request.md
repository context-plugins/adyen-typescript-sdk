
# Update Payout Settings Request

## Structure

`UpdatePayoutSettingsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enabled` | `boolean \| undefined` | Optional | Indicates if payouts to this bank account are enabled. Default: **true**.<br><br>To receive payouts into this bank account, both `enabled` and `allowed` must be **true**. |

## Example

```ts
import { UpdatePayoutSettingsRequest } from 'adyen';

const updatePayoutSettingsRequest: UpdatePayoutSettingsRequest = {
  enabled: false,
};
```

