//Infon on people
const user = 
[
{id : 1 , firstName : "Harry" , lastName : "Daniel" , phoneNumber : "0901177884", Email : "Daniel@gmail.com", IMG: "./avatar/persona12.jpg", Color: "rgb(108, 143, 255)", address: "Naf Harmony road 18, River state, Port-Harcourt."},
{id: 2 ,firstName : "James" , lastName : "Brown" ,  phoneNumber : "0801459546", Email : "JamesB24@gmail.com", IMG: "avatar/persona2.jpg", Color: "rgb(200, 255, 255)", address: "10 Ukaegbu Rd Ogbor hill Aba"},
{id: 3 ,firstName : "Charles",lastName : "Darwin" , phoneNumber : "07054231756", Email : "CDarwinevolv@gmail.com", IMG: "avatar/wallpaperflare.com_wallpaper (8).jpg", Color: "rgb(255, 49, 49)", address: "NO 7 Nwosu Close, Ogbor hill Aba"},
{id: 4 ,firstName : "Dave" , lastName : "Martin" , phoneNumber : "08022432172", Email : "DaveMartin@gmail.com", IMG: "avatar/WhatsApp Image 2024-10-25 at 18.05.42_806b5aef.jpg", Color: "rgb(255, 168, 233)", address: "Chief Chinenye St,Osisioma Ngwa "},
{id: 5 ,firstName : "Eden" , lastName : "Lenard" , phoneNumber : "09156731932", Email : "EL2965@gmail.com", IMG: "avatar/WhatsApp Image 2024-10-25 at 18.06.00_7aab069d.jpg", Color: "rgb(254, 255, 204)", address: "Imerem Amapu Ntigha"},
{id: 6 ,firstName : "Fred" , lastName : "Ido" , phoneNumber : "07189455315", Email : "Fredii11@gmail.com", IMG: "avatar/WhatsApp Image 2024-10-25 at 18.06.57_fbb0150c.jpg", Color: "rgb(255, 234, 118)", address: "50 Opobo Rd Ogbor hill Aba"},
{id: 7 ,firstName : "Greg" , lastName : "Hiccup" , phoneNumber : "09087653345", Email : "Toothless8@gmail.com", IMG: "avatar/1335375.jpeg", Color: "rgb(142, 255, 119)", address: "Umueledi Village,Old Umuahia"},
{id: 8 ,firstName : "Henry" , lastName : "Adams" , phoneNumber : "07154998734", Email : "AdamsHenry25@gmail.com", IMG: "avatar/2703942.jpg", Color: "rgb(190, 50, 255)", address: "Okon Rd,Amuma Ohafia"},
{id: 9 ,firstName : "Martin" , lastName : "Luther" , phoneNumber : "09021889321", Email : "MartinDream23@gmail.com", IMG: "avatar/Tanya5.jpg", Color: "rgb(255, 251, 189)", address: "No 9 Nnanna St Ogbor hill Aba"},
{id: 10 ,firstName : "Jacob" , lastName : "Jr" , phoneNumber : "09044557819", Email : "JJJhastesspiderman@gmail.comm", IMG: "avatar/wallpaperflare.com_wallpaper (1).jpg", Color: "rgb(0, 204, 255)", address: "NO 1 Abo Close,Ohuhu Umuahia"},
]

let tableBody = document.getElementById("tableContent")
let indexTwoMain = document.getElementById("indexTwoContent")
let showButton = document.getElementsByClassName("showButtonOption")
let optionButton = document.getElementsByClassName("viewDeleteOption")
let tableInfo = document.getElementsByClassName("tableRow")
let info = localStorage.getItem("ID")
let dialouge = document.getElementById("confirmationBox")
let box = document.getElementById("grayBox")

//Kabab
function show(id){
    for(let i = 0;i < user.length; i++){
        if(id == i){
        optionButton[id].style = "display : flex;"
        showButton[id].style = "display : none;"

        }else{
        optionButton[i].style = "display : none;"
        showButton[i].style = "display : block;"
        }
    }

}
//Back to options
function back(id){
    showButton[id].style = "display : block;"
    optionButton[id].style = "display : none;"
}

function deleteData(id , confirmation){
    localStorage.setItem("ID",id)
    info = localStorage.getItem("ID")

    box.style = "display : block;"
    dialouge.style = "display : block;"

    if(confirmation == 2){
        tableInfo[id].style = 'display : none'
        console.log(tableInfo[id].style.display == 'none')
        
        let sn = 0
        for(let i = 0; i < tableInfo.length ;i++){
            if(id != i && tableInfo[i].style.display != 'none'){
                tableInfo[i].children[0].innerHTML = `${++sn}`        
            }
        }
        box.style = "display : none;"
        dialouge.style = "display : none;"

    }else if(confirmation == 3){
    box.style = "display : none;"
    dialouge.style = "display : none;"
    }
 

}


if(location.pathname == "/index.html"){
    function tableInput(i){
        for(i;i < user.length; i++){
            tableBody.innerHTML += 
            `
                <tr class="tableRow">
                    <td>${i + 1}</td>
                    <td>${user[i].firstName}</td>
                    <td>${user[i].lastName}</td>
                    <td>${user[i].phoneNumber}</td>
                    <td>${user[i].Email}</td>
                    <td class="buttonSpace">
                        <div class="showButtonOption">
                            <button type="button" onclick="show(${i})" class="kabab">
                            +
                            </button>
                        </div> 
        
                        <div class="viewDeleteOption">
                                <button type="button" onclick="viewPage(${i})" class="view" >
                                    View
        
                            <button type="button" onclick="deleteData(${i},1)" class="delete">
                                Delete
                            </button>
                            <button type="button" onclick="back(${i})" class="back">
                                -
                            </button>
                        </div> 
                    </td>  
                </tr>
            `
        }
    }
    tableInput(0)

}else{
    indexTwoMain.innerHTML = `
    <div>
            <img src="${user[info].IMG}" alt="Avatar">
            <h1>Name: ${user[info].firstName}  ${user[info].lastName}</h1>
            <h3>Phone Number: ${user[info].phoneNumber}</h3>
            <h3>Email: ${user[info].Email}</h3>        
             <p>
                <Address>
                    ${user[info].address}
                </Address>
            </p>

        </div>
    `
    document.body.style = `background-color: ${user[info].Color}`
}
   
//store data for other page
function viewPage(id){
    localStorage.setItem("ID",id)
    location.href = "/index2.html"
}

