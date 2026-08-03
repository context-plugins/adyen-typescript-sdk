
# Identification Type 11

Type of account identification. In a request message, it informs the POI System the type of the account or card identification, when provided by the Sale Terminal. (e.g. because the card information is a barcode read by the Cashier on a scanner device). In a response message, it informs the Sale System the type of the account or card identification.
Possible values:

* **AccountNumber**
* **BarCode**
* **ISOTrack2**
* **PAN**
* **PhoneNumber**

## Enumeration

`IdentificationType11`

## Fields

| Name |
|  --- |
| `Pan` |
| `IsoTrack2` |
| `BarCode` |
| `AccountNumber` |
| `PhoneNumber` |

## Example

```ts
import { IdentificationType11 } from 'adyenlib';

const identificationType11 = IdentificationType11.BarCode;
```

