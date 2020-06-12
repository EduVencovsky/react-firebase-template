export const stringFormat = (str : string, ...args : any[]) =>
  args ? str.replace(/{(\d+)}/g, function (match, number) {
    return typeof args[number] != 'undefined'
      ? args[number]
      : match
  }) : str