export const classNames = (...classes: unknown[]): string => {
  return classes.filter(Boolean).join(' ')
}

export const validCode = (code: string): boolean => {
  if (!code) return false

  if (code.length !== 19) return false

  const regex =
    /([a-zA-Z0-9]{4})-([a-zA-Z0-9]{4})-([a-zA-Z0-9]{4})-([a-zA-Z0-9]{4})/

  return regex.test(code)
}
