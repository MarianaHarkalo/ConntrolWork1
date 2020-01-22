let b = document.getElementsByClassName('Box');
let b1 = document.getElementsByClassName('Box1');
let box = document.getElementsByClassName('box');
const f1 = document.forms['f1'];
const getId = id => document.getElementById(id);
getId('edit').onclick = function () {
    getId('box_edit').style.display = 'block';
    getId('box_style').style.display = 'none';
    getId('content_add').style.display='none';
    getId('textarea').value = getId('block1').innerHTML;
}//тут в значення textarea ми присвоюємо значення innerHTML block1 при кліку на кнопку edit
getId('save').onclick = function () {
    getId('box_edit').style.display = 'none';
    getId('block1').innerHTML = getId('textarea').value;
}//тепер ми textarea(вже змінене) записуємо в block1 при кліку на кнопку save
getId('style').onclick = function () {
    getId('box_style').style.display = 'block';
    getId('box_edit').style.display = 'none';

    const f2 = document.forms['form_radio'];
    for (let i = 0; i < f2.length; i++) {
        f2.elements[i].onclick = function () {
            getId('block1').style.fontSize = this.value;//за допомогою кліку на radiobutton визначаємо розмір тексту,який є записаний у значення radiobutton
        }
    }
    const f4 = document.forms['form_option'];
    for (let i = 0; i < f4.length; i++) {
        f4.elements[i].onclick = function () {
            getId('block1').style.fontFamily = this.value;
        }
    }
    getId('text-color').onclick = function () {
        getId('box_appear').style.display = 'flex';
        for (let i = 0; i < box.length; i++) {
            box[i].onclick = function () {
                getId('block1').style.color = this.style.backgroundColor;
                getId('box_appear').style.display = 'none';

            }
        }
    }
    getId('background-color').onclick = function () {
        getId('box_appear').style.display = 'flex';
        for (let i = 0; i < box.length; i++) {
            box[i].onclick = function () {
                getId('block1').style.background = this.style.backgroundColor;
                getId('box_appear').style.display = 'none';

            }
        }
    }
    const f5 = document.forms['form_style'];
    getId('radio_style1').onclick = function () {
        if (this.checked) {
            getId('block1').style.fontWeight = this.value;
        } else {
            this.checked = false
            getId('block1').style.fontWeight = 'normal'
        }
    }
    getId('radio_style2').onclick = function () {
        if (this.checked) {
            getId('block1').style.fontStyle = this.value;
        } else {
            this.checked = false
            getId('block1').style.fontStyle = 'normal'
        }
    }
}
getId('add').onclick = function () {
    getId('table_content').style.display='none';
    getId('list_content').style.display='none';
    getId('add').style.display='block';
    getId('content_add').style.display='block';
    getId('block1').style.display = 'none';
    getId('edit').style.display = 'none';
    getId('style').style.display = 'none';
    getId('box_edit').style.display = 'none';
    getId('box_style').style.display = 'none';
    getId('radio_table').onclick = function () {
        if (getId('radio_table').checked) {
            getId('table_content').style.display='block';
            getId('list_content').style.display='none';
            getId('button_create').onclick = function () {
                getId("content_add").style.display = 'none';
                getId('box_edit').style.display = 'block';
                getId('block1').style.display = 'block';
                getId('edit').style.display = 'inline';
                getId('style').style.display = 'inline';
                getId('add').style.display = 'inline';
                getId('save').style.display = 'inline';
                var k = getId('count_TR').value;//зберігаємо в змінну k  кількість tr
                var m = getId('count_TD').value;//зберігаємо в змінну m  кількість td
                var new_table = document.createElement('table');//створюємо таблицю
                for (var y = 0; y <= k - 1; y++) {
                    var new_row = new_table.insertRow(y);
                    for (var x = 0; x <= m - 1; x++) {
                        var new_coll = new_row.insertCell(x);
                        new_coll.textContent='TD';
                        new_coll.style.width = getId('width_TD').value+'px';
                        new_coll.style.height =  getId('height_TD').value+'px'; 
                        // new_coll.style.color=getId('color_border').value;
                        new_coll.style.border=getId('width_border').value+'px'+' '+getId('color_border').value+' '+getId('type_border').value;

                    }
                }
                getId('textarea').value = getId('block1').innerHTML + ('<table>' + new_table.innerHTML + '</table>');// записуємо innerHTML таблиці в textarea
                getId('save').onclick = function () {
                    getId('box_edit').style.display = 'none';
                    getId('block1').innerHTML = getId('textarea').value;// виводимо таблицю в block1
                     getId('block1').style.height=400+'px';//збільшуємо висоту block1
                      getId('radio_table').checked=false;//забирає позначку з rabiobutton "create table"
                      getId('width_TD').value="";
                      getId('height_TD').value="";
                      getId('color_border').value="";
                      getId('width_border').value="";
                      getId('color_border').value="";
                      getId('type_border').value="";
                }
              

            }

        }  
       
    }
 getId('radio_list').onclick = function () {
        if (getId('radio_list').checked) {
            getId('table_content').style.display='none';
            getId('list_content').style.display='block';
            let ul = document.createElement('ul');//створюємо список
            getId('create_list').onclick = function (){
                getId("content_add").style.display = 'none';
                getId('box_edit').style.display = 'block';
                getId('block1').style.display = 'block';
                getId('edit').style.display = 'inline';
                getId('style').style.display = 'inline';
                getId('add').style.display = 'inline';
                getId('save').style.display = 'inline';
                const w=getId('count_li').value;//зберігаємо в змінну w кількість li
                for (let i = 0; i <= w-1; i++) {
                    let li = document.createElement('li');//створюємо ді
                    ul.appendChild(li);//додаємо елементи в список
                    li.textContent=`item ${i+1}`;
                    li.style.listStyle= getId('type_marks').value;
                   
                }
                getId('textarea').value = getId('block1').innerHTML +('<ul>'+ ul.innerHTML+'</ul>');// записуємо innerHTML списку в textarea
                

            }
            getId('save').onclick = function () {
                getId('box_edit').style.display = 'none';
                getId('block1').innerHTML = getId('textarea').value;// виводимо список в block1
                getId('block1').style.height=500+'px';
                getId('radio_list').checked=false;//забирає позначку з rabiobutton "create list"
                getId('count_li').value="";
            }
           
          
        }
    }
}