
# Sort Order 2

Determines the sort order of the returned transactions. The sort order is based on the creation date of the transaction.

Possible values:

- **asc**: Ascending order, from oldest to most recent.

- **desc**: Descending order, from most recent to oldest.

Default value: **asc**.

## Enumeration

`SortOrder2`

## Fields

| Name |
|  --- |
| `Asc` |
| `Desc` |

## Example

```ts
import { SortOrder2 } from 'adyen';

const sortOrder2 = SortOrder2.Asc;
```

