
# Merchants Restriction 1

List of merchant ID and acquirer ID pairs, and the operation.

Supported operations: **anyMatch**, **noneMatch**.

## Structure

`MerchantsRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`MerchantAcquirerPair[] \| undefined`](../../doc/models/merchant-acquirer-pair.md) | Optional | List of merchant ID and acquirer ID pairs. |

## Example

```ts
import { MerchantsRestriction1 } from 'adyen';

const merchantsRestriction1: MerchantsRestriction1 = {
  operation: 'operation2',
  value: [
    {
      acquirerId: 'acquirerId4',
      merchantId: 'merchantId8',
    },
    {
      acquirerId: 'acquirerId4',
      merchantId: 'merchantId8',
    },
    {
      acquirerId: 'acquirerId4',
      merchantId: 'merchantId8',
    }
  ],
};
```

