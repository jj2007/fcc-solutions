var Person = function(firstAndLast) {
  var myname = firstAndLast;
  this.getFullName = function() {
    return myname;
  };
  this.getFirstName = function() {
    return myname.split(" ")[0];
  };
  this.getLastName = function() {
    return myname.split(" ")[1];
  };
  this.setFirstName = function(first) {
    return (myname = first + " " + firstAndLast.split(" ")[1]);
  };
  this.setLastName = function(last) {
    return (myname = firstAndLast.split(" ")[0] + " " + last);
  };
  this.setFullName = function(fullname) {
    return (myname = fullname);
  };
};

var bob = new Person("Bob Ross");
