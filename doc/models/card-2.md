
# Card 2

## Structure

`Card2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authentication` | [`Authentication1 \| undefined`](../../doc/models/authentication-1.md) | Optional | Contains the card user's password and mobile phone number. This is required when you issue cards that can be used to make online payments within the EEA and the UK, or can be added to digital wallets. Refer to [3D Secure and digital wallets](https://docs.adyen.com/issuing/3d-secure-and-wallets) for more information. |
| `bin` | `string \| undefined` | Optional | The bank identification number (BIN) of the card number. |
| `brand` | `string` | Required | The brand of the physical or the virtual card.<br>Possible values: **visa**, **mc**. |
| `brandVariant` | `string` | Required | The brand variant of the physical or the virtual card. For example, **visadebit** or **mcprepaid**.<br><br>> Reach out to your Adyen contact to get the values relevant for your integration. |
| `cardholderName` | `string` | Required | The name of the cardholder.<br>Maximum length: 26 characters.<br><br>**Constraints**: *Maximum Length*: `26` |
| `configuration` | [`CardConfiguration2 \| undefined`](../../doc/models/card-configuration-2.md) | Optional | Contains information about the configuration profile for your cards. The configuration profile consists of settings required when creating a physical or a virtual card. You identify a configuration profile with its `configurationProfileId`.<br><br>When you provide this field in a request, you can override the settings of an existing configuration profile.<br><br>Reach out to your Adyen contact to get the values that you can send in this object. |
| `cvc` | `string \| undefined` | Optional | The CVC2 value of the card.<br><br>> The CVC2 is not sent by default. This is only returned in the `POST` response for single-use virtual cards. |
| `deliveryContact` | [`DeliveryContact1 \| undefined`](../../doc/models/delivery-contact-1.md) | Optional | The delivery contact (name and address) for physical card delivery. |
| `expiration` | [`Expiry2 \| undefined`](../../doc/models/expiry-2.md) | Optional | The expiration date of the card. |
| `formFactor` | [`FormFactor1Enum`](../../doc/models/form-factor-1-enum.md) | Required | The form factor of the card.<br>Possible values: **virtual**, **physical**. |
| `lastFour` | `string \| undefined` | Optional | Last last four digits of the card number. |
| `number` | `string \| undefined` | Optional, Read-only | The primary account number (PAN) of the card.<br><br>> The PAN is masked by default and returned only for single-use virtual cards. |
| `threeDSecure` | `string \| undefined` | Optional | The 3DS configuration of the physical or the virtual card. Possible values: **fullySupported**, **secureCorporate**.<br><br>> Reach out to your Adyen contact to get the values relevant for your integration. |
| `usage` | `string \| undefined` | Optional | Specifies how many times the card can be used. Possible values: **singleUse**, **multiUse**.<br><br>> Reach out to your Adyen contact to determine the value relevant for your integration. |

## Example

```ts
import { Card2, FormFactor1Enum, PhoneTypeEnum, Type410Enum } from 'adyen';

const card2: Card2 = {
  brand: 'brand4',
  brandVariant: 'brandVariant2',
  cardholderName: 'cardholderName4',
  formFactor: FormFactor1Enum.Virtual,
  authentication: {
    email: 'email8',
    password: 'password2',
    phone: {
      number: 'number8',
      type: Type410Enum.Landline,
    },
  },
  bin: 'bin0',
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
  cvc: 'cvc4',
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
};
```

