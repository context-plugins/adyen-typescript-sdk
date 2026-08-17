
# Dcc

## Structure

`Dcc`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enableDcc` | `boolean \| undefined` | Optional | Enable Dynamic Currency Conversion (DCC). When you enable DCC, you are responsible for complying with [DCC receipt requirements and terms of use](https://help.adyen.com/en_US/knowledge/in-person-payments/terminal-features/dynamic-currency-conversion-dcc-rules-regulations). |

## Example

```ts
import { Dcc } from 'adyen';

const dcc: Dcc = {
  enableDcc: false,
};
```

