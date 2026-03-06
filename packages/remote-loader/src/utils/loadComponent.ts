import { WebpackContainer } from "src/types";

export const loadComponent = async <T extends object>(scope: string, module: string) => {
  await __webpack_init_sharing__("default");

  const container = (window as unknown as Record<string, WebpackContainer>)[scope];

  await container.init(__webpack_share_scopes__.default);

  const factory = await container.get(module);

  return factory() as T;
}
