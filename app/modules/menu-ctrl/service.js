import Ember from 'ember';
import get from 'ember-metal/get';
import set from 'ember-metal/set';

export default Ember.Service.extend({
    isShow: false,
    show() {
        set(this, 'isShow', true);
    },
    hide() {
        set(this, 'isShow', false);
    }
});
