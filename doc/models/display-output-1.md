
# Display Output 1

Information to display and the way to process the display.
To display an abort message to the Customer.

## Structure

`DisplayOutput1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `responseRequiredFlag` | `boolean \| undefined` | Optional | Indicates if the message response is required.<br><br>**Default**: `true` |
| `minimumDisplayTime` | `number \| undefined` | Optional | Number of seconds the message has to be displayed.<br><br>**Default**: `0`<br><br>**Constraints**: `>= 0`, `<= 999` |
| `device` | [`Device11Enum`](../../doc/models/device-11-enum.md) | Required | Logical device located on a Sale Terminal or a POI Terminal, in terms of class of information to output (display, print, or store), or input (keyboard) for the Cashier or the Customer.<br>Possible values:<br><br>* **CashierDisplay**<br>* **CashierInput**<br>* **CustomerDisplay**<br>* **CustomerInput** |
| `infoQualify` | [`InfoQualify1Enum`](../../doc/models/info-qualify-1-enum.md) | Required | Qualification of the information to sent to an output logical device, to display or print to the Cashier or the Customer. Allows the manager of the device, Sale or POI Terminal, to send the information to a particular physical device or to present the information accordingly.<br>Possible values:<br><br>* **CustomerAssistance**<br>* **Display**<br>* **Document**<br>* **Error**<br>* **Input**<br>* **POIReplication**<br>* **Receipt**<br>* **Sound**<br>* **Status**<br>* **Voucher** |
| `outputContent` | [`OutputContent1`](../../doc/models/output-content-1.md) | Required | Content to display or print. |
| `menuEntry` | [`MenuEntry[] \| undefined`](../../doc/models/menu-entry.md) | Optional | An entry of the menu to present to the Cashier. It conveys the message text and parameters of the menu entry. This output data could be only provided for an input command, in order to choose an entryof the menu. |
| `outputSignature` | `string \| undefined` | Optional | Vendor-specific signature of the text message to display or print.<br>If protection has to be provided to the vendor on the text to display or print.<br><br>**Constraints**: *Pattern*: `^.+$` |

## Example

```ts
import {
  CharacterHeight1Enum,
  CharacterWidth1Enum,
  Device11Enum,
  DisplayOutput1,
  InfoQualify1Enum,
  MenuEntryTag1Enum,
  OutputFormat1Enum,
  OutputFormat2Enum,
} from 'adyen';

const displayOutput1: DisplayOutput1 = {
  device: Device11Enum.CashierDisplay,
  infoQualify: InfoQualify1Enum.Input,
  outputContent: {
    outputFormat: OutputFormat1Enum.XHTML,
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
    outputXHTML: 'OutputXHTML2',
    outputBarcode: {
      barcodeValue: 'BarcodeValue2',
    },
  },
  responseRequiredFlag: true,
  minimumDisplayTime: 0,
  menuEntry: [
    {
      outputFormat: OutputFormat2Enum.XHTML,
      menuEntryTag: MenuEntryTag1Enum.SubMenu,
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
        },
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
    },
    {
      outputFormat: OutputFormat2Enum.XHTML,
      menuEntryTag: MenuEntryTag1Enum.SubMenu,
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
        },
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
    },
    {
      outputFormat: OutputFormat2Enum.XHTML,
      menuEntryTag: MenuEntryTag1Enum.SubMenu,
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
        },
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
    }
  ],
  outputSignature: 'OutputSignature0',
};
```

