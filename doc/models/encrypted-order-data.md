
# Encrypted Order Data

*This model accepts additional fields of type unknown.*

## Structure

`EncryptedOrderData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orderData` | `string` | Required | The encrypted order data.<br><br>**Constraints**: *Maximum Length*: `5000` |
| `pspReference` | `string` | Required | The `pspReference` that belongs to the order. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EncryptedOrderData } from 'adyenlib';

const encryptedOrderData: EncryptedOrderData = {
  orderData: 'orderData0',
  pspReference: 'pspReference0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

