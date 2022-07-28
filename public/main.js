
findRecipe=()=>{
    try {
        nonExistentFunction();
      } catch (error) {
        axios
            .get('/api/findrecipe')
            .then(res => {
            }).catch()
            alert("sorry we don't have any recipes")
      }
}
let find = document.querySelector("#find-recipe");
find.addEventListener("click", findRecipe);