
function getTimeString(time){
    let hour = parseInt(time / 3600);
    let remainingSec = time % 3600;
    let min = parseInt(remainingSec / 60);
    remainingSec = remainingSec % 60;
    return `${hour} hours ${min} minutes and ${remainingSec} seconds ago`;
}

// 1 - Fetch, load and show categories on html
// create loadCategories
const loadCategories = () => {
    // fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(err => console.log(err))
};

// {
//     "category_id": "1001",
//     "category": "Music"
// }
// create DisplayCategories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories');
    categories.forEach((item) => {
        console.log(item);
        // create button for each item or element
        const button = document.createElement('button');
        button.classList = "btn";
        button.innerText = item.category;  // textContent
        // add button to category container
        categoryContainer.append(button);
    });
};

// create loadVideos
const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
        .catch(err => console.log(err))
};

const cardDemo = {
    "category_id": "1003",
    "video_id": "aaak",
    "thumbnail": "https://i.ibb.co/ZNggzdm/cake.jpg",
    "title": "Beyond The Pale",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/MZ2vbXR/jimm.jpg",
            "profile_name": "Jim Gaffigan",
            "verified": false
        }
    ],
    "others": {
        "views": "2.6K",
        "posted_date": "15400"
    },
    "description": "'Beyond The Pale' by Jim Gaffigan, with 2.6K views, is a comedic gem that explores everyday observations and family life with a light-hearted and witty approach. Jim's humor is accessible and delightful, making this show perfect for anyone who enjoys clean, observational comedy."

};
// create displayVideos
const displayVideos = (videos) => {
    const videosContainer = document.getElementById('videos');
    videos.forEach((video) => {
        console.log(video);
        // create div for each video, item or element
        const card = document.createElement('div');
        card.classList = "card card-compact";
        card.innerHTML = `
        <figure class = 'h-[200px] relative'>
            <img src = '${video.thumbnail}' class = 'h-full w-full object-cover'>
            ${
                video.others.posted_date?.length === 0 ? `` : `<span class='absolute right-2 bottom-2 text-xs text-white bg-black rounded p-1'>${getTimeString(video.others.posted_date)}</span>` 
            }
        </figure>
        <div class = 'py-1 inline-flex items-center gap-2'>
            <img src = '${video.authors[0].profile_picture}' class = 'h-10 w-10 rounded-full'>
            <div class='flex items-center gap-2'>
                <h3 class="font-bold text-sm">${video.authors[0].profile_name}</h3>
                ${
                    video.authors[0].verified === true ? `<img src = 'https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png' class = 'w-5'/>` : ``
                }
            </div>
        </div>
        <div class="px-0 py-1 flex gap-2">
            <div class="flex justify-center items-center">
                <h2 class="font-bold">${video.title}</h2>
                <p></p>
            </div>
        </div>
        
        `;

        videosContainer.append(card);
    });
};

loadCategories();
loadVideos();






