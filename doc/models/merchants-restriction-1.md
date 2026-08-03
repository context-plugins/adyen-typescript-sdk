
# Merchants Restriction 1

List of merchant ID and acquirer ID pairs, and the operation.

Supported operations: **anyMatch**, **noneMatch**.

*This model accepts additional fields of type unknown.*

## Structure

`MerchantsRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`MerchantAcquirerPair[] \| undefined`](../../doc/models/merchant-acquirer-pair.md) | Optional | List of merchant ID and acquirer ID pairs. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MerchantsRestriction1 } from 'adyenlib';

const merchantsRestriction1: MerchantsRestriction1 = {
  operation: 'operation2',
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

