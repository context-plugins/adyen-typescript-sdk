
# Update Payout Settings Request

*This model accepts additional fields of type unknown.*

## Structure

`UpdatePayoutSettingsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enabled` | `boolean \| undefined` | Optional | Indicates if payouts to this bank account are enabled. Default: **true**.<br><br>To receive payouts into this bank account, both `enabled` and `allowed` must be **true**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UpdatePayoutSettingsRequest } from 'adyen';

const updatePayoutSettingsRequest: UpdatePayoutSettingsRequest = {
  enabled: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

