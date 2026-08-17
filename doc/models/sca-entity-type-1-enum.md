
# Sca Entity Type 1 Enum

The type of entity you are associating the device with.

Possible values: **accountHolder**, **legalEntity** or **paymentInstrument**.

## Enumeration

`ScaEntityType1Enum`

## Fields

| Name |
|  --- |
| `AccountHolder` |
| `LegalEntity` |
| `PaymentInstrument` |

## Example

```ts
import { ScaEntityType1Enum } from 'adyen';

const scaEntityType1 = ScaEntityType1Enum.LegalEntity;
```

