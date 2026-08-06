
# Entity Type 2

The type of the entity the payout is processed for.

Allowed values:

* NaturalPerson
* Company

> This field is required to update the existing `entityType` that is associated with this recurring contract.

## Enumeration

`EntityType2`

## Fields

| Name |
|  --- |
| `NaturalPerson` |
| `Company` |

## Example

```ts
import { EntityType2 } from 'adyen';

const entityType2 = EntityType2.NaturalPerson;
```

