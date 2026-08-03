
# Merchant Acquirer Pair

*This model accepts additional fields of type unknown.*

## Structure

`MerchantAcquirerPair`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acquirerId` | `string \| undefined` | Optional | The acquirer ID. |
| `merchantId` | `string \| undefined` | Optional | The merchant identification number (MID). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MerchantAcquirerPair } from 'adyenlib';

const merchantAcquirerPair: MerchantAcquirerPair = {
  acquirerId: 'acquirerId0',
  merchantId: 'merchantId4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

