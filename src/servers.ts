import type { UrlTemplate } from "./core/api-request.js";
import { SdkError } from "./core/errors.js";

export const ServerEnvironment = {
  Test: "test",
} as const;
export type ServerEnvironment = (typeof ServerEnvironment)[keyof typeof ServerEnvironment];

export type DefaultServerOptions = {
  test?: { baseUrl?: string };
};

export type Default1ServerOptions = {
  test?: { baseUrl?: string };
};

export type Default2ServerOptions = {
  test?: { baseUrl?: string };
};

export type Default3ServerOptions = {
  test?: { baseUrl?: string };
};

export type Default4ServerOptions = {
  test?: { baseUrl?: string };
};

export type Default5ServerOptions = {
  test?: { baseUrl?: string };
};

export type Default6ServerOptions = {
  test?: { baseUrl?: string };
};

export type Default7ServerOptions = {
  test?: { baseUrl?: string };
};

export type Default8ServerOptions = {
  test?: { baseUrl?: string };
};

export type Default9ServerOptions = {
  test?: { baseUrl?: string };
};

export type Default10ServerOptions = {
  test?: { baseUrl?: string };
};

export type Default11ServerOptions = {
  test?: { baseUrl?: string };
};

export type Default12ServerOptions = {
  test?: { baseUrl?: string };
};

export type Default13ServerOptions = {
  test?: { baseUrl?: string };
};

export type Default14ServerOptions = {
  test?: { baseUrl?: string };
};

export type Default15ServerOptions = {
  test?: { baseUrl?: string };
};

export type Default16ServerOptions = {
  test?: { baseUrl?: string };
};

export type Default17ServerOptions = {
  test?: { baseUrl?: string };
};

export type Default18ServerOptions = {
  test?: { baseUrl?: string };
};

export type Default19ServerOptions = {
  test?: { baseUrl?: string };
};

export type Default20ServerOptions = {
  test?: { baseUrl?: string };
};

export type Default21ServerOptions = {
  test?: { baseUrl?: string };
};

export type Default22ServerOptions = {
  test?: { baseUrl?: string };
};

export type Default23ServerOptions = {
  test?: { baseUrl?: string };
};

export type Default24ServerOptions = {
  test?: { baseUrl?: string };
};

export type Default25ServerOptions = {
  test?: { baseUrl?: string };
};

export type Default26ServerOptions = {
  test?: { baseUrl?: string };
};

export type Default27ServerOptions = {
  test?: { baseUrl?: string };
};

export type Default28ServerOptions = {
  test?: { baseUrl?: string };
};

export type ServerOptions = {
  default?: DefaultServerOptions;
  default1?: Default1ServerOptions;
  default2?: Default2ServerOptions;
  default3?: Default3ServerOptions;
  default4?: Default4ServerOptions;
  default5?: Default5ServerOptions;
  default6?: Default6ServerOptions;
  default7?: Default7ServerOptions;
  default8?: Default8ServerOptions;
  default9?: Default9ServerOptions;
  default10?: Default10ServerOptions;
  default11?: Default11ServerOptions;
  default12?: Default12ServerOptions;
  default13?: Default13ServerOptions;
  default14?: Default14ServerOptions;
  default15?: Default15ServerOptions;
  default16?: Default16ServerOptions;
  default17?: Default17ServerOptions;
  default18?: Default18ServerOptions;
  default19?: Default19ServerOptions;
  default20?: Default20ServerOptions;
  default21?: Default21ServerOptions;
  default22?: Default22ServerOptions;
  default23?: Default23ServerOptions;
  default24?: Default24ServerOptions;
  default25?: Default25ServerOptions;
  default26?: Default26ServerOptions;
  default27?: Default27ServerOptions;
  default28?: Default28ServerOptions;
};

