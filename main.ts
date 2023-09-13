var wpc = new WPigController();
var bpc = new BPigController();
var cpc = new CPigController();
var gpc = new GPigController();

function wstore(){
    localStorage.wpigArray= JSON.stringify(wpc);
}
function gstore(){
    localStorage.gpigArray= JSON.stringify(gpc);
}
function bstore(){
    localStorage.bpigArray= JSON.stringify(bpc);
}
function cstore(){
    localStorage.cpigArray= JSON.stringify(cpc);
}

var submitBtn = document.getElementById("submit");

submitBtn!.addEventListener('click', function() {
    var newName = (<HTMLInputElement>document.getElementById("new-name"))!.value;
    var newHeight = (<HTMLInputElement>document.getElementById("new-height"))!.value;
    var newWeight = (<HTMLInputElement>document.getElementById("new-weight"))!.value;
    var newCategory = (<HTMLInputElement>document.getElementById("new-category"))!.value;
    var newBreed = (<HTMLInputElement>document.getElementById("new-breed"))!.value;
    var newPersonality = (<HTMLInputElement>document.getElementById("new-personality"))!.value;
    var newSkillValue = (<HTMLInputElement>document.getElementById("skillValue"))!.value;
    
    if(newName=="" || Number(newHeight)<=0 || Number(newWeight)<=0 || newCategory=="" || newBreed=="" || newPersonality=="" || Number(newSkillValue)<=0) {
        alert("Please check your input: Empty input");
        location.reload();
    } else {
        if(newCategory == "Black"){
            if(Number(newSkillValue)<1 || Number(newSkillValue)>10) {
                alert("Please check your input: Out of bound");
                location.reload();
            } else {
                var newbPig = new Black(newName, newBreed, newCategory, Number(newHeight), Number(newWeight), newPersonality, Number(newSkillValue));
                bpc.add(newbPig);
                bstore();
            }
            
        } else if(newCategory == "White") {
            if(Number(newSkillValue)<0 || Number(newSkillValue)>100) {
                alert("Please check your input: Out of bound");
                location.reload();
            } else {
                var newwPig = new White(newName, newBreed, newCategory, Number(newHeight), Number(newWeight), newPersonality, Number(newSkillValue));
                wpc.add(newwPig);
                wstore();
            }
            
        } else if(newCategory == "Chestnut"){
            var newcPig = new Chestnut(newName, newBreed, newCategory, Number(newHeight), Number(newWeight), newPersonality, newSkillValue)
            cpc.add(newcPig);
            cstore();
    
        } else if(newCategory == "Grey"){
            if(Number(newSkillValue)<0 || Number(newSkillValue)>100) {
                alert("Please check your input: Out of bound");
                location.reload();
            } else {
                var newgPig = new Grey(newName, newBreed, newCategory, Number(newHeight), Number(newWeight), newPersonality, Number(newSkillValue))
                gpc.add(newgPig);
                gstore();
            }
        }
    }

    location.reload();
})

window.onload = function() {
    if (localStorage.getItem("wpigArray") === null){
        wstore();
        location.reload();
    }
    if (localStorage.getItem("bpigArray")===null){
        bstore();
        location.reload();
    }
    if (localStorage.getItem("cpigArray")===null){
        cstore();
        location.reload();
    }
    if (localStorage.getItem("gpigArray")===null){
        gstore();
        location.reload();
    }
    var w = JSON.parse(localStorage.wpigArray);
    var b = JSON.parse(localStorage.bpigArray);
    var g = JSON.parse(localStorage.gpigArray);
    var c = JSON.parse(localStorage.cpigArray);

    var wsorted= w.wpigs.sort((a:any, b:any) => a.name.localeCompare(b.name));
    var bsorted= b.bpigs.sort((a:any, b:any) => a.name.localeCompare(b.name));
    var gsorted= g.gpigs.sort((a:any, b:any) => a.name.localeCompare(b.name));
    var csorted= c.cpigs.sort((a:any, b:any) => a.name.localeCompare(b.name));

    for(var i = 0;i<w.wpigs.length;i++){
        addNew(w.wpigs[i].name, w.wpigs[i].category, w.wpigs[i].breed, w.wpigs[i].height, w.wpigs[i].weight, w.wpigs[i].personality, String("Running"), w.wpigs[i].running);
        if(w.wpigs.length>0){
            wpc.add(w.wpigs[i]);
        }
    }

    for(var i = 0;i<b.bpigs.length;i++){
        addNew(b.bpigs[i].name, b.bpigs[i].category, b.bpigs[i].breed, b.bpigs[i].height, b.bpigs[i].weight, b.bpigs[i].personality, String("Strength"), b.bpigs[i].strength);
        if(b.bpigs.length>0){
            bpc.add(b.bpigs[i]);
        }
    }

    for(var i = 0;i<g.gpigs.length;i++){
        addNew(g.gpigs[i].name, g.gpigs[i].category, g.gpigs[i].breed, g.gpigs[i].height, g.gpigs[i].weight, g.gpigs[i].personality, String("Swimming"), g.gpigs[i].swimming );
        if(g.gpigs.length>0){
            gpc.add(g.gpigs[i]);
        }
    }

    for(var i = 0;i<c.cpigs.length;i++){
        addNew(c.cpigs[i].name, c.cpigs[i].category, c.cpigs[i].breed, c.cpigs[i].height, c.cpigs[i].weight, c.cpigs[i].personality, String("Language"), c.cpigs[i].language);
        if(c.cpigs.length>0){
            cpc.add(c.cpigs[i]);
        }
    }

}

