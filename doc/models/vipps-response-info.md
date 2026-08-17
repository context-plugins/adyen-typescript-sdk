
# Vipps Response Info

## Structure

`VippsResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `logo` | `string \| undefined` | Optional | Vipps logo. Format: Base64-encoded string. |
| `subscriptionCancelUrl` | `string \| undefined` | Optional | Vipps subscription cancel url (required in case of [recurring payments](https://docs.adyen.com/online-payments/tokenization)) |

## Example

```ts
import { VippsResponseInfo } from 'adyen';

const vippsResponseInfo: VippsResponseInfo = {
  logo: 'logo6',
  subscriptionCancelUrl: 'subscriptionCancelUrl8',
};
```

