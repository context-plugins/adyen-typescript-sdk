
# Alipay plus Info 1

Details to provide if `type` is **alipay_plus**.

*This model accepts additional fields of type unknown.*

## Structure

`AlipayPlusInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `settlementCurrencyCode` | `string \| undefined` | Optional | The currency used for settlement. Defaults to USD. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AlipayPlusInfo1 } from 'adyen';

const alipayPlusInfo1: AlipayPlusInfo1 = {
  settlementCurrencyCode: 'settlementCurrencyCode2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

