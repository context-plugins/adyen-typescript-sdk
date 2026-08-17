
# Status 2 Enum

The status of your request.

If you included `adjustAuthorisationData` in your request, possible values are the following:

* **authorised**

* **refused**

Otherwise, the value is **received**.

## Enumeration

`Status2Enum`

## Fields

| Name |
|  --- |
| `Authorised` |
| `Received` |
| `Refused` |

## Example

```ts
import { Status2Enum } from 'adyen';

const status2 = Status2Enum.Refused;
```

