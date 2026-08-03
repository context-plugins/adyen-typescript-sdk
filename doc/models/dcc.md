
# Dcc

*This model accepts additional fields of type unknown.*

## Structure

`Dcc`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enableDcc` | `boolean \| undefined` | Optional | Enable Dynamic Currency Conversion (DCC). When you enable DCC, you are responsible for complying with [DCC receipt requirements and terms of use](https://help.adyen.com/en_US/knowledge/in-person-payments/terminal-features/dynamic-currency-conversion-dcc-rules-regulations). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Dcc } from 'adyenlib';

const dcc: Dcc = {
  enableDcc: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