export type Servers = {
  default: (subPath: string) => UrlTemplate;
  default1: (subPath: string) => UrlTemplate;
  default2: (subPath: string) => UrlTemplate;
  default3: (subPath: string) => UrlTemplate;
  default4: (subPath: string) => UrlTemplate;
  default5: (subPath: string) => UrlTemplate;
  default6: (subPath: string) => UrlTemplate;
  default7: (subPath: string) => UrlTemplate;
  default8: (subPath: string) => UrlTemplate;
  default9: (subPath: string) => UrlTemplate;
  default10: (subPath: string) => UrlTemplate;
  default11: (subPath: string) => UrlTemplate;
  default12: (subPath: string) => UrlTemplate;
  default13: (subPath: string) => UrlTemplate;
  default14: (subPath: string) => UrlTemplate;
  default15: (subPath: string) => UrlTemplate;
  default16: (subPath: string) => UrlTemplate;
  default17: (subPath: string) => UrlTemplate;
  default18: (subPath: string) => UrlTemplate;
  default19: (subPath: string) => UrlTemplate;
  default20: (subPath: string) => UrlTemplate;
  default21: (subPath: string) => UrlTemplate;
  default22: (subPath: string) => UrlTemplate;
  default23: (subPath: string) => UrlTemplate;
  default24: (subPath: string) => UrlTemplate;
  default25: (subPath: string) => UrlTemplate;
  default26: (subPath: string) => UrlTemplate;
  default27: (subPath: string) => UrlTemplate;
  default28: (subPath: string) => UrlTemplate;
};

export const DEFAULT_SERVER_OPTIONS = {
  default: {
    test: { baseUrl: "https://checkout-test.adyen.com/v72" },
  },
  default1: {
    test: { baseUrl: "https://pal-test.adyen.com/pal/servlet/Payment/v68" },
  },
  default2: {
    test: { baseUrl: "https://pal-test.adyen.com/pal/servlet/Recurring/v68" },
  },
  default3: {
    test: { baseUrl: "https://pal-test.adyen.com/pal/servlet/Payout/v68" },
  },
  default4: {
    test: { baseUrl: "https://pal-test.adyen.com/pal/servlet/BinLookup/v54" },
  },
  default5: {
    test: { baseUrl: "https://pal-test.adyen.com/pal/servlet/StoredValue/v46" },
  },
  default6: {
    test: { baseUrl: "https://ca-test.adyen.com/ca/services/DataProtectionService/v1" },
  },
  default7: {
    test: { baseUrl: "https://balanceplatform-api-test.adyen.com/fx/api/v1" },
  },
  default8: {
    test: { baseUrl: "https://pal-test.adyen.com/pal/services/TestCard/v1" },
  },
  default9: {
    test: { baseUrl: "https://management-test.adyen.com/v3" },
  },
  default10: {
    test: { baseUrl: "https://cal-test.adyen.com/cal/services/Account/v6" },
  },
  default11: {
    test: { baseUrl: "https://balance-control-test.adyen.com/balance-control/api/v2" },
  },
  default12: {
    test: { baseUrl: "https://cal-test.adyen.com/cal/services/Notification/v6" },
  },
  default13: {
    test: { baseUrl: "https://balanceplatform-api-test.adyen.com/bcl/v2" },
  },
  default14: {
    test: { baseUrl: "https://balanceplatform-api-test.adyen.com/btl/v4" },
  },
  default15: {
    test: { baseUrl: "https://balanceplatform-api-test.adyen.com/capital/v1" },
  },
  default16: {
    test: { baseUrl: "https://cal-test.adyen.com/cal/services/Fund/v6" },
  },
  default17: {
    test: { baseUrl: "https://test.adyen.com/authe/api/v1" },
  },
  default18: {
    test: { baseUrl: "https://kyc-test.adyen.com/lem/v4" },
  },
  default19: {
    test: { baseUrl: "https://cal-test.adyen.com/cal/services/Hop/v6" },
  },
  default20: {
    test: { baseUrl: "https://balanceplatform-api-test.adyen.com/a2aissuer-api/v1" },
  },
  default21: {
    test: { baseUrl: "https://obgateway-test.adyen.com/obgateway/v1" },
  },
  default22: {
    test: { baseUrl: "https://ca-test.adyen.com/ca/services/DisputeService/v30" },
  },
  default23: {
    test: { baseUrl: "https://balanceplatform-api-test.adyen.com/btl/api/v4" },
  },
  default24: {
    test: { baseUrl: "https://device-api-test.adyen.com/v1" },
  },
  default25: {
    test: { baseUrl: "https://softposconfig-test.adyen.com/softposconfig/v3" },
  },
  default26: {
    test: { baseUrl: "https://management-test.adyen.com/v1" },
  },
  default27: {
    test: { baseUrl: "https://checkout-test.adyen.com/checkout/possdk/v68" },
  },
  default28: {
    test: { baseUrl: "https://postfmapi-test.adyen.com/postfmapi/terminal/v1" },
  },
} as const satisfies ServerOptions;

