
# Status 23

The status of your request.

If you included `adjustAuthorisationData` in your request, possible values are the following:

* **authorised**

* **refused**

Otherwise, the value is **received**.

## Enumeration

`Status23`

## Fields

| Name |
|  --- |
| `Authorised` |
| `Received` |
| `Refused` |

## Example

```ts
import { Status23 } from 'adyen';

const status23 = Status23.Received;
```

