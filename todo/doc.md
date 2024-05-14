# Todo List
 
## Obj : to use input txt value to create todo components on click of a button 
*we've kept the data array and the todo constainer in the same page to keep it simple

![Alt text](<Screenshot 2023-12-01 153049.png>)

here on typing something and then clicking on the button will generate a todo component 

## function
we've used an array as a state that will contain all the details of each todo, in form of object.  
and then just render each element of this data array using **map** function.

### adding a comp

```js
const create = ()=>{

   setData((p)=>{
    p.push(Box(key.current-1,key.current,boxName));
    return p;
   })

   key.current = key.current + 1;
   console.log(data,key.current);
}
```

here when the button is clicked,  
create will be called and a new object will be pushed into the array with updated id/key and the current value in the input field (ie *boxName*).

### removing a comp
id of each the todo comp is also passed on as an id of the remove button.  
when remove is clicked, the array will be traversed and the object whose id matches with the currently clicked remove button will be filtered from the array.

```js 
const remove = (e)=>{

   const x = parseInt(e.target.id);

   setData((p)=>{
   return (p.filter((e)=>{
        return x !== e.id;
    }))
   })
}
```

