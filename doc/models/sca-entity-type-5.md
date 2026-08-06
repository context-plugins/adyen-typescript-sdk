
# Sca Entity Type 5

The type of entity you want to retrieve a list of associations for.

Possible values: **accountHolder**, **legalEntity** or **paymentInstrument**.

## Enumeration

`ScaEntityType5`

## Fields

| Name |
|  --- |
| `AccountHolder` |
| `LegalEntity` |
| `PaymentInstrument` |

## Example

```ts
import { ScaEntityType5 } from 'adyen';

const scaEntityType5 = ScaEntityType5.LegalEntity;
```

