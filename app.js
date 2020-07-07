console.log('start password manager');

var storage = require('node-persist');
storage.initSync();

//storage.setItemSync('name', 'Rabi');

/*storage.setItemSync('accounts', [{
    username: 'Haddi',
    balance: 0
}]);
*/

var accounts = storage.getItemSync('accounts');

/*accounts.remove({
    username: 'yallu',
    balance: 1
});
*/

storage.setItemSync('accounts', accounts);
//var name = storage.getItemSync('name');
//console.log(name);

console.log(accounts);

