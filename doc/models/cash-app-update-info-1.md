
# Cash App Update Info 1

Details to provide if `type` is **cashapp**.

*This model accepts additional fields of type unknown.*

## Structure

`CashAppUpdateInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `logoUrl` | `string \| undefined` | Optional | The URL of the logo image shown in Cash App checkout next to payments. |
| `merchantName` | `string \| undefined` | Optional | The merchant display name shown in Cash App checkout. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CashAppUpdateInfo1 } from 'adyen';

const cashAppUpdateInfo1: CashAppUpdateInfo1 = {
  logoUrl: 'logoUrl6',
  merchantName: 'merchantName6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

