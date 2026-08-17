
# Apple Pay Info 1

Details to provide if `type` is **applepay**.

## Structure

`ApplePayInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `domains` | `string[]` | Required | The list of merchant domains. Maximum: 99 domains per request.<br><br>For more information, see [Apple Pay documentation](https://docs.adyen.com/payment-methods/apple-pay/web-drop-in?tab=adyen-certificate-live_1#going-live). |

## Example

```ts
import { ApplePayInfo1 } from 'adyen';

const applePayInfo1: ApplePayInfo1 = {
  domains: [
    'domains4',
    'domains5',
    'domains6'
  ],
};
```

