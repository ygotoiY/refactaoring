class Order {
    constructor(aRecord) {
      this._data = aRecord;
    }
  
    get quantity()  {return this._data.quantity;}
    get itemPrice() {return this._data.itemPrice;}
    
    get price() {
      return this.getBasePrice() -
        Math.max(0, this.quantity - 500) * this.itemPrice * 0.05 +
        Math.min(this.getBasePrice() * 0.1, 100);
    }

    getBasePrice() {
        return this.quantity * this.itemPrice;
    }
}