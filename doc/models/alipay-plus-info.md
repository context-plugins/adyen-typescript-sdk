
# Alipay plus Info

## Structure

`AlipayPlusInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `settlementCurrencyCode` | `string \| undefined` | Optional | The currency used for settlement. Defaults to USD. |

## Example

```ts
import { AlipayPlusInfo } from 'adyen';

const alipayPlusInfo: AlipayPlusInfo = {
  settlementCurrencyCode: 'settlementCurrencyCode4',
};
```

