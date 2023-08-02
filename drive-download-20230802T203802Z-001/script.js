const names = ["John", "Jane", "Jesse", "Jessica", "Jim"];

for (const name of names) {
  if (name.startsWith("J") || name.startsWith("j")) {
    console.log("Goodbye J" + name);
  } else {
    console.log("Hello " + name);
  }
}
