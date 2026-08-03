
# Getting Started with Adyen

## Introduction

The A2A payments API provides endpoints for A2A payment flows, enabling issuers to facilitate direct payments through Adyen for users with an Adyen business account.

With these endpoints, you can:

- **Retrieve payment details**: Retrieve transaction information for specific payments.
- **Confirm payments**: Confirm payments with Strong Customer Authentication (SCA).
- **Cancel payments**: Cancel pending transactions.

### Authentication

Each request made to the A2A Payments API must be signed with an API key. Generate an API key in your Customer Area.

To connect to the API, add an `X-API-Key` header with the API key as the value, for example:

```
curl
-H "Content-Type: application/json" \
-H "X-API-Key: YOUR_API_KEY" \
...
```

### Roles and permissions

To use the A2A Payments API, your API credential must have the following roles:

- **Role for A2A Issuer payments - API**

Reach out to your Adyen contact to set up these roles.

### Going live

When going live, generate an API key in your [live Customer Area](https://ca-live.adyen.com/ca). You can then use the API key to send requests to `https://balanceplatform-api-live.adyen.com/a2aissuer-api/v{version}/payments`.

## Building

### Requirements

The SDK relies on **Node.js** and **npm** (to resolve dependencies). It also requires **Typescript version >=4.1**. You can download and install Node.js and [npm](https://www.npmjs.com/) from [the official Node.js website](https://nodejs.org/en/download/).

> **NOTE:** npm is installed by default when Node.js is installed.

### Verify Successful Installation

Run the following commands in the command prompt or shell of your choice to check if Node.js and npm are successfully installed:

* Node.js: `node --version`

* npm: `npm --version`

![Version Check](https://apidocs.io/illustration/typescript?workspaceFolder=Adyen&step=versionCheck)

### Install Dependencies

- To resolve all dependencies, go to the **SDK root directory** and run the following command with npm:

```bash
npm install
```

- This will install all dependencies in the **node_modules** folder.

![Resolve Dependencies](https://apidocs.io/illustration/typescript?workspaceFolder=Adyen&workspaceName=adyenlib&step=resolveDependency)

## Installation

The following section explains how to use the generated library in a new project.

### 1. Initialize the Node Project

- Open an IDE/text editor for JavaScript like Visual Studio Code. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

- Click on **File** and select **Open Folder**. Select an empty folder of your project, the folder will become visible in the sidebar on the left.

![Open Folder](https://apidocs.io/illustration/typescript?step=openProject)

- To initialize the Node project, click on **Terminal** and select **New Terminal**. Execute the following command in the terminal:

```bash
npm init --y
```

![Initialize the Node Project](https://apidocs.io/illustration/typescript?step=initializeProject)

### 2. Add Dependencies to the Client Library

- The created project manages its dependencies using its `package.json` file. In order to add a dependency on the *AdyenLib* client library, double click on the `package.json` file in the bar on the left and add the dependency to the package in it.

![Add Adyenlib Dependency](https://apidocs.io/illustration/typescript?workspaceFolder=Adyen&workspaceName=adyenlib&step=importDependency)

- To install the package in the project, run the following command in the terminal:

```bash
npm install
```

![Install Adyenlib Dependency](https://apidocs.io/illustration/typescript?step=installDependency)

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| merchantAccount | `string` | *Default*: `'merchantAccountDefaultValue'` |
| deviceId | `string` | *Default*: `'deviceIdDefaultValue'` |
| environment | [`Environment`](README.md#environments) | The API environment. <br> **Default: `Environment.Production`** |
| timeout | `number` | Timeout for API calls.<br>*Default*: `30000` |
| httpClientOptions | [`Partial<HttpClientOptions>`](doc/http-client-options.md) | Stable configurable http client options. |
| unstableHttpClientOptions | `any` | Unstable configurable http client options. |
| logging | [`PartialLoggingOptions`](doc/partial-logging-options.md) | Logging Configuration to enable logging |
| apiKeyAuthCredentials | [`ApiKeyAuthCredentials`](doc/auth/custom-header-signature.md) | The credential object for apiKeyAuth |
| basicAuthCredentials | [`BasicAuthCredentials`](doc/auth/basic-authentication.md) | The credential object for basicAuth |
| clientKeyCredentials | [`ClientKeyCredentials`](doc/auth/custom-query-parameter.md) | The credential object for clientKey |

The API client can be initialized as follows:

### Code-Based Client Initialization

```ts
import { Client, Environment, LogLevel } from 'adyenlib';

const client = new Client({
  apiKeyAuthCredentials: {
    'X-API-Key': 'X-API-Key'
  },
  basicAuthCredentials: {
    username: 'Username',
    password: 'Password'
  },
  clientKeyCredentials: {
    'clientKey': 'clientKey'
  },
  timeout: 30000,
  environment: Environment.Production,
  logging: {
    logLevel: LogLevel.Info,
    logRequest: {
      logBody: true
    },
    logResponse: {
      logHeaders: true
    }
  },
  merchantAccount: 'merchantAccountDefaultValue',
  deviceId: 'deviceIdDefaultValue',
});
```

### Configuration-Based Client Initialization

```ts
import * as path from 'path';
import * as fs from 'fs';
import { Client } from 'adyenlib';

// Provide absolute path for the configuration file
const absolutePath = path.resolve('./config.json');

// Read the configuration file content
const fileContent = fs.readFileSync(absolutePath, 'utf-8');

// Initialize client from JSON configuration content
const client = Client.fromJsonConfig(fileContent);
```

See the [Configuration-Based Client Initialization](doc/configuration-based-client-initialization.md) section for details.

### Environment-Based Client Initialization

```ts
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';
import { Client } from 'adyenlib';

// Optional - Provide absolute path for the .env file
const absolutePath = path.resolve('./.env');

if (fs.existsSync(absolutePath)) {
  // Load environment variables from .env file
  dotenv.config({ path: absolutePath, override: true });
}

// Initialize client using environment variables
const client = Client.fromEnvironment(process.env);
```

See the [Environment-Based Client Initialization](doc/environment-based-client-initialization.md) section for details.

## Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

### Fields

| Name | Description |
|  --- | --- |
| Production | **Default** Test Environment |
| Environment2 | Test Environment |
| Environment3 | Test Environment |
| Environment4 | Test Environment |
| Environment5 | Test Environment |
| Environment6 | Test Environment |
| Environment7 | Test Environment |
| Environment8 | Test Environment |
| Environment9 | Test Environment |
| Environment10 | Test Environment |
| Environment11 | Test Environment |
| Environment12 | Test Environment |
| Environment13 | Test Environment |
| Environment14 | Test Environment |
| Environment15 | Test Environment |
| Environment16 | Test Environment |
| Environment17 | Test Environment |
| Environment18 | Test Environment |
| Environment19 | Test Environment |
| Environment20 | Test Environment |
| Environment21 | Test Environment |
| Environment22 | Test Environment |
| Environment23 | Test Environment |
| Environment24 | Test Environment |
| Environment25 | Test Environment |
| Environment26 | Test Environment |
| Environment27 | Test Environment |
| Environment28 | Test Environment |
| Environment29 | Test Environment |
| Environment30 | Test Environment |
| Environment31 | Live Environment |
| Environment32 | Live Environment |
| Environment33 | Live Environment |
| Environment34 | Live Environment |
| Environment35 | Live Environment |
| Environment36 | Live Environment |
| Environment37 | Live Environment |
| Environment38 | Live Environment |
| Environment39 | Live Environment |
| Environment40 | Live Environment |
| Environment41 | Live Environment |
| Environment42 | Live Environment |
| Environment43 | Live Environment |
| Environment44 | Live Environment |
| Environment45 | Live Environment |
| Environment46 | Live Environment |
| Environment47 | Live Environment |
| Environment48 | Live Environment |
| Environment49 | Live Environment |
| Environment50 | Live Environment |
| Environment51 | Live Environment |
| Environment52 | Live Environment |
| Environment53 | Live Environment |
| Environment54 | Live Environment |
| Environment55 | Live Environment |
| Environment56 | Live Environment |
| Environment57 | Live Environment |
| Environment58 | Live Environment |
| Environment59 | Live Environment |
| Environment60 | Live Environment |
| Environment61 | Live environment for East Asia |
| Environment62 | Live environment for East Asia |
| Environment63 | Live environment for East Asia |
| Environment64 | Live environment for East Asia |
| Environment65 | Live environment for East Asia |
| Environment66 | Live environment for East Asia |
| Environment67 | Live environment for East Asia |
| Environment68 | Live environment for East Asia |
| Environment69 | Live environment for East Asia |
| Environment70 | Live environment for East Asia |
| Environment71 | Live environment for East Asia |
| Environment72 | Live environment for East Asia |
| Environment73 | Live environment for East Asia |
| Environment74 | Live environment for East Asia |
| Environment75 | Live environment for East Asia |
| Environment76 | Live environment for East Asia |
| Environment77 | Live environment for East Asia |
| Environment78 | Live environment for East Asia |
| Environment79 | Live environment for East Asia |
| Environment80 | Live environment for East Asia |
| Environment81 | Live environment for East Asia |
| Environment82 | Live environment for East Asia |
| Environment83 | Live environment for East Asia |
| Environment84 | Live environment for East Asia |
| Environment85 | Live environment for East Asia |
| Environment86 | Live environment for East Asia |
| Environment87 | Live environment for East Asia |
| Environment88 | Live environment for East Asia |
| Environment89 | Live environment for East Asia |
| Environment90 | Live environment for East Asia |
| Environment91 | Live environment for Europe |
| Environment92 | Live environment for Europe |
| Environment93 | Live environment for Europe |
| Environment94 | Live environment for Europe |
| Environment95 | Live environment for Europe |
| Environment96 | Live environment for Europe |
| Environment97 | Live environment for Europe |
| Environment98 | Live environment for Europe |
| Environment99 | Live environment for Europe |
| Environment100 | Live environment for Europe |
| Environment101 | Live environment for Europe |
| Environment102 | Live environment for Europe |
| Environment103 | Live environment for Europe |
| Environment104 | Live environment for Europe |
| Environment105 | Live environment for Europe |
| Environment106 | Live environment for Europe |
| Environment107 | Live environment for Europe |
| Environment108 | Live environment for Europe |
| Environment109 | Live environment for Europe |
| Environment110 | Live environment for Europe |
| Environment111 | Live environment for Europe |
| Environment112 | Live environment for Europe |
| Environment113 | Live environment for Europe |
| Environment114 | Live environment for Europe |
| Environment115 | Live environment for Europe |
| Environment116 | Live environment for Europe |
| Environment117 | Live environment for Europe |
| Environment118 | Live environment for Europe |
| Environment119 | Live environment for Europe |
| Environment120 | Live environment for Europe |
| Environment121 | Live environment for United States of America |
| Environment122 | Live environment for United States of America |
| Environment123 | Live environment for United States of America |
| Environment124 | Live environment for United States of America |
| Environment125 | Live environment for United States of America |
| Environment126 | Live environment for United States of America |
| Environment127 | Live environment for United States of America |
| Environment128 | Live environment for United States of America |
| Environment129 | Live environment for United States of America |
| Environment130 | Live environment for United States of America |
| Environment131 | Live environment for United States of America |
| Environment132 | Live environment for United States of America |
| Environment133 | Live environment for United States of America |
| Environment134 | Live environment for United States of America |
| Environment135 | Live environment for United States of America |
| Environment136 | Live environment for United States of America |
| Environment137 | Live environment for United States of America |
| Environment138 | Live environment for United States of America |
| Environment139 | Live environment for United States of America |
| Environment140 | Live environment for United States of America |
| Environment141 | Live environment for United States of America |
| Environment142 | Live environment for United States of America |
| Environment143 | Live environment for United States of America |
| Environment144 | Live environment for United States of America |
| Environment145 | Live environment for United States of America |
| Environment146 | Live environment for United States of America |
| Environment147 | Live environment for United States of America |
| Environment148 | Live environment for United States of America |
| Environment149 | Live environment for United States of America |
| Environment150 | Live environment for United States of America |
| Environment151 | Live environment for United States of America |
| Environment152 | Live environment for United States of America |
| Environment153 | Live environment for United States of America |
| Environment154 | Live environment for United States of America |
| Environment155 | Live environment for United States of America |
| Environment156 | Live environment for United States of America |
| Environment157 | Live environment for United States of America |
| Environment158 | Live environment for United States of America |
| Environment159 | Live environment for United States of America |
| Environment160 | Live environment for United States of America |
| Environment161 | Live environment for United States of America |
| Environment162 | Live environment for United States of America |
| Environment163 | Live environment for United States of America |
| Environment164 | Live environment for United States of America |
| Environment165 | Live environment for United States of America |
| Environment166 | Live environment for United States of America |
| Environment167 | Live environment for United States of America |
| Environment168 | Live environment for United States of America |
| Environment169 | Live environment for United States of America |
| Environment170 | Live environment for United States of America |
| Environment171 | Live environment for United States of America |
| Environment172 | Live environment for United States of America |
| Environment173 | Live environment for United States of America |
| Environment174 | Live environment for United States of America |
| Environment175 | Live environment for United States of America |
| Environment176 | Live environment for United States of America |
| Environment177 | Live environment for United States of America |
| Environment178 | Live environment for United States of America |
| Environment179 | Live environment for United States of America |
| Environment180 | Live environment for United States of America |

## Authorization

This API uses the following authentication schemes.

* [`ApiKeyAuth (Custom Header Signature)`](doc/auth/custom-header-signature.md)
* [`BasicAuth (Basic Authentication)`](doc/auth/basic-authentication.md)
* [`clientKey (Custom Query Parameter)`](doc/auth/custom-query-parameter.md)

## List of APIs

* [I DEA Lprofiles](doc/controllers/i-dea-lprofiles.md)
* [Accountholders](doc/controllers/accountholders.md)
* [Balancesoverview](doc/controllers/balancesoverview.md)
* [Balancetransfers](doc/controllers/balancetransfers.md)
* [Balanceaccounts](doc/controllers/balanceaccounts.md)
* [Managedpayoutschedules](doc/controllers/managedpayoutschedules.md)
* [Custompayoutschedules Sweeps](doc/controllers/custompayoutschedules-sweeps.md)
* [Authorizedcardusers](doc/controllers/authorizedcardusers.md)
* [Recurringtopups](doc/controllers/recurringtopups.md)
* [Paymentinstruments](doc/controllers/paymentinstruments.md)
* [Paymentinstrumentgroups](doc/controllers/paymentinstrumentgroups.md)
* [Transactionrules](doc/controllers/transactionrules.md)
* [Bankaccountvalidation](doc/controllers/bankaccountvalidation.md)
* [Networktokens](doc/controllers/networktokens.md)
* [Grantaccounts](doc/controllers/grantaccounts.md)
* [Grantoffers](doc/controllers/grantoffers.md)
* [Cardorders](doc/controllers/cardorders.md)
* [Directdebitmandates](doc/controllers/directdebitmandates.md)
* [Managecard PIN](doc/controllers/managecard-pin.md)
* [Transferroutes](doc/controllers/transferroutes.md)
* [SC Adevicemanagement](doc/controllers/sc-adevicemanagement.md)
* [Transferlimits-Balanceaccountlevel](doc/controllers/transferlimits-balanceaccountlevel.md)
* [Transferlimits-Balanceplatformlevel](doc/controllers/transferlimits-balanceplatformlevel.md)
* [Manage SC Adevices](doc/controllers/manage-sc-adevices.md)
* [SC Aassociationmanagement](doc/controllers/sc-aassociationmanagement.md)
* [Dynamicoffers](doc/controllers/dynamicoffers.md)
* [Paymentlinks](doc/controllers/paymentlinks.md)
* [Cloudendpointsandconnection](doc/controllers/cloudendpointsandconnection.md)
* [Hosted Onboarding Page](doc/controllers/hosted-onboarding-page.md)
* [PCI Compliance Questionnaire Page](doc/controllers/pci-compliance-questionnaire-page.md)
* [Legalentities](doc/controllers/legalentities.md)
* [Transferinstruments](doc/controllers/transferinstruments.md)
* [Businesslines](doc/controllers/businesslines.md)
* [Termsof Service](doc/controllers/termsof-service.md)
* [PC Iquestionnaires](doc/controllers/pc-iquestionnaires.md)
* [Taxe Deliveryconsent](doc/controllers/taxe-deliveryconsent.md)
* [Hosted Onboarding](doc/controllers/hosted-onboarding.md)
* [Account-Companylevel](doc/controllers/account-companylevel.md)
* [Account-Merchantlevel](doc/controllers/account-merchantlevel.md)
* [Account-Storelevel](doc/controllers/account-storelevel.md)
* [Payoutsettings-Merchantlevel](doc/controllers/payoutsettings-merchantlevel.md)
* [Users-Companylevel](doc/controllers/users-companylevel.md)
* [Users-Merchantlevel](doc/controllers/users-merchantlevel.md)
* [My AP Icredential](doc/controllers/my-ap-icredential.md)
* [AP Icredentials-Companylevel](doc/controllers/ap-icredentials-companylevel.md)
* [AP Icredentials-Merchantlevel](doc/controllers/ap-icredentials-merchantlevel.md)
* [AP Ikey-Companylevel](doc/controllers/ap-ikey-companylevel.md)
* [AP Ikey-Merchantlevel](doc/controllers/ap-ikey-merchantlevel.md)
* [Clientkey-Companylevel](doc/controllers/clientkey-companylevel.md)
* [Clientkey-Merchantlevel](doc/controllers/clientkey-merchantlevel.md)
* [Allowedorigins-Companylevel](doc/controllers/allowedorigins-companylevel.md)
* [Allowedorigins-Merchantlevel](doc/controllers/allowedorigins-merchantlevel.md)
* [Webhooks-Companylevel](doc/controllers/webhooks-companylevel.md)
* [Webhooks-Merchantlevel](doc/controllers/webhooks-merchantlevel.md)
* [Paymentmethods-Merchantlevel](doc/controllers/paymentmethods-merchantlevel.md)
* [Terminals-Terminallevel](doc/controllers/terminals-terminallevel.md)
* [Terminalactions-Companylevel](doc/controllers/terminalactions-companylevel.md)
* [Terminalactions-Terminallevel](doc/controllers/terminalactions-terminallevel.md)
* [Terminalorders-Companylevel](doc/controllers/terminalorders-companylevel.md)
* [Terminalorders-Merchantlevel](doc/controllers/terminalorders-merchantlevel.md)
* [Terminalsettings-Companylevel](doc/controllers/terminalsettings-companylevel.md)
* [Terminalsettings-Merchantlevel](doc/controllers/terminalsettings-merchantlevel.md)
* [Terminalsettings-Storelevel](doc/controllers/terminalsettings-storelevel.md)
* [Terminalsettings-Terminallevel](doc/controllers/terminalsettings-terminallevel.md)
* [Androidfiles-Companylevel](doc/controllers/androidfiles-companylevel.md)
* [Splitconfiguration-Merchantlevel](doc/controllers/splitconfiguration-merchantlevel.md)
* [Donationcampaigns](doc/controllers/donationcampaigns.md)
* [Account Verification](doc/controllers/account-verification.md)
* [Payments App](doc/controllers/payments-app.md)
* [Instantpayouts](doc/controllers/instantpayouts.md)
* [Dispute Attachments](doc/controllers/dispute-attachments.md)
* [Raise Disputes](doc/controllers/raise-disputes.md)
* [Sessionauthentication](doc/controllers/sessionauthentication.md)
* [API](doc/controllers/api.md)
* [Payments](doc/controllers/payments.md)
* [Accounts](doc/controllers/accounts.md)
* [Verification](doc/controllers/verification.md)
* [Platform](doc/controllers/platform.md)
* [Balances](doc/controllers/balances.md)
* [General](doc/controllers/general.md)
* [Grants](doc/controllers/grants.md)
* [Donations](doc/controllers/donations.md)
* [Modifications](doc/controllers/modifications.md)
* [Recurring](doc/controllers/recurring.md)
* [Orders](doc/controllers/orders.md)
* [Utility](doc/controllers/utility.md)
* [Rates](doc/controllers/rates.md)
* [Documents](doc/controllers/documents.md)
* [Initialization](doc/controllers/initialization.md)
* [Reviewing](doc/controllers/reviewing.md)
* [Transfers](doc/controllers/transfers.md)
* [Transactions](doc/controllers/transactions.md)
* [Capital](doc/controllers/capital.md)
* [Cash Out](doc/controllers/cash-out.md)

## SDK Infrastructure

### Configuration

* [HttpClientOptions](doc/http-client-options.md)
* [RetryConfiguration](doc/retry-configuration.md)
* [ProxySettings](doc/proxy-settings.md)
* [Configuration-Based Client Initialization](doc/configuration-based-client-initialization.md)
* [Environment-Based Client Initialization](doc/environment-based-client-initialization.md)
* [PartialLoggingOptions](doc/partial-logging-options.md)
* [PartialRequestLoggingOptions](doc/partial-request-logging-options.md)
* [PartialResponseLoggingOptions](doc/partial-response-logging-options.md)
* [LoggerInterface](doc/logger-interface.md)

### HTTP

* [HttpRequest](doc/http-request.md)

### Utilities

* [ApiResponse](doc/api-response.md)
* [ApiError](doc/api-error.md)

