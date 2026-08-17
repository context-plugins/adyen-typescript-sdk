
# Vipps Response Info 2

**vipps** details

## Structure

`VippsResponseInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `logo` | `string \| undefined` | Optional | Vipps logo. Format: Base64-encoded string. |
| `subscriptionCancelUrl` | `string \| undefined` | Optional | Vipps subscription cancel url (required in case of [recurring payments](https://docs.adyen.com/online-payments/tokenization)) |

## Example

```ts
import { VippsResponseInfo2 } from 'adyen';

const vippsResponseInfo2: VippsResponseInfo2 = {
  logo: 'logo2',
  subscriptionCancelUrl: 'subscriptionCancelUrl4',
};
```

