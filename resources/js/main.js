/**
 * Created by ram on 4/7/17.
 */


var todoData = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')): {
          todoM : [],
         completeM : []
};

   console.log(todoData);

//svg complete & remove
var remooveSvg = '<svg height=512px id=Layer_1 style="enable-background:new 0 0 512 512"version=1.1 viewBox="0 0 512 512"width=512px x=0px xml:space=preserve xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink y=0px><g><g><path class=fill d="M425.298,51.358h-91.455V16.696c0-9.22-7.475-16.696-16.696-16.696H194.854c-9.22,0-16.696,7.475-16.696,16.696v34.662    H86.703c-9.22,0-16.696,7.475-16.696,16.696v51.357c0,9.22,7.475,16.696,16.696,16.696h338.593c9.22,0,16.696-7.475,16.696-16.696    V68.054C441.993,58.832,434.518,51.358,425.298,51.358z M300.45,51.358h-88.9V33.391h88.9V51.358z"fill=#D80027 /></g></g><g><g><path class=fill d="M93.192,169.497l13.844,326.516c0.378,8.937,7.735,15.988,16.68,15.988h264.568c8.945,0,16.302-7.051,16.68-15.989    l13.843-326.515H93.192z M205.53,444.105c0,9.22-7.475,16.696-16.696,16.696c-9.22,0-16.696-7.475-16.696-16.696V237.391    c0-9.22,7.475-16.696,16.696-16.696c9.22,0,16.696,7.475,16.696,16.696V444.105z M272.693,444.105    c0,9.22-7.475,16.696-16.696,16.696s-16.696-7.475-16.696-16.696V237.391c0-9.22,7.475-16.696,16.696-16.696    s16.696,7.475,16.696,16.696V444.105z M339.856,444.105c0,9.22-7.475,16.696-16.696,16.696s-16.696-7.475-16.696-16.696V237.391    c0-9.22,7.475-16.696,16.696-16.696s16.696,7.475,16.696,16.696V444.105z"fill=#D80027 /></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';
var completeSvgAfter = '<svg height=512px id=Capa_1 style="enable-background:new 0 0 47 47"version=1.1 viewBox="0 0 47 47"width=512px x=0px xml:space=preserve xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink y=0px><g><g id=Layer_1_2_><g><path class=fill d="M6.12,38.52V5.136h26.962v28.037l5.137-4.243V2.568C38.219,1.15,37.07,0,35.652,0h-32.1C2.134,0,0.985,1.15,0.985,2.568     v38.519c0,1.418,1.149,2.568,2.567,2.568h22.408L22.33,38.52H6.12z"fill=#FFDA44 /><path class=fill d="M45.613,27.609c-0.473-0.446-1.2-0.467-1.698-0.057l-11.778,9.734l-7.849-4.709c-0.521-0.312-1.188-0.219-1.603,0.229     c-0.412,0.444-0.457,1.117-0.106,1.613l8.506,12.037c0.238,0.337,0.625,0.539,1.037,0.543c0.004,0,0.008,0,0.012,0     c0.408,0,0.793-0.193,1.035-0.525l12.6-17.173C46.149,28.78,46.084,28.055,45.613,27.609z"fill=#FFDA44 /><path class=fill d="M27.306,8.988H11.897c-1.418,0-2.567,1.15-2.567,2.568s1.149,2.568,2.567,2.568h15.408c1.418,0,2.566-1.15,2.566-2.568     S28.724,8.988,27.306,8.988z"fill=#FFDA44 /><path class=fill d="M27.306,16.691H11.897c-1.418,0-2.567,1.15-2.567,2.568s1.149,2.568,2.567,2.568h15.408c1.418,0,2.566-1.149,2.566-2.568     C29.874,17.841,28.724,16.691,27.306,16.691z"fill=#FFDA44 /><path class=fill d="M27.306,24.395H11.897c-1.418,0-2.567,1.15-2.567,2.568s1.149,2.568,2.567,2.568h15.408c1.418,0,2.566-1.15,2.566-2.568     C29.874,25.545,28.724,24.395,27.306,24.395z"fill=#FFDA44 /></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';
var completeSvg = '<svg height=512px id=Layer_1 style="enable-background:new 0 0 489.544 489.544"version=1.1 viewBox="0 0 489.544 489.544"width=512px x=0px xml:space=preserve xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink y=0px><g><g><path class=fiil d="M138.943,205.941c-7-7.1-18.4-7.1-25.5-0.1c-7.1,7-7.1,18.4-0.1,25.5l85.4,86c3.4,3.4,7.9,5.3,12.7,5.3c0,0,0,0,0.1,0    c4.8,0,9.3-1.9,12.7-5.2l260-258.6c7-7,7.1-18.4,0.1-25.5s-18.4-7.1-25.5-0.1l-91.9,91.3c-39.1-48.1-97.9-76.3-160.4-76.3    c-29.2,0-57.4,6-83.8,17.7c-25.5,11.4-48.2,27.5-67.3,48.1c-19.1,20.5-33.6,44.2-43.1,70.4c-9.9,27.3-13.9,56-11.8,85.4    c7.1,101.7,89.2,183.9,190.9,191.2c5,0.4,10.1,0.5,15.1,0.5c47.3,0,93-16,129.8-45.8c40.2-32.4,66.6-78.3,74.5-129.1    c1.6-10.4,2.4-21.1,2.4-31.8c0-9.9-8.1-18-18-18c-9.9,0-18,8.1-18,18c0,8.8-0.7,17.6-2,26.3c-13.4,87-93,150.2-181.2,143.9    c-83.9-6-151.7-73.8-157.6-157.8c-3.4-48,12.7-93.7,45.3-128.7c32.2-34.5,77.7-54.3,124.8-54.3c52.8,0,102.4,24.5,134.7,65.9    l-129.6,129L138.943,205.941z"fill=#D80027 /></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';

