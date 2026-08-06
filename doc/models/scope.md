
# Scope

The scope to which the transfer limit applies. Possible values:

* **perTransaction**: you set a maximum amount for each transfer made from the balance account or balance platform.
* **perDay**: you set a maximum total amount for all transfers made from the balance account or balance platform in a day.

## Enumeration

`Scope`

## Fields

| Name |
|  --- |
| `PerDay` |
| `PerTransaction` |

## Example

```ts
import { Scope } from 'adyen';

const scope = Scope.PerDay;
```

