
# Apple Pay Info

## Structure

`ApplePayInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `domains` | `string[]` | Required | The list of merchant domains. Maximum: 99 domains per request.<br><br>For more information, see [Apple Pay documentation](https://docs.adyen.com/payment-methods/apple-pay/web-drop-in?tab=adyen-certificate-live_1#going-live). |

## Example

```ts
import { ApplePayInfo } from 'adyen';

const applePayInfo: ApplePayInfo = {
  domains: [
    'domains2'
  ],
};
```

