
# Global Status 1

Global status of a POI Server or POI Terminal.
Possible values:

* **Busy**
* **Maintenance**
* **OK**
* **Unreachable**

## Enumeration

`GlobalStatus1`

## Fields

| Name |
|  --- |
| `Ok` |
| `Busy` |
| `Maintenance` |
| `Unreachable` |

## Example

```ts
import { GlobalStatus1 } from 'adyenlib';

const globalStatus1 = GlobalStatus1.Maintenance;
```

