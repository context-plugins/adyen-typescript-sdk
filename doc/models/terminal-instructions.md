
# Terminal Instructions

*This model accepts additional fields of type unknown.*

## Structure

`TerminalInstructions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `adyenAppRestart` | `boolean \| undefined` | Optional | Indicates whether the Adyen app on the payment terminal restarts automatically when the configuration is updated. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TerminalInstructions } from 'adyenlib';

const terminalInstructions: TerminalInstructions = {
  adyenAppRestart: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

