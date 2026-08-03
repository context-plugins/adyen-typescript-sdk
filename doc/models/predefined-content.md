
# Predefined Content

Reference of a predefined message to display or print.
It conveys information related to the predefined message.

*This model accepts additional fields of type unknown.*

## Structure

`PredefinedContent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `referenceId` | `string` | Required | Identification of a predefined message to display or print.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `language` | `string \| undefined` | Optional | Identification of a language.<br><br>**Constraints**: *Pattern*: `^[a-z]{2,2}$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PredefinedContent } from 'adyenlib';

const predefinedContent: PredefinedContent = {
  referenceId: 'ReferenceID2',
  language: 'Language0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

