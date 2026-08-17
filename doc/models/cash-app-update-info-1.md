
# Cash App Update Info 1

Details to provide if `type` is **cashapp**.

## Structure

`CashAppUpdateInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `logoUrl` | `string \| undefined` | Optional | The URL of the logo image shown in Cash App checkout next to payments. |
| `merchantName` | `string \| undefined` | Optional | The merchant display name shown in Cash App checkout. |

## Example

```ts
import { CashAppUpdateInfo1 } from 'adyen';

const cashAppUpdateInfo1: CashAppUpdateInfo1 = {
  logoUrl: 'logoUrl6',
  merchantName: 'merchantName6',
};
```

