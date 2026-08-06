
# Terminal Instructions 1

Settings to define the behaviour of the payment terminal.

*This model accepts additional fields of type unknown.*

## Structure

`TerminalInstructions1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `adyenAppRestart` | `boolean \| undefined` | Optional | Indicates whether the Adyen app on the payment terminal restarts automatically when the configuration is updated. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TerminalInstructions1 } from 'adyen';

const terminalInstructions1: TerminalInstructions1 = {
  adyenAppRestart: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

