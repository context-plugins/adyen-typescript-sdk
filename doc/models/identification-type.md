
# Identification Type

The type of the identification.

Possible values: **iban**, **routingNumber**, **sortCode**, **bic**.

## Enumeration

`IdentificationType`

## Fields

| Name |
|  --- |
| `Bic` |
| `Iban` |
| `RoutingNumber` |
| `SortCode` |

## Example

```ts
import { IdentificationType } from 'adyenlib';

const identificationType = IdentificationType.Bic;
```

