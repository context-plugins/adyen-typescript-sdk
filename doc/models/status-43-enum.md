
# Status 43 Enum

The status of the balance account. Payment instruments linked to the balance account can only be used if the balance account status is **active**.

Possible values: **active**, **closed**, **suspended**.

## Enumeration

`Status43Enum`

## Fields

| Name |
|  --- |
| `Active` |
| `Closed` |
| `Inactive` |
| `Suspended` |

## Example

```ts
import { Status43Enum } from 'adyen';

const status43 = Status43Enum.Active;
```

