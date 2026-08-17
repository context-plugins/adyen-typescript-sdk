
# Entity Type 2 Enum

The type of the entity the payout is processed for.

Allowed values:

* NaturalPerson
* Company

> This field is required to update the existing `entityType` that is associated with this recurring contract.

## Enumeration

`EntityType2Enum`

## Fields

| Name |
|  --- |
| `NaturalPerson` |
| `Company` |

## Example

```ts
import { EntityType2Enum } from 'adyen';

const entityType2 = EntityType2Enum.NaturalPerson;
```

