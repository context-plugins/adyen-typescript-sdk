
# Sale Capability Enum

## Enumeration

`SaleCapabilityEnum`

## Fields

| Name |
|  --- |
| `CashierStatus` |
| `CashierError` |
| `CashierDisplay` |
| `POIReplication` |
| `CashierInput` |
| `CustomerAssistance` |
| `CustomerDisplay` |
| `CustomerError` |
| `CustomerInput` |
| `PrinterReceipt` |
| `PrinterDocument` |
| `PrinterVoucher` |
| `MagStripe` |
| `ICC` |
| `EMVContactless` |

## Example

```ts
import { SaleCapabilityEnum } from 'adyen';

const saleCapability = SaleCapabilityEnum.PrinterReceipt;
```

