/* Check if value is a finite primitive number.
 *
 * |Name  |Type   |Desc                            |
 * |------|-------|--------------------------------|
 * |val   |*      |Value to check                  |
 * |return|boolean|True if value is a finite number|
 */

/* example
 * isFinite(3); // -> true
 * isFinite(Infinity); // -> false
 */

/* module
 * env: all
 * test: all
 */

_('root');

var nativeIsFinite = root.isFinite,
    nativeIsNaN = root.isNaN;

exports = function(val) {
    return nativeIsFinite(val) && !nativeIsNaN(parseFloat(val));
};
