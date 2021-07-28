//ignore space
//ignore special characters
//lowercase applied to all 
//reverse word should equal input word after it's stripped of all special characters

// take in the user input from the page
function get_user_input() {

    //make sure there's no existing text when user tries again 
    document.getElementById("alert").classList.add("invisible");
    document.getElementById("pali").classList.add("invisible");
   
    //get the raw user input
    let my_string = document.getElementById("user_text").value;

    //remove all special characters
    my_string = my_string.replace(/[^a-zA-Z ]/g, "");
    //remove all white spaces
    my_string = my_string.replace(/\s+/g, '');
    //lowercase all letters
    my_string = my_string.toLowerCase();

    return my_string
  }
  
  // create the reversed string from user input 
  function reverse() {
    
    //empty array to be used to store characters
    let reverse = [];
  
    // original string - need this for comparison
    my_string = get_user_input();

    let my_len = my_string.length;
    let x = my_len-1;
    //for loop to iterate through user input and place in array
    for(i=x; i>-1; i--) {
      //add letters from user string to array
      reverse += my_string[i];
  
    }
  
    // if (my_string == reverse) {
    //     palindrome = true;
    // }
    //return array
    return reverse
    //return dictionary object
    //return {word: reverse, status: palindrome}
  }
  

  function checkStatus(first, last){
      let status = false;
    if (first == last) {
        status = true;
    }
    return status
  }

  // display the reverse string on the HTML page 
  function display_reverse() {
      
    answer = reverse();
    original = get_user_input();
    new_status = checkStatus(original, answer)
    typeof new_status
  
    my_result = `<h4>Your reversed string is: ${answer}</h4>`;
    //You nailed it! message 
    document.getElementById("msg").innerHTML = my_result;
    //remove invisible attribute from the main div
    document.getElementById("alert").classList.remove("invisible");
    // document.getElementById("pali").innerHTML = `Palindrome TEST!`;
    // document.getElementById("alert").classList.remove("invisible");

    switch (true) {
        case new_status:
            document.getElementById("pali").innerHTML = `Palindrome SUCCESS!`;
            document.getElementById("pali").classList.remove("invisible");
            break;
    
        default:
            document.getElementById("pali").innerHTML = `Whoops! NOT a palindrome`;
            document.getElementById("pali").classList.remove("invisible");
            break;
    }
    
    

  }