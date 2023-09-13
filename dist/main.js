var pc = new PigController();
var hiddenMore = document.getElementById("hidden-more");
var morebtn = document.getElementById("more");
morebtn.addEventListener('click', function () {
    if (hiddenMore.style.display == 'block') {
        hiddenMore.style.display = 'none';
        morebtn.textContent = "More-info";
    }
    else {
        hiddenMore.style.display = 'block';
        morebtn.textContent = "Hide";
    }
});
var addbtn = document.getElementById("add");
var hiddenAdd = document.getElementById("addTb");
addbtn.addEventListener('click', function () {
    if (hiddenAdd.style.display == 'block') {
        hiddenAdd.style.display = 'none';
    }
    else {
        hiddenAdd.style.display = 'block';
    }
});
function makeEnum(enumObject) {
    var all = [];
    for (var key in enumObject) {
        all.push(enumObject[key]);
    }
    return all;
}
var categoryList = makeEnum(pigCategory);
var GreyBreedArray = makeEnum(GreyBreed);
var BlackBreedArray = makeEnum(BlackBreed);
var WhiteBreedArray = makeEnum(WhiteBreed);
var ChestnutBreedArray = makeEnum(ChestnutBreed);
var breedList = {
    "Black": BlackBreedArray,
    "Grey": GreyBreedArray,
    "White": WhiteBreedArray,
    "Chestnut": ChestnutBreedArray
};
var addCategorySel = document.getElementById("new-category");
var addBreedSel = document.getElementById("new-breed");
addCategorySel.onchange = function () {
};
//# sourceMappingURL=main.js.map