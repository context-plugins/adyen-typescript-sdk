
# Type 7

The direction of sweep, whether pushing out or pulling in funds to the balance account. If not provided, by default, this is set to **push**.

Possible values:

* **push**: _push out funds_ to a destination balance account or transfer instrument.

* **pull**: _pull in funds_ from a source merchant account, transfer instrument, or balance account.

## Enumeration

`Type7`

## Fields

| Name |
|  --- |
| `Pull` |
| `Push` |

## Example

```ts
import { Type7 } from 'adyen';

const type7 = Type7.Pull;
```

