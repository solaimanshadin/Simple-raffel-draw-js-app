const addBtn = document.getElementById("add-btn");
const participentList = document.getElementById("praticipent-list");     
const entryMgs = document.getElementById("entry-mgs"); 
const getWinnerBtn = document.getElementById("get-winner"); 
    
let   participentArray = [];

// Checking for duplicate entry
const isDuplicate = (name) => {
    if(participentArray.includes(name)){
        return true;
    }
}

// List ui 
const showParticipentList = () => {
    let UIList = '';
    participentArray.forEach((item, index) => {
        UIList += `<li> <span> ${item} </span> <button onclick="removeParticipent(${index})" id="close"> &times; </button> </li>`
    });
    participentList.innerHTML = UIList;

}
addBtn.addEventListener('click' , () => {
    let newParticipent = document.getElementById("participent-name").value.trim();
    entryMgs.style.display = "block";
    if(newParticipent.length){
        if(isDuplicate(newParticipent)){
            entryMgs.innerHTML = "This a duplicate Entry";
        }else{
            entryMgs.innerHTML = ""
            participentArray.push(newParticipent);
            document.getElementById("participent-name").value = null;
    
        }
        showParticipentList();
         //Disapering Message After a certain time
         setTimeout(()=> entryMgs.style.display = "none" , 1500 );
    }
})

// Remove participent 
const removeParticipent = (indexNo) => {
    participentArray.splice(indexNo,1);
    showParticipentList()
}

getWinnerBtn.addEventListener("click" , getWinner) 


function getWinner () {
    let rollCount = 0
    const rollInterval = setInterval(() => {
        if(rollCount === 30){
          clearInterval(rollInterval);
        }else{
            const winnerIndex = Math.floor(Math.random() * participentArray.length);
            document.getElementById("winner").innerText = participentArray[winnerIndex];
            rollCount++;
        }
      
    }, 100);
    

}