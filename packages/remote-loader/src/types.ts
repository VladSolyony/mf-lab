export type WebpackContainer = {
  init(shareScope: unknown): Promise<void>;
  get(module: string): Promise<() => any>;
};
