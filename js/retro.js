const loadNews = async (catid) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${catid}`)
    const data = await response.json()
    const newsContainer = document.getElementById('news-container')
    newsContainer.innerHTML = ""
    data.posts.forEach((item) => {
        const div = document.createElement('div')
        div.innerHTML = `
    <div class="card lg:card-side bg-[#7A7DFC1A] mb-10 shadow-xl border border-[#7A7DFC] w-[700px] h-[300px] mt-10 ml-20  ">
                    <figure><img src="${item.image}" alt="Album"/></figure>
                    <div class="card-body ">
                        <div class="flex">
                            <p>${item.category}</p>
                            <p>Author :<span>${item.author.name}</span></p>
                        </div>
                      <p class="card-title">${item.title}</p>
                      <p>${item.description}</p>
                        <hr>
                        <div class="flex">
                            <div class="flex mx-10">
                                <i class="fa-regular fa-message mr-2"></i>
                                <p>${item.comment_count}</p>
                            </div>
                            <div class="flex mx-10">
                                <i class="fa-regular fa-eye mr-2"></i>
                                <p>${item.view_count}</p>
                            </div>
                            <div class="flex mx-10">
                                <i class="fa-regular fa-clock mr-2"></i>
                                <p>${item.posted_time}min</p>
                            </div>
                        </div>
                      <div class="card-actions justify-end">
                        <button class="btn  rounded-full bg-[#10B981] text-white"><i class="fa-solid fa-envelope"></i></button>
                      </div>
                    </div>
                  </div>
    
    `
    newsContainer.appendChild(div)
    })

}
const handleSearch = () => {
    const value = document.getElementById('search-field').value;
    if(value){
loadNews(value)
    }
    else{
        alert("Please enter valid Id")
    }
}
loadNews("")