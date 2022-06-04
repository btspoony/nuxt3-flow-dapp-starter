export const useFlowAccount = () =>
  useState<UserSnapshot>("currentAccount", () => ref(null));
