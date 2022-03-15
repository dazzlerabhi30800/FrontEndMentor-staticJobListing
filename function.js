fetch('./data.json')
    .then(response => response.json())
    .then(data => mainFunction(data));



function mainFunction(data) {
   const company = data;

   console.log(data[0].languages.length);

   const filterWrapper = document.querySelector('#filterWrapper');

   const newBtn = document.querySelector('.new');
   const featureBtn = document.querySelector('.feature');



   for(var i=0;i<data.length;i++) {
      const jobFilters = [...data[i].languages];
      const toolFilters = [...data[i].tools];
       filterWrapper.insertAdjacentHTML('beforeend',
       `
       <div class="filter__card" id="filter${data[i].id}">
       <div class="section__one">
         <div class="profile__img">
           <img src="${data[i].logo}" alt="">
         </div>
         <div class="description__wrapper">
           <div class="tag__wrapper">
             <h1 class="site__name">Manage</h1>
             <button class="new ${data[i].new}">NEW!</button>
             <button class="featured ${data[i].featured}">FEATURED</button>
           </div>
           <p class="job__title">${data[i].position}</p>
           <div class="duration__wrapper">
             <p class="duration">${data[i].postedAt}</p>
             <div class="circle"></div>
             <span class="job__time">${data[i].contract}</span>
             <div class="circle"></div>
             <span class="job__type">${data[i].location}</span>
           </div>
         </div>
       </div>

       <div class="border__bottom"></div>

       <div class="section__two">
         <div class="skill__wrapper" id="skill${data[i].id}">
            <div class="language__wrapper">
           ${jobFilters.map(filter => {
             return `
             <a class="lBtn">${filter}</a>
             `
           }).join("")}
           
         </div>

            <div class="tools__wrapper">
            ${toolFilters.map(filter => {
              return `
              <a class="tBtn">${filter}</a>
              `
            }).join("")}
               
            </div>
         </div>
       </div>
     </div>

       `
       )
   }






}