
# Apple Pay Session Response

## Structure

`ApplePaySessionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | `string` | Required | Base64 encoded data you need to [complete the Apple Pay merchant validation](https://docs.adyen.com/payment-methods/apple-pay/api-only?tab=adyen-certificate-validation_1#complete-apple-pay-session-validation). |

## Example

```ts
import { ApplePaySessionResponse } from 'adyen';

const applePaySessionResponse: ApplePaySessionResponse = {
  data: 'data0',
};
```

