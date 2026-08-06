
# Apple Pay Info 1

Details to provide if `type` is **applepay**.

*This model accepts additional fields of type unknown.*

## Structure

`ApplePayInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `domains` | `string[]` | Required | The list of merchant domains. Maximum: 99 domains per request.<br><br>For more information, see [Apple Pay documentation](https://docs.adyen.com/payment-methods/apple-pay/web-drop-in?tab=adyen-certificate-live_1#going-live). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ApplePayInfo1 } from 'adyen';

const applePayInfo1: ApplePayInfo1 = {
  domains: [
    'domains4',
    'domains5',
    'domains6'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

