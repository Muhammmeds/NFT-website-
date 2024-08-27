



const image = document.querySelector('.personimage')
const name = document.querySelector('.name')
const title = document.querySelector('.title')
const description = document.querySelector('.description')
const slideShowPosition = document.querySelector('.slideshowposition')



          const arr = [{image : 'images/person1.png' , name : 'Leslie Alexander' , title : 'CEO, Digital PT' , description : `I was new to the world of NFTs, but this website made everything so easy to understand! The user interface is super clean, and the process of buying and selling is seamless. I especially love the variety of digital art available—there's something for everyone. Highly recommend for both beginners and experienced collectors!`},
            {image : 'images/person2.jpg' , name : 'Zainab Adekola' , title : 'Lead Accountant' , description : `This platform has become my go-to for discovering new and unique NFT projects. The community is vibrant, and the support team is always quick to respond to any queries. I’ve also had great success with my auctions here. Keep up the great work!`},
            {image : 'images/person3.jpg' , name : 'Sam Shaun' , title : 'Managing Director' , description : `The level of security on this site gives me peace of mind when trading high-value NFTs. The transaction process is smooth, and I love how fast and reliable everything is. I’ve made some incredible finds here that I couldn’t get anywhere else!`},
            {image : 'images/person4.png' , name : 'Jeff Bezos' , title : 'CEO' , description : `Absolutely love this NFT marketplace! The variety of digital assets is impressive, and the platform is incredibly user-friendly. The bidding system is transparent, and I’ve managed to snag some amazing deals. Whether you’re a creator or a collector, this site is a must-visit.`},
            {image : 'images/person5.png' , name : 'Elon Musk' , title : 'Co-Founder' , description : `I’ve been using this NFT platform for a few months now, and it’s been an excellent experience. The minting process is straightforward, and the royalties system ensures artists are fairly compensated. Plus, the community here is fantastic—full of creative and supportive people!`},
          ]
          let index = 0

          const Next = () =>{
            console.log(slideShowPosition.children)
            index++

            if(index == arr.length){
              index = 0
            }
            image.src = arr[index].image
            name.textContent = arr[index].name
            title.textContent = arr[index].title
            description.textContent = arr[index].description
            //convert to array and make all childred same color before selecting the indexed one and giving it a color blue
            Array.from(slideShowPosition.children).forEach(element => {
                element.style.backgroundColor = '#d5d8dc';
            });
            slideShowPosition.children[index].style.backgroundColor = '#459BFF'


          }
          const Prev = () => {
          index--;
            if (index < 0) {
           index = arr.length - 1;
          }
          image.src = arr[index].image
          name.textContent = arr[index].name
          title.textContent = arr[index].title
          description.textContent = arr[index].description
          Array.from(slideShowPosition.children).forEach(element => {
            element.style.backgroundColor = '#d5d8dc';
        });
        slideShowPosition.children[index].style.backgroundColor = '#459BFF'
}