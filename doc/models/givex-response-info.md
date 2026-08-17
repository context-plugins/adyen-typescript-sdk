
# Givex Response Info

## Structure

`GivexResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currencyCode` | `string \| undefined` | Optional | The three-character ISO currency code |
| `password` | `string \| undefined` | Optional | The password provided by the acquirer. |
| `paymentFlow` | `string \| undefined` | Optional | The sales channel used for the payment. |
| `username` | `string \| undefined` | Optional | The username provided by the acquirer. |

## Example

```ts
import { GivexResponseInfo } from 'adyen';

const givexResponseInfo: GivexResponseInfo = {
  currencyCode: 'currencyCode2',
  password: 'password6',
  paymentFlow: 'paymentFlow0',
  username: 'username8',
};
```

