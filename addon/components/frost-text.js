import _ from 'lodash'
import Ember from 'ember'
import layout from '../templates/components/frost-text'

export default Ember.Component.extend({
  attributeBindings: ['autofocus', 'placeholder', 'disabled', 'readonly', 'value'],
  classNames: ['frost-text'],
  layout: layout,

  showClear: false,

  onChange: Ember.on('input', function (e) {
    const id = this.get('id')
    const value = e.target.value
    const onInput = this.get('on-input')

    if (_.isFunction(onInput)) {
      onInput({id, value})
    }
    this.set('showClear', true)
  }),

  onFocus: Ember.on('focusIn', function (e) {
    e.target.select()
  }),

  actions: {
    clear: function () {
      this.set('value', '')
      this.$('input').focus()
      this.set('showClear', false)
    }
  }
})
