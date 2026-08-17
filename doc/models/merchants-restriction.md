
# Merchants Restriction

## Structure

`MerchantsRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`MerchantAcquirerPair[] \| undefined`](../../doc/models/merchant-acquirer-pair.md) | Optional | List of merchant ID and acquirer ID pairs. |

## Example

```ts
import { MerchantsRestriction } from 'adyen';

const merchantsRestriction: MerchantsRestriction = {
  operation: 'operation0',
  value: [
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

