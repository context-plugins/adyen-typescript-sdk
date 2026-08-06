
# Sale Capability

## Enumeration

`SaleCapability`

## Fields

| Name |
|  --- |
| `CashierStatus` |
| `CashierError` |
| `CashierDisplay` |
| `PoiReplication` |
| `CashierInput` |
| `CustomerAssistance` |
| `CustomerDisplay` |
| `CustomerError` |
| `CustomerInput` |
| `PrinterReceipt` |
| `PrinterDocument` |
| `PrinterVoucher` |
| `MagStripe` |
| `Icc` |
| `EmvContactless` |

## Example

```ts
import { SaleCapability } from 'adyen';

const saleCapability = SaleCapability.PrinterReceipt;
```

