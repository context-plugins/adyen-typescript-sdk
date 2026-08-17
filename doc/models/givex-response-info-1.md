
# Givex Response Info 1

**givex** details

## Structure

`GivexResponseInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currencyCode` | `string \| undefined` | Optional | The three-character ISO currency code |
| `password` | `string \| undefined` | Optional | The password provided by the acquirer. |
| `paymentFlow` | `string \| undefined` | Optional | The sales channel used for the payment. |
| `username` | `string \| undefined` | Optional | The username provided by the acquirer. |

## Example

```ts
import { GivexResponseInfo1 } from 'adyen';

const givexResponseInfo1: GivexResponseInfo1 = {
  currencyCode: 'currencyCode6',
  password: 'password0',
  paymentFlow: 'paymentFlow4',
  username: 'username6',
};
```

