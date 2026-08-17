
# Cash App Update Info

## Structure

`CashAppUpdateInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `logoUrl` | `string \| undefined` | Optional | The URL of the logo image shown in Cash App checkout next to payments. |
| `merchantName` | `string \| undefined` | Optional | The merchant display name shown in Cash App checkout. |

## Example

```ts
import { CashAppUpdateInfo } from 'adyen';

const cashAppUpdateInfo: CashAppUpdateInfo = {
  logoUrl: 'logoUrl4',
  merchantName: 'merchantName4',
};
```

