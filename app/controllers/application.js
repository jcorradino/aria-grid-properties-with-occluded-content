import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    items: computed(function() {
        let arr = [];

        for (let i = 0; i < 2000; i++) {
            arr.push({index: i});
        }

        return arr;
    })
});
