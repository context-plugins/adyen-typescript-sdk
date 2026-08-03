
# Sound Content

*This model accepts additional fields of type unknown.*

## Structure

`SoundContent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `soundFormat` | [`SoundFormat1`](../../doc/models/sound-format-1.md) | Required | - |
| `language` | `string \| undefined` | Optional | **Constraints**: *Pattern*: `^[a-z]{2,2}$` |
| `referenceId` | `string \| undefined` | Optional | **Constraints**: *Pattern*: `^.+$` |
| `text` | `string \| undefined` | Optional | **Constraints**: *Pattern*: `^.+$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SoundContent, SoundFormat1 } from 'adyenlib';

const soundContent: SoundContent = {
  soundFormat: SoundFormat1.SoundRef,
  language: 'Language6',
  referenceId: 'ReferenceID6',
  text: 'Text6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

