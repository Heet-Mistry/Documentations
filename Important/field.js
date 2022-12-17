let userStr = '{"name":"Sammy","email":"sammy@example.com","plan":"Pro"}';

let userObj = JSON.parse(userStr);

console.log(userObj);

userStr = '{"name":"Sammy","email":"sammy@example.com","plan":"Pro"}';

userObj = JSON.parse(userStr, (key, value) => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return value;
});

console.log(userObj);