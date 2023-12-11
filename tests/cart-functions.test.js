const {calculateChange, isSufficientPayment, calculateTotal} = require('../src/js/cart-functions')

describe("calculateChange", () => {
  test("total 5 pay 6 change 1", () => {
    expect( calculateChange(5, 6)).toEqual(1);
        
});
});

describe("isSufficientPayment", () => {
  test("Given total 5 and payment 6, it returns true", () => {
    expect( isSufficientPayment(5, 6)).toEqual(true);
        
});
  test("Given total 10 and payment 7, it returns false", () => {
    expect( isSufficientPayment(10, 7)).toEqual(false);
      
});
  test ("given total 3 and payment 3, it returns true", () => {
    expect( isSufficientPayment(3, 3)).toEqual(true);

});
  test ("given total 13 and payment 12, it returnes false", () => {
    expect( isSufficientPayment(13, 12)).toEqual(false);
  });
});


describe("calculateTotal", () => {
  test("given an itemsArray of one item with price 4.99, returns 4.99", () => {
    let items = [
      {
        name: "Milk",
        price: 4.99,
      },
    ]
    expect( calculateTotal(items)).toBeCloseTo(4.99);
        
});

test("three items in array 3.50, 12.99, 0.03 returns 16.52", () => {
  let items =[
      {
          name: "Jelly",
          price: 3.50,
      },

      {
          name: "cashews",
          price: 12.99,
      },

      {   name: "candy",
          price: .03,
      },
  ];
    expect( calculateTotal(items)).toBeCloseTo(16.52);
});

test("empty itemsArray returns 0", () => {
  let items = []
    expect( calculateTotal(items)).toBeCloseTo(0);
});

test("add all items of array should be 21.51", () => {
  let items =[
    {
        name: "Jelly",
        price: 3.50,
    },

    {
        name: "Cashews",
        price: 12.99,
    },

    {   name: "Candy",
        price: .03,
    },

    {
        name: "Milk",
        price: 4.99,
    },
];
  expect( calculateTotal(items)).toBeCloseTo(21.51);
});
});


describe("addItem", () => {
  test("adds 1 item to cart", () => {
    let items =[];
    addItem(items, "Beans", 3.00);
    expect(items).toStrictEqual([
      {
        name: "Beans",
        price: 3.00
      },
    ]);     
});

  test("adds 1 item to array of 1", () => {
    let items = [

      {
        name: "Beans",
        price: 3.00,
      },
    ]
    addItem(items, "Sugar", 2.00);
    expect(items).toStrictEqual([
      {
        name: "Beans",
        price: 3.00
      },

      {
        name: "Sugar",
        price: 2.00,
      },
    ]);
  })
  
  test("add 1 item to an array of 3 items", () => {
    let items = [

      {
        name:  "Beans",
        price:  3.00,
      },
      {
        name:   "Sugar",
        price:  2.00,    
     },

      {
        name:   "Bread",
        price:  1.00,    
      },
  ]
  addItem(items, "Milk", 5.00);
  expect(items).toStrictEqual([
      {
        name: "Beans",
        price: 3.00
      },

      {
        name: "Sugar",
        price: 2.00,
      },

      {
        name: "Bread",
        price: 1.00,
      },

      {
        name: "Milk",
        price: 5.00,  
      },
    ]);
  })
});

describe("removeItem", () => {
  test("remove the first element of an array of 3 items", () => {
    let items = [

      {
        name: "Beans",
        price: 3.00
      },

      {
        name: "Sugar",
        price: 2.00,
      },

      {
        name: "Bread",
        price: 1.00,
      },
    ]

    removeItem(items, 0);
    expect(items).toStrictEqual([

      {
        name: "Sugar",
        price: 2.00,
      },

      {
        name: "Bread",
        price: 1.00,
      },

    ]);
        
  });

  //this is where you left off
  test("remove the last element of an array of 3 items", () => {
    let items = [

      {
        name: "Beans",
        price: 3.00
      },

      {
        name: "Sugar",
        price: 2.00,
      },

      {
        name: "Bread",
        price: 1.00,
      },
    ]
    removeItem(items, 2);
    expect(items).toStrictEqual([

      {
        name: "Beans",
        price: 3.00
      },

      {
        name: "Sugar",
        price: 2.00,
      },

    ])
        
  });

  test("remove the middle element of an array of 3 items", () => {
    let items = [
    {
      name: "Beans",
      price: 3.00
    },

    {
      name: "Sugar",
      price: 2.00,
    },

    {
      name: "Bread",
      price: 1.00,
    },
  ]   
  
    removeItem(items, 1);
    expect(items).toStrictEqual([

      {
        name: "Beans",
        price: 3.00
      },

      {
        name: "Bread",
        price: 1.00,
      },

    ])
  });

  test("remove the only element of an array of 1 items", () => {
    let items = [
      {
        name: "Beans",
        price: 3.00
      },
    ]

    removeItem(items, 0);
    expect(items).toStrictEqual([]);
        
  });

});