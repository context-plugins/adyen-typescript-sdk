
# Apple Pay Response Info 1

**applepay** details

## Structure

`ApplePayResponseInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `domains` | `string[] \| undefined` | Optional | The list of merchant domains.<br><br>For more information, see [Apple Pay documentation](https://docs.adyen.com/payment-methods/apple-pay/web-drop-in?tab=adyen-certificate-live_1#going-live). |

## Example

```ts
import { ApplePayResponseInfo1 } from 'adyen';

const applePayResponseInfo1: ApplePayResponseInfo1 = {
  domains: [
    'domains2'
  ],
};
```

