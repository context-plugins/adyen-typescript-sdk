
# Assign Terminals Response

*This model accepts additional fields of type unknown.*

## Structure

`AssignTerminalsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `results` | `Record<string, string>` | Required | Array that returns a list of the terminals, and for each terminal the result of assigning it to an account or store.<br><br>The results can be:<br><br>- `Done`: The terminal has been assigned.<br><br>- `AssignmentScheduled`: The terminal will be assigned asynschronously.<br><br>- `RemoveConfigScheduled`: The terminal was previously assigned and boarded. Wait for the terminal to synchronize with the Adyen platform. For more information, refer to [Reassigning boarded terminals](https://docs.adyen.com/point-of-sale/managing-terminals/assign-terminals#reassign-boarded-terminals).<br><br>- `Error`: There was an error when assigning the terminal. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AssignTerminalsResponse } from 'adyenlib';

const assignTerminalsResponse: AssignTerminalsResponse = {
  results: {
    'key0': 'results3',
    'key1': 'results4'
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

