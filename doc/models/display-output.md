
# Display Output

Information to display and how to process it.
Contains a complete display operation for a Display or an Input Device type. For the Input Devices, Diagnosis and `EnableService`, `ResponseRequiredFlag`, and `MinimumDisplayTime` shall be absent.

*This model accepts additional fields of type unknown.*

## Structure

`DisplayOutput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `responseRequiredFlag` | `boolean \| undefined` | Optional | Indicates if the message response is required.<br><br>**Default**: `true` |
| `minimumDisplayTime` | `number \| undefined` | Optional | Number of seconds the message has to be displayed.<br><br>**Default**: `0`<br><br>**Constraints**: `>= 0`, `<= 999` |
| `device` | [`Device11`](../../doc/models/device-11.md) | Required | - |
| `infoQualify` | [`InfoQualify1`](../../doc/models/info-qualify-1.md) | Required | - |
| `outputContent` | [`OutputContent2`](../../doc/models/output-content-2.md) | Required | - |
| `menuEntry` | [`MenuEntry[] \| undefined`](../../doc/models/menu-entry.md) | Optional | An entry of the menu to present to the Cashier. It conveys the message text and parameters of the menu entry. This output data could be only provided for an input command, in order to choose an entryof the menu. |
| `outputSignature` | `string \| undefined` | Optional | Vendor-specific signature of the text message to display or print.<br>If protection has to be provided to the vendor on the text to display or print.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  CharacterHeight1,
  CharacterWidth1,
  Device11,
  DisplayOutput,
  InfoQualify1,
  MenuEntryTag1,
  OutputFormat1,
  OutputFormat2,
} from 'adyenlib';

const displayOutput: DisplayOutput = {
  device: Device11.CashierInput,
  infoQualify: InfoQualify1.Status,
  outputContent: {
    outputFormat: OutputFormat1.Xhtml,
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
    outputXhtml: 'OutputXHTML2',
    outputBarcode: {
      barcodeValue: 'BarcodeValue2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  responseRequiredFlag: true,
  minimumDisplayTime: 0,
  menuEntry: [
    {
      outputFormat: OutputFormat2.Xhtml,
      menuEntryTag: MenuEntryTag1.SubMenu,
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
        },
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
    }
  ],
  outputSignature: 'OutputSignature4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

