
# Calculate Pci Status Request

## Structure

`CalculatePciStatusRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalSalesChannels` | [`AdditionalSalesChannelEnum[] \| undefined`](../../doc/models/additional-sales-channel-enum.md) | Optional | An array of additional sales channels to generate PCI questionnaires. Include the relevant sales channels if you need your user to sign PCI questionnaires. Not required if you [create stores](https://docs.adyen.com/platforms) and [add payment methods](https://docs.adyen.com/adyen-for-platforms-model) before you generate the questionnaires.<br><br>Possible values:<br><br>* **eCommerce**<br>* **pos**<br>* **ecomMoto**<br>* **posMoto** |

## Example

```ts
import { AdditionalSalesChannelEnum, CalculatePciStatusRequest } from 'adyen';

const calculatePciStatusRequest: CalculatePciStatusRequest = {
  additionalSalesChannels: [
    AdditionalSalesChannelEnum.Pos,
    AdditionalSalesChannelEnum.PosMoto
  ],
};
```

