
# Alipay plus Response Info 1

**alipay_plus** details

*This model accepts additional fields of type unknown.*

## Structure

`AlipayPlusResponseInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `settlementCurrencyCode` | `string \| undefined` | Optional | The currency used for settlement. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AlipayPlusResponseInfo1 } from 'adyenlib';

const alipayPlusResponseInfo1: AlipayPlusResponseInfo1 = {
  settlementCurrencyCode: 'settlementCurrencyCode4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

