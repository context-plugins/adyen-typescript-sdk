
# Birth Data

*This model accepts additional fields of type unknown.*

## Structure

`BirthData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dateOfBirth` | `string \| undefined` | Optional | The individual's date of birth, in YYYY-MM-DD format. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BirthData } from 'adyen';

const birthData: BirthData = {
  dateOfBirth: 'dateOfBirth8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

