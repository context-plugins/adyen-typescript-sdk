
# Apple Pay Response Info 1

**applepay** details

*This model accepts additional fields of type unknown.*

## Structure

`ApplePayResponseInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `domains` | `string[] \| undefined` | Optional | The list of merchant domains.<br><br>For more information, see [Apple Pay documentation](https://docs.adyen.com/payment-methods/apple-pay/web-drop-in?tab=adyen-certificate-live_1#going-live). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ApplePayResponseInfo1 } from 'adyen';

const applePayResponseInfo1: ApplePayResponseInfo1 = {
  domains: [
    'domains2'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

