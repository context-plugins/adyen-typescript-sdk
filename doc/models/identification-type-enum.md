
# Identification Type Enum

The type of the identification.

Possible values: **iban**, **routingNumber**, **sortCode**, **bic**.

## Enumeration

`IdentificationTypeEnum`

## Fields

| Name |
|  --- |
| `Bic` |
| `Iban` |
| `RoutingNumber` |
| `SortCode` |

## Example

```ts
import { IdentificationTypeEnum } from 'adyen';

const identificationType = IdentificationTypeEnum.Bic;
```

