/**
 * 通过这个插件扩展往Vue上面扩展filters、directives、mixins
 */

import filters from '../filters/main';
import directives from '../directives/main';
import utils from '../utils/main';

const VueExtension = {};

VueExtension.install = function (Vue) {
    for(let i in filters) {
        if (filters.hasOwnProperty(i)) {
            Vue.filter(filters[i]);
        }
    }

    Vue.$filters = Vue.prototype.$filters = filters;
    Vue.$directives = Vue.prototype.$directives = directives;
    Vue.$utils = Vue.prototype.$utils = utils;
};

export default VueExtension;
