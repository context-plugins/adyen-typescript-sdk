
# Sca Entity Type 4 Enum

The type of the entity that you are associating with the SCA device.

Possible values: **accountHolder**, **legalEntity** or **paymentInstrument**.

## Enumeration

`ScaEntityType4Enum`

## Fields

| Name |
|  --- |
| `AccountHolder` |
| `LegalEntity` |
| `PaymentInstrument` |

## Example

```ts
import { ScaEntityType4Enum } from 'adyen';

const scaEntityType4 = ScaEntityType4Enum.LegalEntity;
```