export function buildServers(environment: ServerEnvironment, options: ServerOptions): Servers {
  return {
    default: (s) => defaultServer(environment, s, options.default),
    default1: (s) => default1Server(environment, s, options.default1),
    default2: (s) => default2Server(environment, s, options.default2),
    default3: (s) => default3Server(environment, s, options.default3),
    default4: (s) => default4Server(environment, s, options.default4),
    default5: (s) => default5Server(environment, s, options.default5),
    default6: (s) => default6Server(environment, s, options.default6),
    default7: (s) => default7Server(environment, s, options.default7),
    default8: (s) => default8Server(environment, s, options.default8),
    default9: (s) => default9Server(environment, s, options.default9),
    default10: (s) => default10Server(environment, s, options.default10),
    default11: (s) => default11Server(environment, s, options.default11),
    default12: (s) => default12Server(environment, s, options.default12),
    default13: (s) => default13Server(environment, s, options.default13),
    default14: (s) => default14Server(environment, s, options.default14),
    default15: (s) => default15Server(environment, s, options.default15),
    default16: (s) => default16Server(environment, s, options.default16),
    default17: (s) => default17Server(environment, s, options.default17),
    default18: (s) => default18Server(environment, s, options.default18),
    default19: (s) => default19Server(environment, s, options.default19),
    default20: (s) => default20Server(environment, s, options.default20),
    default21: (s) => default21Server(environment, s, options.default21),
    default22: (s) => default22Server(environment, s, options.default22),
    default23: (s) => default23Server(environment, s, options.default23),
    default24: (s) => default24Server(environment, s, options.default24),
    default25: (s) => default25Server(environment, s, options.default25),
    default26: (s) => default26Server(environment, s, options.default26),
    default27: (s) => default27Server(environment, s, options.default27),
    default28: (s) => default28Server(environment, s, options.default28),
  };
}

