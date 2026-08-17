
# Display Request 2

Content of the Display Request message.

## Structure

`DisplayRequest2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `displayOutput` | [`DisplayOutput[]`](../../doc/models/display-output.md) | Required | Information to display and the way to process the display.<br>Complete display content for output devices. At most one DisplayOutput per Device/ InfoQualify pair. |

## Example

```ts
import {
  CharacterHeight1Enum,
  CharacterWidth1Enum,
  Device11Enum,
  DisplayRequest2,
  InfoQualify1Enum,
  MenuEntryTag1Enum,
  OutputFormat1Enum,
  OutputFormat2Enum,
} from 'adyen';

const displayRequest2: DisplayRequest2 = {
  displayOutput: [
    {
      device: Device11Enum.CashierDisplay,
      infoQualify: InfoQualify1Enum.Status,
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
        }
      ],
      outputSignature: 'OutputSignature4',
    }
  ],
};
```

