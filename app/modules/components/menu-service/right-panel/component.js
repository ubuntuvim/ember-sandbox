import Ember from 'ember';
import get from 'ember-metal/get';
import set from 'ember-metal/set';

export default Ember.Component.extend({
    menuCtrl: Ember.inject.service(),
    actions: {
        show() {
            get(this, 'menuCtrl').show();
        },
        hide() {
            get(this, 'menuCtrl').hide();
        },
        changeMenu() {
            this.toggleProperty('menuCtrl.isShow');
        }
    }
});
