
# Enable Service Request 2

Content of the Enable Service Request message.

## Structure

`EnableServiceRequest2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionAction` | [`TransactionAction1Enum`](../../doc/models/transaction-action-1-enum.md) | Required | Action to realise on a transaction. In an `EnableService` request message:<br><br>- Starts a transaction by a swipe-ahead mechanism, with the services which are enabled.<br>- Aborts a swipe-ahead transaction or started by a `CardAcquisition`, and not followed by a service request from the Sale System to complete the transaction.<br>  Possible values:<br><br>* **AbortTransaction**<br>* **StartTransaction** |
| `servicesEnabled` | [`ServicesEnabledEnum[] \| undefined`](../../doc/models/services-enabled-enum.md) | Optional | Services which are enabled before the start-up of a transaction.<br>Mandatory if `TransactionAction` is `StartTransaction`, absent if not.<br>Possible values:<br><br>* **CardAcquisition**<br>* **Loyalty**<br>* **Payment** |
| `displayOutput` | [`DisplayOutput2 \| undefined`](../../doc/models/display-output-2.md) | Optional | Information to display and the way to process the display. |

## Example

```ts
import {
  CharacterHeight1Enum,
  CharacterWidth1Enum,
  Device11Enum,
  EnableServiceRequest2,
  InfoQualify1Enum,
  MenuEntryTag1Enum,
  OutputFormat1Enum,
  OutputFormat2Enum,
  ServicesEnabledEnum,
  TransactionAction1Enum,
} from 'adyen';

const enableServiceRequest2: EnableServiceRequest2 = {
  transactionAction: TransactionAction1Enum.StartTransaction,
  servicesEnabled: [
    ServicesEnabledEnum.Loyalty,
    ServicesEnabledEnum.CardAcquisition
  ],
  displayOutput: {
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
    responseRequiredFlag: false,
    minimumDisplayTime: 110,
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
  },
};
```