function defaultServer(
  environment: ServerEnvironment,
  subPath: string,
  options?: DefaultServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Test: {
      const test = { ...DEFAULT_SERVER_OPTIONS.default.test, ...options?.test };
      return { baseUrl: test.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default1Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default1ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Test: {
      const test = { ...DEFAULT_SERVER_OPTIONS.default1.test, ...options?.test };
      return { baseUrl: test.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default2Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default2ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Test: {
      const test = { ...DEFAULT_SERVER_OPTIONS.default2.test, ...options?.test };
      return { baseUrl: test.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default3Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default3ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Test: {
      const test = { ...DEFAULT_SERVER_OPTIONS.default3.test, ...options?.test };
      return { baseUrl: test.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default4Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default4ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Test: {
      const test = { ...DEFAULT_SERVER_OPTIONS.default4.test, ...options?.test };
      return { baseUrl: test.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default5Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default5ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Test: {
      const test = { ...DEFAULT_SERVER_OPTIONS.default5.test, ...options?.test };
      return { baseUrl: test.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default6Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default6ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Test: {
      const test = { ...DEFAULT_SERVER_OPTIONS.default6.test, ...options?.test };
      return { baseUrl: test.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default7Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default7ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Test: {
      const test = { ...DEFAULT_SERVER_OPTIONS.default7.test, ...options?.test };
      return { baseUrl: test.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default8Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default8ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Test: {
      const test = { ...DEFAULT_SERVER_OPTIONS.default8.test, ...options?.test };
      return { baseUrl: test.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default9Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default9ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Test: {
      const test = { ...DEFAULT_SERVER_OPTIONS.default9.test, ...options?.test };
      return { baseUrl: test.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default10Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default10ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Test: {
      const test = { ...DEFAULT_SERVER_OPTIONS.default10.test, ...options?.test };
      return { baseUrl: test.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default11Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default11ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Test: {
      const test = { ...DEFAULT_SERVER_OPTIONS.default11.test, ...options?.test };
      return { baseUrl: test.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default12Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default12ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Test: {
      const test = { ...DEFAULT_SERVER_OPTIONS.default12.test, ...options?.test };
      return { baseUrl: test.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default13Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default13ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Test: {
      const test = { ...DEFAULT_SERVER_OPTIONS.default13.test, ...options?.test };
      return { baseUrl: test.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default14Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default14ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Test: {
      const test = { ...DEFAULT_SERVER_OPTIONS.default14.test, ...options?.test };
      return { baseUrl: test.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default15Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default15ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Test: {
      const test = { ...DEFAULT_SERVER_OPTIONS.default15.test, ...options?.test };
      return { baseUrl: test.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default16Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default16ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Test: {
      const test = { ...DEFAULT_SERVER_OPTIONS.default16.test, ...options?.test };
      return { baseUrl: test.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default17Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default17ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Test: {
      const test = { ...DEFAULT_SERVER_OPTIONS.default17.test, ...options?.test };
      return { baseUrl: test.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default18Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default18ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Test: {
      const test = { ...DEFAULT_SERVER_OPTIONS.default18.test, ...options?.test };
      return { baseUrl: test.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default19Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default19ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Test: {
      const test = { ...DEFAULT_SERVER_OPTIONS.default19.test, ...options?.test };
      return { baseUrl: test.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default20Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default20ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Test: {
      const test = { ...DEFAULT_SERVER_OPTIONS.default20.test, ...options?.test };
      return { baseUrl: test.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default21Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default21ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Test: {
      const test = { ...DEFAULT_SERVER_OPTIONS.default21.test, ...options?.test };
      return { baseUrl: test.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default22Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default22ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Test: {
      const test = { ...DEFAULT_SERVER_OPTIONS.default22.test, ...options?.test };
      return { baseUrl: test.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default23Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default23ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Test: {
      const test = { ...DEFAULT_SERVER_OPTIONS.default23.test, ...options?.test };
      return { baseUrl: test.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default24Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default24ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Test: {
      const test = { ...DEFAULT_SERVER_OPTIONS.default24.test, ...options?.test };
      return { baseUrl: test.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default25Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default25ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Test: {
      const test = { ...DEFAULT_SERVER_OPTIONS.default25.test, ...options?.test };
      return { baseUrl: test.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default26Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default26ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Test: {
      const test = { ...DEFAULT_SERVER_OPTIONS.default26.test, ...options?.test };
      return { baseUrl: test.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default27Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default27ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Test: {
      const test = { ...DEFAULT_SERVER_OPTIONS.default27.test, ...options?.test };
      return { baseUrl: test.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default28Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default28ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Test: {
      const test = { ...DEFAULT_SERVER_OPTIONS.default28.test, ...options?.test };
      return { baseUrl: test.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function unknownEnvironment(environment: never): never {
  throw new SdkError({ message: `Unknown server environment: ${String(environment)}` });
}
