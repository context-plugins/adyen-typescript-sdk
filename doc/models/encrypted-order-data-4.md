
# Encrypted Order Data 4

The order request object that contains a pspReference that represents the order and the matching encrypted order data.

*This model accepts additional fields of type unknown.*

## Structure

`EncryptedOrderData4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orderData` | `string` | Required | The encrypted order data.<br><br>**Constraints**: *Maximum Length*: `5000` |
| `pspReference` | `string` | Required | The `pspReference` that belongs to the order. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EncryptedOrderData4 } from 'adyenlib';

const encryptedOrderData4: EncryptedOrderData4 = {
  orderData: 'orderData2',
  pspReference: 'pspReference2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