refreshList();

document.getElementById('add').addEventListener('click',onAddClick); //add event listener on button

function onAddClick() {
    var value = document.getElementById('item').value;
    if(value){
        addItemTodo(value);
        todoData.todoM.push(value);
        //console.log(todoData);
        storeData();
        document.getElementById('item').value = '';

    }
}

document.getElementById('item').addEventListener('keydown',function (e) {
    if(e.code==='Enter'){
        onAddClick();
    }
})

function storeData() {
   localStorage.setItem('todoList',JSON.stringify(todoData));
}


function refreshList() {
  if(!todoData.todoM.length && !todoData.completeM.length) return;

  for(var i=0; i<todoData.todoM.length; i++){
      var value = todoData.todoM[i];
      addItemTodo(value);
  }

  for(var j = 0; j<todoData.completeM.length; j++){
      var value = todoData.completeM[j];
      addItemTodo(value,true);
  }
}

//add item to todolist
function addItemTodo(item,completed) {
  var list = (completed) ? document.getElementById('complete') : document.getElementById('todoLi');

  var liItem = document.createElement('li');
  liItem.innerText = item;

  var buttons = document.createElement('div');
  buttons.classList.add('button');


  var remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = remooveSvg;
  //add event listener on remove svg
  remove.addEventListener('click',removeTodo);

  var complete = document.createElement('button');
  complete.classList.add('complete');
  complete.innerHTML = completeSvg;
  // add event listener on complete svg
  complete.addEventListener('click',completeTodo);


  buttons.appendChild(remove); //append button inside li->div->button->class->remove
  buttons.appendChild(complete); //append button inside li->div->button->class->complete
  liItem.appendChild(buttons);  //append div inside the list
  //list.appendChild(liItem);
    list.insertBefore(liItem,list.childNodes[0]);

}


//remove TodoTask
function removeTodo() {

    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;
    var value = id.innerText;
    //console.log(id);
    if(id==='todoLi'){
        todoData.todoM.splice(todoData.todoM.indexOf(value),1);
    }
    else{
        todoData.completeM.splice(todoData.completeM.indexOf(value),1);
    }
    storeData();
    parent.removeChild(item);

}

//complete TodoTask
function completeTodo() {
    var item = this.parentNode.parentNode;
    //console.log(item);
    var parent = item.parentNode;
    var parentId = parent.id;
    var setTarget;

    //remove data from todoM object
    var value = item.innerText;
    console.log(value);



    if(parentId==='todoLi'){
        todoData.todoM.splice(todoData.todoM.indexOf(value),1);
        todoData.completeM.push(value);
    }
    else {
        todoData.completeM.splice(todoData.completeM.indexOf(value),1);
        todoData.todoM.push(value);
    }

    storeData();
    console.log(todoData);


    if(parentId==='todoLi'){
        //todoTask is completed
        setTarget = document.getElementById('complete');
        parent.removeChild(item);
        setTarget.insertBefore(item,setTarget.childNodes[0]);
    }
    else {
       //todoTask is redone
    }



}
