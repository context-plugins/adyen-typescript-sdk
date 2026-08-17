
# Find Terminal Request

## Structure

`FindTerminalRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `terminal` | `string` | Required | The unique terminal ID in the format `[Device model]-[Serial number]`.<br><br>For example, **V400m-324689776**. |

## Example

```ts
import { FindTerminalRequest } from 'adyen';

const findTerminalRequest: FindTerminalRequest = {
  terminal: 'terminal4',
};
```

