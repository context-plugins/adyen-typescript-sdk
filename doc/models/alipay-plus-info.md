
# Alipay plus Info

*This model accepts additional fields of type unknown.*

## Structure

`AlipayPlusInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `settlementCurrencyCode` | `string \| undefined` | Optional | The currency used for settlement. Defaults to USD. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AlipayPlusInfo } from 'adyen';

const alipayPlusInfo: AlipayPlusInfo = {
  settlementCurrencyCode: 'settlementCurrencyCode4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

