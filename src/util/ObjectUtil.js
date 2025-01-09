class ObjectUtil {
  /**
   * Prints the typeOf a variable on console
   *
   * @param {*} variable
   */
  static printTypeOf(variable) {
    for (const [key, value] of Object.entries(variable)) {
      console.log(`'${key}' = '${value}', type of: ${typeof value}`);
    }
  }
}

module.exports = ObjectUtil;