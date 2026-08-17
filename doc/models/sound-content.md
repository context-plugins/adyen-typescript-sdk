
# Sound Content

## Structure

`SoundContent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `soundFormat` | [`SoundFormat1Enum`](../../doc/models/sound-format-1-enum.md) | Required | Possible values:<br><br>* **MessageRef**<br>* **SoundRef**<br>* **Text** |
| `language` | `string \| undefined` | Optional | **Constraints**: *Pattern*: `^[a-z]{2,2}$` |
| `referenceID` | `string \| undefined` | Optional | **Constraints**: *Pattern*: `^.+$` |
| `text` | `string \| undefined` | Optional | **Constraints**: *Pattern*: `^.+$` |

## Example

```ts
import { SoundContent, SoundFormat1Enum } from 'adyen';

const soundContent: SoundContent = {
  soundFormat: SoundFormat1Enum.SoundRef,
  language: 'Language6',
  referenceID: 'ReferenceID6',
  text: 'Text6',
};
```

