let script = document.createElement('script');
script.src = "./script.mjs"; // no such script
document.head.append(script);

script.onerror = function() {
  alert("Error loading " + this.src); // Error loading https://example.com/404.js
};
script.onload = () => {
  console.log("done fnally...")
}

console.log(i)