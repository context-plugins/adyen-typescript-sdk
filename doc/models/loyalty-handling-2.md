
# Loyalty Handling 2

Type of Loyalty processing requested by the Sale System. An way to specify what the POI has to handle concerning the loyalty.
Possible values:

* **Allowed**
* **Forbidden**
* **Processed**
* **Proposed**
* **Required**

## Enumeration

`LoyaltyHandling2`

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
import { LoyaltyHandling2 } from 'adyenlib';

const loyaltyHandling2 = LoyaltyHandling2.Processed;
```