var mainTable = <HTMLTableElement>document.getElementById("pigInfo");

function addNew(n:string, c:string, b:string, h:number, w:number, p:string, sn:string, sv:any) {
    var mainTable = <HTMLTableElement>document.getElementById("pigInfo");
    var newRow = mainTable.insertRow(-1);
    newRow.className = "new-row";

    var x = mainTable.getElementsByTagName("tr").length-1;
    var newName = newRow.insertCell(0);
    newName.className = "new-name";
    newName.innerText = n;

    var newCategory = newRow.insertCell(1);
    newCategory.className = "new-category";
    newCategory.innerText = c;

    var newMoreInfo = newRow.insertCell(2);
    newMoreInfo.className = "new-more-info";
    var newMoreInfoBtn = document.createElement("button");
    newMoreInfoBtn.className = "more";
    newMoreInfoBtn.innerText = "More Info";
    newMoreInfoBtn.onclick = function() {showMoreInfo(n, c, b, h, w, p, sn, sv)}
    newMoreInfo.append(newMoreInfoBtn);

    var newDelete = newRow.insertCell(3);
    var deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.type = "button";
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = function() {
        if(confirm("Are you sure you want to delete?")) {
            if (c == "Black") {
                var bArray = []
                var blacks = bpc.bpigs;
                for (var i = 0; i<blacks.length; i++) {
                    bArray.push(blacks[i].name);
                }
                bpc.bpigs.splice(bArray.indexOf(n), 1);
                bstore();

            } else if (c == "Grey") {
                var gArray = []
                var greys = gpc.gpigs;
                for (var i = 0; i<greys.length; i++) {
                    gArray.push(greys[i].name);
                }
                gpc.gpigs.splice(gArray.indexOf(n), 1);
                gstore();

            } else if (c == "Chestnut") {
                var cArray = []
                var chestnuts = cpc.cpigs;
                for (var i = 0; i<chestnuts.length; i++) {
                    cArray.push(chestnuts[i].name);
                }
                cpc.cpigs.splice(cArray.indexOf(n), 1);
                cstore();

            } else if (c == "White") {
                var wArray = []
                var whites = wpc.wpigs;
                for (var i = 0; i<whites.length; i++) {
                    wArray.push(whites[i].name);
                }
                wpc.wpigs.splice(wArray.indexOf(n), 1);
                wstore();
                
            }
        };
        location.reload();
    }
    newDelete.append(deleteBtn);
}


