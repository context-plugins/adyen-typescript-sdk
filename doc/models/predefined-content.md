
# Predefined Content

Reference of a predefined message to display or print.
It conveys information related to the predefined message.

## Structure

`PredefinedContent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `referenceID` | `string` | Required | Identification of a predefined message to display or print.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `language` | `string \| undefined` | Optional | Identification of a language.<br><br>**Constraints**: *Pattern*: `^[a-z]{2,2}$` |

## Example

```ts
import { PredefinedContent } from 'adyen';

const predefinedContent: PredefinedContent = {
  referenceID: 'ReferenceID2',
  language: 'Language0',
};
```

