const FindUplicateUniqString=(arr)=>{
    const newArr = arr.split(" ");
    const myElem = [];
    newArr.forEach((element, index) => {
        newArr.indexOf(element) !== index && myElem.push(element);
        
    });
   const Duplicate= [...new Set(myElem)];
   return Duplicate.sort();
}

console.log(FindUplicateUniqString("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam alias maiores eos reiciendis nemo iusto repellat. Dolorum beatae sint blanditiis perferendis provident sit voluptatum pariatur fugiat ut nisi fugit, rerum recusandae quos magnam sequi aperiam tempora excepturi dicta doloremque dignissimos alias adipisci error, atque esse. Blanditiis voluptate est ratione nisi aperiam inventore dolorem corporis animi maiores omnis? Consequatur deleniti itaque corrupti quaerat cupiditate eveniet laudantium ipsam, reiciendis, nulla culpa voluptatibus ipsa dignissimos tempore alias ipsum architecto amet eaque nesciunt vel nobis quam, quia nam necessitatibus. Autem illum commodi id vero sapiente cumque! Enim, optio. Consectetur assumenda saepe pariatur qui maxime quam labore, provident quos aliquid reiciendis eveniet, animi, repellat veniam quae neque doloremque alias officia. Maxime asperiores suscipit modi molestias labore saepe quam tempore ex quaerat aperiam, perspiciatis tempora. Quos dolorem eveniet velit sint sequi excepturi natus harum laudantium. Et voluptatibus expedita quibusdam labore molestias dolor earum veritatis quod consequuntur"));
