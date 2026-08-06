
# Status 51

The status of the sweep. If not provided, by default, this is set to **active**.

Possible values:

* **active**:  the sweep is enabled and funds will be pulled in or pushed out based on the defined configuration.

* **inactive**: the sweep is disabled and cannot be triggered.

## Enumeration

`Status51`

## Fields

| Name |
|  --- |
| `Active` |
| `Inactive` |

## Example

```ts
import { Status51 } from 'adyen';

const status51 = Status51.Active;
```

