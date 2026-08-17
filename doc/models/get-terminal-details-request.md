
# Get Terminal Details Request

## Structure

`GetTerminalDetailsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `terminal` | `string` | Required | The unique terminal ID in the format `[Device model]-[Serial number]`.<br><br>For example, **V400m-324689776**. |

## Example

```ts
import { GetTerminalDetailsRequest } from 'adyen';

const getTerminalDetailsRequest: GetTerminalDetailsRequest = {
  terminal: 'terminal4',
};
```

