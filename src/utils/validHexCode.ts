export function validHexCode(hexCode: string) {
  const REGEX_LONG_HEX_CODE = /^#?([0-9A-Fa-f]{6})$/;
  const REGEX_SHORT_HEX_CODE = /^#?([0-9A-Fa-f]{3})$/;

  if (hexCode.length === 3 || hexCode.length === 4) {
    return REGEX_SHORT_HEX_CODE.test(hexCode);
  } else if (hexCode.length === 6 || hexCode.length === 7) {
    return REGEX_LONG_HEX_CODE.test(hexCode);
  } else return false;
}

export function formatHexCode(hexCode: string) {
  let newHexCode = hexCode;
  if (newHexCode[0] !== "#") {
    newHexCode.length === 3 && (newHexCode = newHexCode + newHexCode);
    newHexCode = `#${newHexCode.toUpperCase()}`;
  } else {
    if (newHexCode.length === 4) {
      let auxCode = newHexCode.slice(1, newHexCode.length - 1);
      newHexCode = auxCode + auxCode;
      newHexCode = `#${newHexCode.toUpperCase()}`;
    } else {
      newHexCode = newHexCode.toUpperCase();
    }
  }
  return newHexCode;
}
