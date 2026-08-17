
# Vipps Info

## Structure

`VippsInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `logo` | `string` | Required | Vipps logo. Format: Base64-encoded string. |
| `subscriptionCancelUrl` | `string \| undefined` | Optional | Vipps subscription cancel url (required in case of [recurring payments](https://docs.adyen.com/online-payments/tokenization)) |

## Example

```ts
import { VippsInfo } from 'adyen';

const vippsInfo: VippsInfo = {
  logo: 'logo0',
  subscriptionCancelUrl: 'subscriptionCancelUrl8',
};
```

