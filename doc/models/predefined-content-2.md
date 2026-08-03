
# Predefined Content 2

*This model accepts additional fields of type unknown.*

## Structure

`PredefinedContent2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `referenceId` | `string` | Required | Identification of a predefined message to display or print.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `language` | `string \| undefined` | Optional | Identification of a language.<br><br>**Constraints**: *Pattern*: `^[a-z]{2,2}$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PredefinedContent2 } from 'adyenlib';

const predefinedContent2: PredefinedContent2 = {
  referenceId: 'ReferenceID2',
  language: 'Language0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

