// #region String
String.prototype.isEmpty = String.prototype.isEmpty || function() {
    return this.length == 0;
}

// #endregion String

// #region Array
Array.prototype.insertAt = Array.prototype.insertAt || function(index,item) {
    this.splice(index, 0, item);
    return this;
}

Array.prototype.remove = Array.prototype.remove || function(item) {
    const index = this.indexOf(item);
    if (index == -1) 
        return;
    this.splice(index,1);
    return this;
}
// #endregion Array

// #region Object

// #endregion Object

