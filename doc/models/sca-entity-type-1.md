
# Sca Entity Type 1

The type of entity you are associating the device with.

Possible values: **accountHolder**, **legalEntity** or **paymentInstrument**.

## Enumeration

`ScaEntityType1`

## Fields

| Name |
|  --- |
| `AccountHolder` |
| `LegalEntity` |
| `PaymentInstrument` |

## Example

```ts
import { ScaEntityType1 } from 'adyen';

const scaEntityType1 = ScaEntityType1.LegalEntity;
```

