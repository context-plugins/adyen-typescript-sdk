
# Vipps Response Info 2

**vipps** details

*This model accepts additional fields of type unknown.*

## Structure

`VippsResponseInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `logo` | `string \| undefined` | Optional | Vipps logo. Format: Base64-encoded string. |
| `subscriptionCancelUrl` | `string \| undefined` | Optional | Vipps subscription cancel url (required in case of [recurring payments](https://docs.adyen.com/online-payments/tokenization)) |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { VippsResponseInfo2 } from 'adyen';

const vippsResponseInfo2: VippsResponseInfo2 = {
  logo: 'logo2',
  subscriptionCancelUrl: 'subscriptionCancelUrl4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

