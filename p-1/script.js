const reverse_string = function () {
  let str = "rohan",
    i,
    reverse_string ="";
  for (i = 0; i <= str.length; i++) {
    reverse_string=str.charAt(i)+reverse_string
    console.log(reverse_string);
  };
};
reverse_string();
