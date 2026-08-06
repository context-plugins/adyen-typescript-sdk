
# Status 211

The status of the recurring top-up. If not provided, by default, this is set to **active**.

Possible values:

* **active**:  the top up is enabled and funds will be pulled in.

* **inactive**: the top up is disabled and cannot be triggered.

## Enumeration

`Status211`

## Fields

| Name |
|  --- |
| `Active` |
| `Inactive` |

## Example

```ts
import { Status211 } from 'adyen';

const status211 = Status211.Active;
```

