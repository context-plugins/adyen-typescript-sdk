
# Alipay plus Info 1

Details to provide if `type` is **alipay_plus**.

## Structure

`AlipayPlusInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `settlementCurrencyCode` | `string \| undefined` | Optional | The currency used for settlement. Defaults to USD. |

## Example

```ts
import { AlipayPlusInfo1 } from 'adyen';

const alipayPlusInfo1: AlipayPlusInfo1 = {
  settlementCurrencyCode: 'settlementCurrencyCode2',
};
```

