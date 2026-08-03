
# Birth Data 1

The individual's birth information.

*This model accepts additional fields of type unknown.*

## Structure

`BirthData1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dateOfBirth` | `string \| undefined` | Optional | The individual's date of birth, in YYYY-MM-DD format. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BirthData1 } from 'adyenlib';

const birthData1: BirthData1 = {
  dateOfBirth: 'dateOfBirth8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

