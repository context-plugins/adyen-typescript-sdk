
# Lodging 1

*This model accepts additional fields of type unknown.*

## Structure

`Lodging1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkInDate` | `string \| undefined` | Optional | The check-in date. |
| `numberOfNights` | `number \| undefined` | Optional | The total number of nights the room is booked for. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Lodging1 } from 'adyenlib';

const lodging1: Lodging1 = {
  checkInDate: 'checkInDate0',
  numberOfNights: 90,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

