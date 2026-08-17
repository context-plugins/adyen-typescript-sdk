
# Merchant Refund Reason Enum

The reason for the refund request.

Possible values:

* **FRAUD**

* **CUSTOMER REQUEST**

* **RETURN**

* **DUPLICATE**

* **OTHER**

## Enumeration

`MerchantRefundReasonEnum`

## Fields

| Name |
|  --- |
| `FRAUD` |
| `EnumCUSTOMERREQUEST` |
| `RETURN` |
| `DUPLICATE` |
| `OTHER` |

## Example

```ts
import { MerchantRefundReasonEnum } from 'adyen';

const merchantRefundReason = MerchantRefundReasonEnum.FRAUD;
```

