
# Card Info 1

Contains information about the card. Required when you create a payment instrument of `type` **card**.

## Structure

`CardInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authentication` | [`Authentication1 \| undefined`](../../doc/models/authentication-1.md) | Optional | Contains the card user's password and mobile phone number. This is required when you issue cards that can be used to make online payments within the EEA and the UK, or can be added to digital wallets. Refer to [3D Secure and digital wallets](https://docs.adyen.com/issuing/3d-secure-and-wallets) for more information. |
| `brand` | `string` | Required | The brand of the physical or the virtual card.<br>Possible values: **visa**, **mc**. |
| `brandVariant` | `string` | Required | The brand variant of the physical or the virtual card. For example, **visadebit** or **mcprepaid**.<br><br>> Reach out to your Adyen contact to get the values relevant for your integration. |
| `cardholderName` | `string` | Required | The name of the cardholder.<br>Maximum length: 26 characters.<br><br>**Constraints**: *Maximum Length*: `26` |
| `configuration` | [`CardConfiguration2 \| undefined`](../../doc/models/card-configuration-2.md) | Optional | Contains information about the configuration profile for your cards. The configuration profile consists of settings required when creating a physical or a virtual card. You identify a configuration profile with its `configurationProfileId`.<br><br>When you provide this field in a request, you can override the settings of an existing configuration profile.<br><br>Reach out to your Adyen contact to get the values that you can send in this object. |
| `deliveryContact` | [`DeliveryContact1 \| undefined`](../../doc/models/delivery-contact-1.md) | Optional | The delivery contact (name and address) for physical card delivery. |
| `formFactor` | [`FormFactor1Enum`](../../doc/models/form-factor-1-enum.md) | Required | The form factor of the card.<br>Possible values: **virtual**, **physical**. |
| `threeDSecure` | `string \| undefined` | Optional | The 3DS configuration of the physical or the virtual card. Possible values: **fullySupported**, **secureCorporate**.<br><br>> Reach out to your Adyen contact to get the values relevant for your integration. |
| `usage` | `string \| undefined` | Optional | Specifies how many times the card can be used. Possible values: **singleUse**, **multiUse**.<br><br>> Reach out to your Adyen contact to determine the value relevant for your integration. |

## Example

```ts
import {
  CardInfo1,
  FormFactor1Enum,
  PhoneTypeEnum,
  Type410Enum,
} from 'adyen';

const cardInfo1: CardInfo1 = {
  brand: 'brand4',
  brandVariant: 'brandVariant2',
  cardholderName: 'cardholderName6',
  formFactor: FormFactor1Enum.Physical,
  authentication: {
    email: 'email8',
    password: 'password2',
    phone: {
      number: 'number8',
      type: Type410Enum.Landline,
    },
  },
  configuration: {
    configurationProfileId: 'configurationProfileId6',
    activation: 'activation2',
    activationUrl: 'activationUrl8',
    bulkAddress: {
      country: 'country0',
      city: 'city6',
      company: 'company6',
      email: 'email0',
      houseNumberOrName: 'houseNumberOrName4',
      line1: 'line18',
    },
    cardImageId: 'cardImageId0',
    carrier: 'carrier8',
  },
  deliveryContact: {
    address: {
      country: 'country0',
      city: 'city6',
      line1: 'line18',
      line2: 'line20',
      line3: 'line38',
      postalCode: 'postalCode8',
    },
    name: {
      firstName: 'firstName4',
      lastName: 'lastName4',
    },
    company: 'company4',
    email: 'email0',
    fullPhoneNumber: 'fullPhoneNumber0',
    phoneNumber: {
      phoneCountryCode: 'phoneCountryCode8',
      phoneNumber: 'phoneNumber0',
      phoneType: PhoneTypeEnum.Fax,
    },
    webAddress: 'webAddress4',
  },
  threeDSecure: 'threeDSecure6',
  usage: 'usage8',
};
```

