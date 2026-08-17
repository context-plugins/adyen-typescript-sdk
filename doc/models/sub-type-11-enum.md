
# Sub Type 11 Enum

The specific category of **other** dispute that you are raising.

Possible values: **atmDispute**, **cancelledGoodsServices**, **cancelledRecurring**, **counterfeit**, **creditNotProcessed**, **notAsDescribed**.

## Enumeration

`SubType11Enum`

## Fields

| Name |
|  --- |
| `AtmDispute` |
| `CancelledGoodsServices` |
| `CancelledRecurring` |
| `CreditNotProcessed` |
| `Counterfeit` |
| `NotAsDescribed` |

## Example

```ts
import { SubType11Enum } from 'adyen';

const subType11 = SubType11Enum.Counterfeit;
```

