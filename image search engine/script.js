// https://unsplash.com/ -> website from where we can get multiple images 
// vHUzceJIK7zh3VWDra_3rI_3SGR9AgSNi9tatiBAxN4 -> access key
// Bzf2_cM9vzh0fO4_qs_jEXk24SvKgVOx1UkVOtbtNYM -> secret key 
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = ""; // its value will be what we have searched in the search bar 
let page = 1;
const access_key = 'vHUzceJIK7zh3VWDra_3rI_3SGR9AgSNi9tatiBAxN4';

async function searchImage() {
    keyword=searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword} &client_id=${access_key}&per_page=12`;

    const response = await fetch(url); // form the url fetch the dete 
    const data = await response.json(); // convert it to json formet 

    if(page === 1){
        searchResult.innerHTML = ""; // so it will clear the page if you alrady have somethig called 
    }

    //console.log(data);
    const results = data.results;
    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display = 'block';

}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchImage();
})

showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImage();
})