
# Menu Entry

An entry of the menu to present to the Cashier.
It conveys message text and parameters of the menu entry. This output data could be only provided for an input command, in order to choose an entry of the menu.

*This model accepts additional fields of type unknown.*

## Structure

`MenuEntry`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `menuEntryTag` | [`MenuEntryTag1 \| undefined`](../../doc/models/menu-entry-tag-1.md) | Optional | - |
| `defaultSelectedFlag` | `boolean \| undefined` | Optional | Selection of a menu entry to be displayed. In Input request message, it allows selection of one or several menu entries before any user action.<br><br>**Default**: `false` |
| `outputFormat` | [`OutputFormat2`](../../doc/models/output-format-2.md) | Required | - |
| `predefinedContent` | [`PredefinedContent2 \| undefined`](../../doc/models/predefined-content-2.md) | Optional | - |
| `outputText` | [`OutputText[] \| undefined`](../../doc/models/output-text.md) | Optional | Content of text message to display or print. It conveys Information related to the content of the text message and its format. All the data elements related to the format of the text to display or print are parameters valid for the whole Text content. |
| `outputXhtml` | `string \| undefined` | Optional | XHTML document body containing the message to display or print.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  CharacterHeight1,
  CharacterWidth1,
  MenuEntry,
  MenuEntryTag1,
  OutputFormat2,
} from 'adyenlib';

const menuEntry: MenuEntry = {
  outputFormat: OutputFormat2.MessageRef,
  menuEntryTag: MenuEntryTag1.Selectable,
  defaultSelectedFlag: false,
  predefinedContent: {
    referenceId: 'ReferenceID0',
    language: 'Language2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  outputText: [
    {
      text: 'Text6',
      characterSet: 194,
      startRow: 74,
      startColumn: 220,
      characterWidth: CharacterWidth1.SingleWidth,
      characterHeight: CharacterHeight1.SingleHeight,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  outputXhtml: 'OutputXHTML8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

