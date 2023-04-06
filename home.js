

export class HomeApi
{
  constructor()
  {
    this.variableApi = 'movie/now_playing'
    this.Api()
    this.UrlApi 
    this.Layer = $('.Layer')
    this.Home = $('.Home')

    this.OpenNav = $('.OpenNav')
    this.All_Img_Home = $('.All_Img_Home')
    this.nav = $('.nav')
    this.SmallNav = $('.nav_lest')

    this.lestS = $('.lestS')
    this.nav.animate({left : -this.SmallNav.width() } , 2);
    
  
    this.OpenNav.click(this.NavOpen.bind(this))

    this.Home_img = $('.Home_img img')
 
    this.input_Search_By_word = $('.Search_By_word')
    this.input_Search_By_letter =$('.Search_By_letter')

    this.input_Search_By_word.keyup(this.Search_By_word.bind(this))
    this.input_Search_By_letter.keyup(this.Search_By_letter.bind(this))
  

    this.lestS_linkes = $('.lestS_linkes li')
    this.lestS_linkes.click(this.change_pages.bind(this)) 


    this.lestS=$('.lestS_linkes')


   
  }

   async Api(num)
  {

    let Ma5zn = ``
    let linkApi = await fetch(`https://api.themoviedb.org/3/${this.variableApi}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&page=1`)
    this.UrlApi = await linkApi.json()
    


    for(let i =0 ; i< this.UrlApi.results.length ; i++)
    {

      Ma5zn+=`            <div class="col-xl-4 col-lg-4 col-md-3 col-sm-6 col-xs-12  Dive_Item"  >
      <div class="Home_img_lyar position-relative">
          <div class="Home_img  " >
            <img class="w-100 rounded-2" src="https://image.tmdb.org/t/p/w500/${this.UrlApi.results[i].poster_path}" alt="">

          </div>

          <div id="${i}" class="layer_Home rounded-2  position-absolute  text-center d-flex align-items-center">
              <div class='layer_Home_text '>
                  <h4 class="  text-black ">${this.UrlApi.results[i].original_title}</h4>
                  <p class='ps-4 pe-4 pt-4 pb-2'>${this.UrlApi.results[i].overview}</p>
                  <span class=''>rate: ${this.UrlApi.results[i].vote_average}</span>
                  <h6 class='pt-3'>${this.UrlApi.results[i].release_date}</h6>
              </div>
          </div>

        </div>
     </div>`
    }
    this.All_Img_Home.html(Ma5zn)

 
  }

  change_pages(e)
  {
    console.log(e.target.id)
    if(e.target.id == 'Popular')
    {
      this.variableApi = 'movie/popular'
      this.Api()
      
    }
    else if(e.target.id == 'Top_Rated')
    {
      this.variableApi = 'movie/top_rated'
      this.Api()
    }
    else if(e.target.id == 'Trending')
    {
      this.variableApi = 'trending/all/day'
      this.Api()
    }
    else if(e.target.id == 'Upcoming')
    {
      this.variableApi = 'movie/upcoming'
      this.Api()
    }
    else if(e.target.id == 'Now_playing')
    {
      this.variableApi = 'movie/now_playing'
      this.Api()
    }



  }
  
  NavOpen()
  {
    if(this.nav.css('left') == '0px')
    {
      

      this.nav.animate({left : -this.SmallNav.width() } , 700 );
      this.lestS.animate({top : '100%'} ,1000 )
      this.lestS_linkes.animate({ paddingBottom : '100px'} ,1000)
      $('.Choose_color').animate({right : '100%'} , 1500)

     

    }
    else{
      this.nav.animate({ left : 0 } , 500 )

      this.lestS.animate({top : 0} , 1500)
      this.lestS_linkes.animate({ paddingBottom : '10px'} ,1000)
      $('.Choose_color').animate({right : '8%'} , 1500)

      this.Coler_bg()
      $('.New_Colors').click(this.Coler_bg.bind(this))
    }
    
  }

 
  

 async Search(ValueSearch)
 {

  let crtona = ''
 

  let linkApi = await fetch(`https://api.themoviedb.org/3/${this.variableApi}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&page=1`)
  this.UrlApi = await linkApi.json()
  
  for(let x =0 ; x < this.UrlApi.results.length ; x++)
  {
       if(this.UrlApi.results[x].original_title.toLowerCase().includes(ValueSearch.toLowerCase()) )
       {
        
          crtona+=`            <div class="col-4  Dive_Item"  >
          <div class="Home_img_lyar position-relative">
              <div class="Home_img  " >
                <img class="w-100 rounded-2" src="https://image.tmdb.org/t/p/w500/${this.UrlApi.results[x].poster_path}" alt="">
    
              </div>
    
              <div id="${x}" class="layer_Home rounded-2  position-absolute  text-center d-flex align-items-center">
                  <div class='layer_Home_text '>
                      <h4 class="  text-black ">${this.UrlApi.results[x].original_title}</h4>
                      <p class='ps-4 pe-4 pt-4 pb-2'>${this.UrlApi.results[x].overview}</p>
                      <span class=''>rate: ${this.UrlApi.results[x].vote_average}</span>
                      <h6 class='pt-3'>${this.UrlApi.results[x].release_date}</h6>
                  </div>
              </div>
    
            </div>
         </div>`
        }
  }

       this.All_Img_Home.html(crtona)
 }


 Search_By_letter()
 {
   let x = this.input_Search_By_letter.val()
   this.Search(x)
 }

 Search_By_word()
 {
  let v = this.input_Search_By_word.val()
  this.Search(v)
 }


 Coler_bg(e)
 {

 let Icone_color = $('.Icone_color')

    for(let i=0 ; i<Icone_color.length ;i++)
    {
      let num = Math.floor(Math.random() * 255)
      Icone_color.eq(i).css('backgroundColor' , `rgb(${100},${num-50}, ${num+20})` ) 
      console.log(Icone_color[i])
    }

    
    Icone_color.click(this.change_color)

 }

 change_color(e)
 {
  let c = $(e.target).css('backgroundColor' )

  $('.HomeSection').css('backgroundColor' , c )
  $('.form-control').css('backgroundColor' , c )
  $('.ReGex').css('backgroundColor' , c )
 }


}