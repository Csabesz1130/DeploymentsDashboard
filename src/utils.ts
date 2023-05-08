export const extractEnvironments = (inputString: string) => {
  const environmentPattern = /-\w+/g;
  const environments = inputString.match(environmentPattern);

  if (environments) {
    return environments.map((env) => env.slice(1));
  }

  return [];
};
