import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'span',

    dots: computed('ticks', function() {
      const get_ticks = function(i, ticks) {
        const rating = ticks / 4;
        if (i > rating) return 0;
        if (i < rating) return 4;
        return ticks % 4;
      };

      const max = this.max;
      const ticks = this.get('ticks');
      return [...Array(max).keys()].map((i) => get_ticks(i, ticks));
    }),

    progress: computed('ticks', function() {
      const ticks = this.get('ticks');
      return ticks / 4;
    })
});
