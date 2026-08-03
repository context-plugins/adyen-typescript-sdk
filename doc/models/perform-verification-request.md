
# Perform Verification Request

*This model accepts additional fields of type unknown.*

## Structure

`PerformVerificationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The code of the account holder to verify. |
| `accountStateType` | [`AccountStateType`](../../doc/models/account-state-type.md) | Required | - |
| `tier` | `number` | Required | The tier required for the account holder. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AccountStateType, PerformVerificationRequest } from 'adyenlib';

const performVerificationRequest: PerformVerificationRequest = {
  accountHolderCode: 'accountHolderCode6',
  accountStateType: AccountStateType.LimitedPayout,
  tier: 110,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

