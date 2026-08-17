
# Pay Me Response Info

## Structure

`PayMeResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `displayName` | `string \| undefined` | Optional | Merchant display name |
| `logo` | `string \| undefined` | Optional | Merchant logo. Format: Base64-encoded string. |
| `supportEmail` | `string \| undefined` | Optional | The email address of merchant support. |

## Example

```ts
import { PayMeResponseInfo } from 'adyen';

const payMeResponseInfo: PayMeResponseInfo = {
  displayName: 'displayName6',
  logo: 'logo4',
  supportEmail: 'supportEmail4',
};
```

