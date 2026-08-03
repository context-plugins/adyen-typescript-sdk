
# Get Terminal Details Request

*This model accepts additional fields of type unknown.*

## Structure

`GetTerminalDetailsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `terminal` | `string` | Required | The unique terminal ID in the format `[Device model]-[Serial number]`.<br><br>For example, **V400m-324689776**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GetTerminalDetailsRequest } from 'adyenlib';

const getTerminalDetailsRequest: GetTerminalDetailsRequest = {
  terminal: 'terminal4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

