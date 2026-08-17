
# Encrypted Order Data 2

The order information required for partial payments.

## Structure

`EncryptedOrderData2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orderData` | `string` | Required | The encrypted order data.<br><br>**Constraints**: *Maximum Length*: `5000` |
| `pspReference` | `string` | Required | The `pspReference` that belongs to the order. |

## Example

```ts
import { EncryptedOrderData2 } from 'adyen';

const encryptedOrderData2: EncryptedOrderData2 = {
  orderData: 'orderData0',
  pspReference: 'pspReference0',
};
```

