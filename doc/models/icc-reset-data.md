
# Icc Reset Data

*This model accepts additional fields of type unknown.*

## Structure

`IccResetData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `atrValue` | `string \| undefined` | Optional | **Constraints**: *Pattern*: `^.{1,100}$` |
| `cardStatusWords` | `string \| undefined` | Optional | **Constraints**: *Pattern*: `^.{2,2}$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { IccResetData } from 'adyenlib';

const iccResetData: IccResetData = {
  atrValue: 'ATRValue8',
  cardStatusWords: 'CardStatusWords8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

