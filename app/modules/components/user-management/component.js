import Ember from 'ember';
import get from 'ember-metal/get';
import set from 'ember-metal/set';

export default Ember.Component.extend({
    selectUser: null,
    
    actions: {
      selectUser(user) {
        set(this, 'selectedUser', user);
      },

      clearUser() {
        set(this, 'selectedUser', null);
      }
    }
});
