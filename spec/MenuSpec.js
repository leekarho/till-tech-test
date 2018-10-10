'use strict'

describe('menu', function(){

  var menu

  beforeEach(function(){
    menu = new Menu();
  });

  it('customer can make an order', function(){
    menu.custOrder("Cafe Latte", 3)
    expect(menu.order).toEqual({ "Cafe Latte":3 });
  });

});
