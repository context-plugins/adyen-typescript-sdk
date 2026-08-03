
# Calculate Pci Status Request

*This model accepts additional fields of type unknown.*

## Structure

`CalculatePciStatusRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalSalesChannels` | [`AdditionalSalesChannel[] \| undefined`](../../doc/models/additional-sales-channel.md) | Optional | An array of additional sales channels to generate PCI questionnaires. Include the relevant sales channels if you need your user to sign PCI questionnaires. Not required if you [create stores](https://docs.adyen.com/platforms) and [add payment methods](https://docs.adyen.com/adyen-for-platforms-model) before you generate the questionnaires.<br><br>Possible values:<br><br>* **eCommerce**<br>* **pos**<br>* **ecomMoto**<br>* **posMoto** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AdditionalSalesChannel, CalculatePciStatusRequest } from 'adyenlib';

const calculatePciStatusRequest: CalculatePciStatusRequest = {
  additionalSalesChannels: [
    AdditionalSalesChannel.Pos,
    AdditionalSalesChannel.PosMoto
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

