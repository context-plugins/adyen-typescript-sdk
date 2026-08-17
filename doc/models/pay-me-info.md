
# Pay Me Info

## Structure

`PayMeInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `displayName` | `string` | Required | Merchant display name |
| `logo` | `string` | Required | Merchant logo. Format: Base64-encoded string. |
| `supportEmail` | `string` | Required | The email address of merchant support. |

## Example

```ts
import { PayMeInfo } from 'adyen';

const payMeInfo: PayMeInfo = {
  displayName: 'displayName4',
  logo: 'logo4',
  supportEmail: 'supportEmail4',
};
```

