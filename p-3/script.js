function count_Vowels(element) {
    let count = 0;

    for (let i = 0; i < element.length; i++) {

      if (element[i] === "a" || element[i] === "e" || element[i] === "i" || element[i] === "o" || element[i] === "u") {
        count++;
      }

    }
    console.log("the numbers of vowel in string: " + count);
  }

  let str = count_Vowels("javascript");