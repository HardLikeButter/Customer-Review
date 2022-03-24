// local revies data
const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "Web Developer",
        img: 
            "https://i.postimg.cc/XqppKGzV/cookie.jpg",
        text: 
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ullam cupiditate nulla esse necessitatibus laboriosam sit ab temporibus hic rerum?",
    },
    {
        id: 2,
        name: "Anna Johnson",
        job: "Web Designer",
        img: 
            "https://i.postimg.cc/k5rvh9QN/pizza-slice.jpg",
        text:
             "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, natus? Doloribus modi, ratione odio hic dolor eligendi itaque harum necessitatibus?",
    },
    {
        id: 3,
        name: "Peter Jones",
        job: "Intern",
        img:
            "https://i.postimg.cc/zvWxfBFf/fried-Chicken.jpg",
        text:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate dolores voluptatem nobis repellendus inventore non deserunt explicabo maiores iure alias",    
    },
    {
        id: 4,
        name: "Bill Anderson",
        job: "The Boss",
        img: 
            "https://i.postimg.cc/pVhWZHdX/ice-cream.jpg",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ipsa vero porro distinctio magni non, explicabo itaque dicta excepturi. lorem lorem lorem lore,",
    }
];

// select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn= document.querySelector(".next-btn");
const randomBtn= document.querySelector(".random-btn");

/*
// set starting item
let currentItem = 0;

// load initail item
window.addEventListener("DOMContentLoaded", function() {
    showPerson(currentItem);
});

// show person based on item

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person

nextBtn.addEventListener("click", function() {
    currentItem++;
    if (currentItem > reviews.length -1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

// show prev person

prevBtn.addEventListener("click", function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length -1;
    }
    showPerson();    
});

// show random person

randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showPerson();

})
*/



let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
})




function showPerson() {
    const item = reviews[currentItem];

    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}


prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length -1;
    }
    showPerson(currentItem);
});


nextBtn.addEventListener("click", () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
})


randomBtn.addEventListener("click", () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson();
})