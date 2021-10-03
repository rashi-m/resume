function addNewLANGField(){
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("langField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows",1);
  newNode.setAttribute("placeholder", "Enter here"); 

  let langOb = document.getElementById("lang");
  let langAddButtonOb=document.getElementById("langAddButton");

  langOb.insertBefore(newNode, langOb.weAddButtonOb);
}

function addNewHOBField(){
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("hobField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows",1);
  newNode.setAttribute("placeholder", "Enter here"); 

  let hobOb = document.getElementById("hob");
  let hobAddButtonOb=document.getElementById("hobAddButton");

  hobOb.insertBefore(newNode, hobOb.weAddButtonOb);
}

function addNewWEField(){
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows",3);
  newNode.setAttribute("placeholder", "Enter here"); 

  let weOb = document.getElementById("we");
  let weAddButtonOb=document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weOb.weAddButtonOb);
}

function addNewAQField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("eqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows",3);
  newNode.setAttribute("placeholder", "Enter here"); 

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb=document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqOb.aqAddButtonOb);

}

function addNewPROField(){
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("proField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows",3);
  newNode.setAttribute("placeholder", "Enter here"); 

  let proOb = document.getElementById("pro");
  let proAddButtonOb=document.getElementById("proAddButton");

  proOb.insertBefore(newNode, proOb.proAddButtonOb);
}

function addNewAAField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("aaField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows",3);
  newNode.setAttribute("placeholder", "Enter here"); 

  let aaOb = document.getElementById("aa");
  let aaAddButtonOb=document.getElementById("aaAddButton");

  aaOb.insertBefore(newNode, aaOb.aaAddButtonOb);

}

function addNewOCField(){
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("ocField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows",3);
  newNode.setAttribute("placeholder", "Enter here"); 

  let ocOb = document.getElementById("oc");
  let ocAddButtonOb=document.getElementById("ocAddButton");

  ocOb.insertBefore(newNode, ocOb.weAddButtonOb);
}

// generating cv
function generateCV(){
  //console.log("generating CV")
  let nameField=document.getElementById("nameField").value;
  let nameT1=document.getElementById("nameT1");
  nameT1.innerHTML=nameField;
  
  document.getElementById("nameT2").innerHTML=nameField;

  //contact
  let contactField=document.getElementById("contactField").value;
  let contactT=document.getElementById("contactT");
  contactT.innerHTML=contactField;

  //mail id
  let mailField=document.getElementById("mailField").value;
  let mailT=document.getElementById("mailT");
  mailT.innerHTML=mailField;

  //address
  let addressField=document.getElementById("addressField").value;
  let addressT=document.getElementById("addressT");
  addressT.innerHTML=addressField;

  // facebook link
  let fbField=document.getElementById("fbField").value;
  let fbT=document.getElementById("fbT");
  fbT.innerHTML=fbField;

  // instagram link
  let instaField=document.getElementById("instaField").value;
  let instaT=document.getElementById("instaT");
  instaT.innerHTML=instaField;

  // linkedin link
  let linkedField=document.getElementById("linkedField").value;
  let linkedT=document.getElementById("linkedT");
  linkedT.innerHTML=linkedField;

  // hobbies
  let hobs=document.getElementsByClassName("hobField");
  let str3=""
  for(let e of hobs) {
    str3+= `<li> ${e.value} </li>`;
  } 

  document.getElementById("hobT").innerHTML=str3;

  // languages
  let lans=document.getElementsByClassName("langField");
  let str4=""
  for(let e of lans) {
    str4+= `<li> ${e.value} </li>`;
  } 

  document.getElementById("langT").innerHTML=str4;

  // objective
  //let objectiveField=document.getElementById("objectiveField").value;
  //let objectiveT=document.getElementById("objectiveT");
  //objectiveT.innerHTML=objectiveField;

  document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

  //work experience
  let wes=document.getElementsByClassName("weField");
  let str=""
  for(let e of wes) {
    str=str + `<li> ${e.value} </li>`;
  } 

  document.getElementById("weT").innerHTML=str;

  //academic qualification
  let aqs=document.getElementsByClassName('eqField');
  let str1=""
  for(let e of aqs) {
    str1 += `<li> ${e.value} </li>`;
  }

  document.getElementById("aqT").innerHTML=str1;

  // projects
  let pros=document.getElementsByClassName("proField");
  let str5=""
  for(let e of pros) {
    str5=str5 + `<li> ${e.value} </li>`;
  } 

  document.getElementById("proT").innerHTML=str5;

  // achievements and awards
  let aas=document.getElementsByClassName("aaField");
  let str6=""
  for(let e of aas) {
    str6=str6 + `<li> ${e.value} </li>`;
  } 

  document.getElementById("aaT").innerHTML=str6;

  // online courses
  let ocs=document.getElementsByClassName("ocField");
  let str7=""
  for(let e of ocs) {
    str7=str7 + `<li> ${e.value} </li>`;
  } 

  document.getElementById("aaT").innerHTML=str6;


  //code for setting image
  let file=document.getElementById("imgField").files[0]
  console.log(file);

  let reader=new FileReader();

  reader.readAsDataURL(file);

  console.log(reader.result);

  // set the image to template
  reader.onloadend=function() {
    document.getElementById("imgTemplate").src=reader.result;
  }

  document.getElementById("cv-form").style.display="none";
  document.getElementById("cv-template").style.display="block";

}

// Print resume
function printCV() {
  window.print();
}

