/**
 * @module libs/objExt
 * @author dennis
 * @email
 * @since  17/1/14
 */

/**
 * 扩充对象
 * @param {Object} target - 被扩展的对象
 * @param {Object} source - 待扩展的内容
 * @return {Object} 被扩展后的对象
 */
export function assign(target, source) {
    if (!target || !source) {
        return target || {};
    }

    if (target instanceof Object) {
        Object.keys(target).map((item) => {
            target[item] = source[item];
        });
    }
    return target;
}
