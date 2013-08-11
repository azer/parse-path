var path = require('./');

var context = {
  fruits: {
    berries: ['strawberry', 'grape', 'blueberry'],
    others: ['apple', 'watermelon', 'cherry', 'orange']
  },
  others: {
    vegetables: function(){
      return {
        'leaves': ['kale', 'spinach'],
        'tubers': ['potato', 'taro']
      };
    }
  }
};

it('returns property', function(){
  expect(path(context, 'fruits')).to.deep.equal(context.fruits);
  expect(path(context, 'others')).to.deep.equal(context.others);
});

it('returns child property', function(){
  expect(path(context, 'fruits.berries')).to.deep.equal(context.fruits.berries);
  expect(path(context, 'others.vegetables')).to.deep.equal(context.others.vegetables);
});

it('returns an item from array', function(){
  expect(path(context, 'fruits.berries.1')).to.deep.equal(context.fruits.berries[1]);
  expect(path(context, 'fruits.others.3')).to.deep.equal(context.fruits.others[3]);
});

it('calls functions on the path', function(){
  expect(path(context, 'others.vegetables.leaves.1')).to.deep.equal(context.others.vegetables().leaves[1]);
});
