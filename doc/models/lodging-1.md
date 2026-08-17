
# Lodging 1

## Structure

`Lodging1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkInDate` | `string \| undefined` | Optional | The check-in date. |
| `numberOfNights` | `number \| undefined` | Optional | The total number of nights the room is booked for. |

## Example

```ts
import { Lodging1 } from 'adyen';

const lodging1: Lodging1 = {
  checkInDate: 'checkInDate0',
  numberOfNights: 90,
};
```

