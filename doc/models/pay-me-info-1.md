
# Pay Me Info 1

Details to provide if `type` is **payme**.

## Structure

`PayMeInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `displayName` | `string` | Required | Merchant display name |
| `logo` | `string` | Required | Merchant logo. Format: Base64-encoded string. |
| `supportEmail` | `string` | Required | The email address of merchant support. |

## Example

```ts
import { PayMeInfo1 } from 'adyen';

const payMeInfo1: PayMeInfo1 = {
  displayName: 'displayName0',
  logo: 'logo8',
  supportEmail: 'supportEmail8',
};
```

