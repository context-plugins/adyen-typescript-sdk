
# Apple Pay Response Info

## Structure

`ApplePayResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `domains` | `string[] \| undefined` | Optional | The list of merchant domains.<br><br>For more information, see [Apple Pay documentation](https://docs.adyen.com/payment-methods/apple-pay/web-drop-in?tab=adyen-certificate-live_1#going-live). |

## Example

```ts
import { ApplePayResponseInfo } from 'adyen';

const applePayResponseInfo: ApplePayResponseInfo = {
  domains: [
    'domains4'
  ],
};
```

