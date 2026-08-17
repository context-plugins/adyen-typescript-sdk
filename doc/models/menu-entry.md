
# Menu Entry

An entry of the menu to present to the Cashier.
It conveys message text and parameters of the menu entry. This output data could be only provided for an input command, in order to choose an entry of the menu.

## Structure

`MenuEntry`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `menuEntryTag` | [`MenuEntryTag1Enum \| undefined`](../../doc/models/menu-entry-tag-1-enum.md) | Optional | Characteristics related to the selection of a menu entry.<br>Possible values:<br><br>* **NonSelectable**<br>* **NonSelectableSubMenu**<br>* **Selectable**<br>* **SubMenu** |
| `defaultSelectedFlag` | `boolean \| undefined` | Optional | Selection of a menu entry to be displayed. In Input request message, it allows selection of one or several menu entries before any user action.<br><br>**Default**: `false` |
| `outputFormat` | [`OutputFormat2Enum`](../../doc/models/output-format-2-enum.md) | Required | Possible values:<br><br>* **BarCode**<br>* **MessageRef**<br>* **Text**<br>* **XHTML** |
| `predefinedContent` | [`PredefinedContent \| undefined`](../../doc/models/predefined-content.md) | Optional | Reference of a predefined message to display or print.<br>It conveys information related to the predefined message. |
| `outputText` | [`OutputText[] \| undefined`](../../doc/models/output-text.md) | Optional | Content of text message to display or print. It conveys Information related to the content of the text message and its format. All the data elements related to the format of the text to display or print are parameters valid for the whole Text content. |
| `outputXHTML` | `string \| undefined` | Optional | XHTML document body containing the message to display or print.<br><br>**Constraints**: *Pattern*: `^.+$` |

## Example

```ts
import {
  CharacterHeight1Enum,
  CharacterWidth1Enum,
  MenuEntry,
  MenuEntryTag1Enum,
  OutputFormat2Enum,
} from 'adyen';

const menuEntry: MenuEntry = {
  outputFormat: OutputFormat2Enum.MessageRef,
  menuEntryTag: MenuEntryTag1Enum.Selectable,
  defaultSelectedFlag: false,
  predefinedContent: {
    referenceID: 'ReferenceID0',
    language: 'Language2',
  },
  outputText: [
    {
      text: 'Text6',
      characterSet: 194,
      startRow: 74,
      startColumn: 220,
      characterWidth: CharacterWidth1Enum.SingleWidth,
      characterHeight: CharacterHeight1Enum.SingleHeight,
    }
  ],
  outputXHTML: 'OutputXHTML8',
};
```

