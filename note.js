console.log('this is the notes');
shownnotes();
let addbtn = document.getElementById('addbtn')
addbtn.addEventListener('click' , function(e){

    let addtxt = document.getElementById('addtxt') //id is from text area 
    let notes = localStorage.getItem('notes')
    if(notes == null)
    {
        notesobj = [];
    }
    else {
        notesobj =  JSON.parse(notes);
    }
    notesobj.push(addtxt.value)
    //then update the local storage 
    localStorage.setItem('notes' , JSON.stringify(notesobj));
    addtxt.value = '';
    console.log(notesobj);

    shownnotes();
})
function shownnotes() {
    let notes = localStorage.getItem('notes')
    if(notes == null)
    {
        notesobj = [];
    }
    else {
        notesobj =  JSON.parse(notes);
    }

    let string1 = "";    // this is blank string 
    notesobj.forEach(function(element , index) {
    string1 += 
            `<div class="card" style="width: 18rem;">
                 <div class="card-body">
                 <h5 class="card-title">Note ${index + 1}</h5>
                  <p class="card-text">${element + 1}</p>
                  <button id  = "${index} " onclick="deletenote(this.id)" class="btn btn-primary">Delete Note</button>
             </div>`
    });

    let notesEle = document.getElementById('notes')
    if(notesobj.length != 0 ){
            notesEle.innerHTML = string1;
    }else 
    {
        notesEle.innerHTML = `Dont Have Any Notes to show "Make Notes " from above section`;
    }
}

//function to delete note
function deletenote(index) {
         console.log('this is deleting' , index);
         let notes = localStorage.getItem('notes')
         if(notes == null)
         {
             notesobj = [];
         }
         else {
             notesobj =  JSON.parse(notes);
         }
         notesobj.splice(index , 1)  
         localStorage.setItem('notes' , JSON.stringify(notesobj));  //after delete call we update in local storage 
         shownnotes();
}

let search = document.getElementById("SearchTxt")
search.addEventListener("input", function(){
    let inputVal = search.value;
    console.log('event serching' , inputVal);

    let card = document.getElementsByClassName('card')
    Array.from(card).forEach(function(element){
        let cardtxt = element.getElementsByTagName('p')[0].innerText;
        console.log( 'this is txtvafter serching  ',cardtxt);
        if(cardtxt.includes(inputVal))
        {
            element.style.display = 'block';
        }
        else
         {
            element.style.display = 'none';
        }
    })
})

