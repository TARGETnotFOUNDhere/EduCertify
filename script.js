const certificates={

"ITM12345":{
name:"Lakshya Purohit",
course:"Web Development",
year:"2025"
},

"ITM67890":{
name:"Rahul Sharma",
course:"Data Science",
year:"2024"
},

"ITM54321":{
name:"Aarav Mehta",
course:"Cyber Security",
year:"2023"
}

};



function verifyCertificate(){

const id=document.getElementById("certID").value;

const result=document.getElementById("result");

const qr=document.getElementById("qrcode");

const qrBox=document.getElementById("qrBox");

qr.innerHTML="";

if(certificates[id]){

const student=certificates[id];

result.innerHTML=`

<div class="certificate-card">

<h3>Digital Certificate</h3>

<div class="verified-badge">✔</div>

<p class="verified-text">Verified Certificate</p>

<p><strong>Name:</strong> ${student.name}</p>
<p><strong>Course:</strong> ${student.course}</p>
<p><strong>Year:</strong> ${student.year}</p>
<p><strong>ID:</strong> ${id}</p>

</div>
`;

qrBox.style.display="block";

new QRCode(qr,{
text:"Certificate ID: "+id,
width:140,
height:140
});

}else{

result.innerHTML=`<p style="color:red;">Invalid Certificate ID</p>`;

qrBox.style.display="none";

}

}



function addCertificate(){

const name=document.getElementById("name").value;
const course=document.getElementById("course").value;
const year=document.getElementById("year").value;
const id=document.getElementById("newID").value;

if(name && course && year && id){

certificates[id]={name,course,year};

displayCertificates();

alert("Certificate Added");

}

}



function displayCertificates(){

const list=document.getElementById("certList");

list.innerHTML="";

for(let id in certificates){

list.innerHTML+=`<li><strong>${id}</strong> — ${certificates[id].name}</li>`;

}

}

displayCertificates();



function openPopup(){
document.getElementById("processPopup").style.display="flex";
}

function closePopup(){
document.getElementById("processPopup").style.display="none";
}