
# Alipay plus Response Info

*This model accepts additional fields of type unknown.*

## Structure

`AlipayPlusResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `settlementCurrencyCode` | `string \| undefined` | Optional | The currency used for settlement. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AlipayPlusResponseInfo } from 'adyenlib';

const alipayPlusResponseInfo: AlipayPlusResponseInfo = {
  settlementCurrencyCode: 'settlementCurrencyCode4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

