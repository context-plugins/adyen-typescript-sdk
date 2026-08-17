
# Loyalty Handling 2 Enum

Type of Loyalty processing requested by the Sale System. An way to specify what the POI has to handle concerning the loyalty.
Possible values:

* **Allowed**
* **Forbidden**
* **Processed**
* **Proposed**
* **Required**

## Enumeration

`LoyaltyHandling2Enum`

## Fields

| Name |
|  --- |
| `Forbidden` |
| `Processed` |
| `Allowed` |
| `Proposed` |
| `Required` |

## Example

```ts
import { LoyaltyHandling2Enum } from 'adyen';

const loyaltyHandling2 = LoyaltyHandling2Enum.Processed;
```

