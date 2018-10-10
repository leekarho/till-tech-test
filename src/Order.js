(function(exports){
  function Order(){
    this.allNotes = [];
    this.note = Note
  }

  Order.prototype.createNote = function(text){
    this.allNotes.push(new this.note(text));
  }

  NoteBook.prototype.returnAllNotes = function() {
    return this.allNotes;
  }

  exports.Order = Order;
})(this);
