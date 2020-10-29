import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'span',
  
    get_ticks(i) {
      let rating = this.ticks / 4;
      return 0 if i > rating;
      return 4 if i < rating;
      return this.ticks % 4;
    }

    dots: computed('ticks', function() {
      let max = this.max;
      return (new Array(max)).fill({}).map(function (fill, i) { return { ticks: get_ticks(i+1) }; });
    })
});
