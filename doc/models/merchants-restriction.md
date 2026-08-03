
# Merchants Restriction

*This model accepts additional fields of type unknown.*

## Structure

`MerchantsRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`MerchantAcquirerPair[] \| undefined`](../../doc/models/merchant-acquirer-pair.md) | Optional | List of merchant ID and acquirer ID pairs. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MerchantsRestriction } from 'adyenlib';

const merchantsRestriction: MerchantsRestriction = {
  operation: 'operation0',
  value: [
    {
      acquirerId: 'acquirerId4',
      merchantId: 'merchantId8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      acquirerId: 'acquirerId4',
      merchantId: 'merchantId8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

