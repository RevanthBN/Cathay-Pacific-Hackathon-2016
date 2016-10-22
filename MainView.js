var Observable = require("FuseJS/Observable");

var pages = Observable();
var mainPage = {title: "content"};

var currentPage = Observable(mainPage);



var currentPageTitle = currentPage.map(function(x){
    return x.title;
});

function pageButtonClicked(arg){
    currentPage.value = arg.data;
}

function goBack(arg){
    currentPage.value = mainPage;
}

module.exports = {
    pages: pages,
    currentPage: currentPage,
    currentPageHandle: currentPageHandle,
    currentPageTitle: currentPageTitle,
    pageButtonClicked: pageButtonClicked,
    goBack: goBack
};