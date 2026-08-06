
# Sort Order 1

Determines the sort order of the returned transfers. The sort order is based on the creation date of the transfers.

Possible values:

- **asc**: Ascending order, from oldest to most recent.

- **desc**: Descending order, from most recent to oldest.

Default value: **asc**.

## Enumeration

`SortOrder1`

## Fields

| Name |
|  --- |
| `Asc` |
| `Desc` |

## Example

```ts
import { SortOrder1 } from 'adyen';

const sortOrder1 = SortOrder1.Asc;
```

