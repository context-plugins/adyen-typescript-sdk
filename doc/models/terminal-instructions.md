
# Terminal Instructions

## Structure

`TerminalInstructions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `adyenAppRestart` | `boolean \| undefined` | Optional | Indicates whether the Adyen app on the payment terminal restarts automatically when the configuration is updated. |

## Example

```ts
import { TerminalInstructions } from 'adyen';

const terminalInstructions: TerminalInstructions = {
  adyenAppRestart: false,
};
```

