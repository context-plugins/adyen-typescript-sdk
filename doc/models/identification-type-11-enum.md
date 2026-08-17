
# Identification Type 11 Enum

Type of account identification. In a request message, it informs the POI System the type of the account or card identification, when provided by the Sale Terminal. (e.g. because the card information is a barcode read by the Cashier on a scanner device). In a response message, it informs the Sale System the type of the account or card identification.
Possible values:

* **AccountNumber**
* **BarCode**
* **ISOTrack2**
* **PAN**
* **PhoneNumber**

## Enumeration

`IdentificationType11Enum`

## Fields

| Name |
|  --- |
| `PAN` |
| `ISOTrack2` |
| `BarCode` |
| `AccountNumber` |
| `PhoneNumber` |

## Example

```ts
import { IdentificationType11Enum } from 'adyen';

const identificationType11 = IdentificationType11Enum.BarCode;
```

