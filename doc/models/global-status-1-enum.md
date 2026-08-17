
# Global Status 1 Enum

Global status of a POI Server or POI Terminal.
Possible values:

* **Busy**
* **Maintenance**
* **OK**
* **Unreachable**

## Enumeration

`GlobalStatus1Enum`

## Fields

| Name |
|  --- |
| `OK` |
| `Busy` |
| `Maintenance` |
| `Unreachable` |

## Example

```ts
import { GlobalStatus1Enum } from 'adyen';

const globalStatus1 = GlobalStatus1Enum.Maintenance;
```

