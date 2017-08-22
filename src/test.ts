interface A {
  name: String
}

function b (config:A) {
  console.log(config.name);
}

b({name: "my name is typescript"})
