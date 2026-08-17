
# Terminal Instructions 1

Settings to define the behaviour of the payment terminal.

## Structure

`TerminalInstructions1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `adyenAppRestart` | `boolean \| undefined` | Optional | Indicates whether the Adyen app on the payment terminal restarts automatically when the configuration is updated. |

## Example

```ts
import { TerminalInstructions1 } from 'adyen';

const terminalInstructions1: TerminalInstructions1 = {
  adyenAppRestart: false,
};
```

