
# Encrypted Order Data

## Structure

`EncryptedOrderData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orderData` | `string` | Required | The encrypted order data.<br><br>**Constraints**: *Maximum Length*: `5000` |
| `pspReference` | `string` | Required | The `pspReference` that belongs to the order. |

## Example

```ts
import { EncryptedOrderData } from 'adyen';

const encryptedOrderData: EncryptedOrderData = {
  orderData: 'orderData0',
  pspReference: 'pspReference0',
};
```

