const loadNews = async (catid) => {
  const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${catid}`)
  const data = await response.json()
  const newsContainer = document.getElementById('news-container')
  newsContainer.innerHTML = ""
  data.posts.forEach((item) => {
    
    const div = document.createElement('div')
    div.innerHTML = `
        <div class="card lg:card-side bg-[#7A7DFC1A] mb-10 shadow-xl border border-[#7A7DFC] w-96 lg:w-[700px] h-[300px] mt-10 ml-20  ">
        <div class="avatar">
     <div class="w-16 h-16 rounded-xl  ml-10 mt-10 ">
      <img  src="${item.image}"> />
      
    </div>
     </div>
                    <div class="card-body space-y-2">
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
                        <button class=" add-btn btn rounded-full bg-[#10B981] text-white"><i class="fa-solid fa-envelope"></i></button>
                      </div>
                    </div>
                  </div>
    
    `
    newsContainer.appendChild(div)
  })
  

}
const handleSearch = () => {
  loadingSpinner(true)
  setTimeout(() => {
    loadingSpinner(false)
  }, 2000);
  const value = document.getElementById('search-field').value;
  if (value) {
    loadNews(value)
  }
  else {
    alert("Please enter valid Id")
  }
}
const loadLatest = async () => {
  const response = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts")
  const data = await response.json()
  const loadLatest = document.getElementById('latest-post')

  data.forEach((item) => {
    const div = document.createElement('div')
    div.innerHTML = `
        <div class="card w-96 h-[482px] bg-base-100 border border-[#12132D26] pl-10 gap-y-5">
                    <figure class="px-8 pt-10">
                      <img src="${item.cover_image}" alt="" class="rounded-xl" />
                    </figure>
                    <div class=" flex text-base font-normal gap-x-5">
                        <p class="text-base font-normal "><i class="fa-regular fa-calendar"></i></p>
                     <p class="text-base font-normal ">${item?.author?.posted_date || 'No Publish date'}</p>
                     </div>
                      <div class="card-actions">
                        <h4 class="text-lg font-extrabold">${item.title}</h4>
                            <p class="text-base font-normal">${item.description} </p>
                      </div>
                      <div class="flex gap-x-10">
                        <div class="avatar">
                            <div class="w-10 rounded-full">
                              <img src="${item.profile_image}" />
                              
                            </div>
                        
                          </div>
                          <div class="grid">
                            <h5 class="text-base font-bold">${item.author.name}</h5>
                        <p class="text-base font-normal">${item?.author?.designation || 'Unknown'}</p>
                        </div>
                          
                      </div>
                    
                  </div>
        
        `
    loadLatest.appendChild(div)
  })
}
// button
const allBtn = document.getElementsByClassName('add-btn')
console.log(allBtn)


// spinner
const loadingSpinner = (isLoading) =>{
  const loadingSpinner = document.getElementById('loading-spin')
 
    if(isLoading){
      loadingSpinner.classList.remove('hidden')
    }
    else{
      loadingSpinner.classList.add('hidden')
    }
    
}



loadNews("")
loadLatest()