function showMoreInfo(n:string, c:string, b:string, h:number, w:number, p:string, sn: string, sv:any) {
    var tableSec = document.getElementById("hidden-more");
    var moreInfoTb = <HTMLTableElement>(document.createElement("table"));
    tableSec!.appendChild(moreInfoTb);
    var head = moreInfoTb.insertRow(moreInfoTb.rows.length);
    head.insertCell(0).innerText = "Name";
    head.insertCell(1).innerText = "Category";
    head.insertCell(2).innerText = "Breed";
    head.insertCell(3).innerText = "Height";
    head.insertCell(4).innerText = "Weight";
    head.insertCell(5).innerText = "Skill Name";
    head.insertCell(6).innerText = "Skill Value";
    head.insertCell(7).innerText = "Personality";
    var exithead = head.insertCell(8);

    var newRow = moreInfoTb.insertRow(moreInfoTb.rows.length);
    var moreName = newRow.insertCell(0);
    var moreCategory = newRow.insertCell(1);
    var moreBreed = newRow.insertCell(2);
    var moreHeight = newRow.insertCell(3);
    var moreWeight = newRow.insertCell(4);
    var moreSkillName = newRow.insertCell(5);
    var moreSkillValue = newRow.insertCell(6);
    var morePersonality = newRow.insertCell(7);
    var exit = newRow.insertCell(8);

    moreName.innerText = n;
    moreCategory.innerText = c;
    moreBreed.innerText = b;
    moreHeight.innerText = h.toString();
    moreWeight.innerText = w.toString();
    moreSkillName.innerText = sn;
    moreSkillValue.innerText = sv;
    morePersonality.innerText = p;
    var exitBtn = document.createElement("button");
    exitBtn.innerText = "Hide";
    exitBtn.onclick = function() {
        moreInfoTb.remove();
    };
    exit.append(exitBtn);
    
}

var addbtn = document.getElementById("add");
var hiddenAdd = document.getElementById("addTb");
addbtn!.addEventListener('click', function() {
    if (hiddenAdd!.style.display == 'block') {
        hiddenAdd!.style.display = 'none';
    } else {
        hiddenAdd!.style.display = 'block';
    }
})

function makeEnum(enumObject: any){
    var all = [];
    for(var key in enumObject){
       all.push(enumObject[key]);
    }
    return all;
}

var GreyBreedArray = makeEnum(GreyBreed);
var BlackBreedArray = makeEnum(BlackBreed);
var WhiteBreedArray = makeEnum(WhiteBreed);
var ChestnutBreedArray = makeEnum(ChestnutBreed);

var addCategorySel = <HTMLSelectElement>document.getElementById("new-category");
var addBreedSel = <HTMLSelectElement>document.getElementById("new-breed");

addCategorySel!.onchange = function() {
    var skillName = document.getElementById("specific-skill");
    var skillVal = <HTMLInputElement>document.getElementById("skillValue");
    skillVal.style.width = "95%";

    if (addBreedSel.options.length > 0) {
        for (var i = addBreedSel.options.length; i>0; i--) {
            addBreedSel.remove(i);
        }
    }
    if(addCategorySel!.options[addCategorySel!.selectedIndex].text == "Black") {
        for (var i = 0; i<BlackBreedArray.length; i++) {
            addBreedSel!.options[addBreedSel!.options.length] = new Option(BlackBreedArray[i], BlackBreedArray[i]);
        }
        skillName!.innerText = "Strength";
        skillVal.placeholder = "Enter 1 ~ 10";
        skillVal.type = "number";
        skillVal.min = "0";
        skillVal.max = "100";
    } else if (addCategorySel!.options[addCategorySel!.selectedIndex].text == "White") {
        for (var i = 0; i<WhiteBreedArray.length; i++) {
            addBreedSel!.options[addBreedSel!.options.length] = new Option(WhiteBreedArray[i], WhiteBreedArray[i]);
        }
        skillName!.innerText = "Running";
        skillVal.placeholder = "Enter 0 ~ 100";
        skillVal.type = "number";
        skillVal.min = "0";
        skillVal.max = "100";
    } else if (addCategorySel!.options[addCategorySel!.selectedIndex].text == "Grey") {
        for (var i = 0; i<GreyBreedArray.length; i++) {
            addBreedSel!.options[addBreedSel!.options.length] = new Option(GreyBreedArray[i], GreyBreedArray[i]);
        }
        skillName!.innerText = "Swimming";
        skillVal.placeholder = "Enter 0 ~ 100";
        skillVal.type = "number";
        skillVal.min = "0";
        skillVal.max = "100";
    } else if (addCategorySel!.options[addCategorySel!.selectedIndex].text == "Chestnut") {
        for (var i = 0; i<ChestnutBreedArray.length; i++) {
            addBreedSel!.options[addBreedSel!.options.length] = new Option(ChestnutBreedArray[i], ChestnutBreedArray[i]);
        }
        skillName!.innerText = "Language";
        skillVal.type = "text";
        skillVal.placeholder = "Please enter a language";
    }


};




