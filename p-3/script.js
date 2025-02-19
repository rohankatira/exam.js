function count_Vowels(vowel) {
    let count = 0;

    for (let i = 0; i < vowel.length; i++) {

      if (vowel[i] === "a" || vowel[i] === "e" || vowel[i] === "i" || vowel[i] === "o" || vowel[i] === "u") {
        count++;
      }

    }
    console.log("the numbers of vowel in string: " + count);
  }

  let str = count_Vowels("javascript");