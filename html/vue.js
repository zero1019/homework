const {createApp,ref}  = Vue;

var myService = createApp({
    data() {
        return{
           /* Services:[
                {imgSrc: "聖誕節fn.jpg",title:"MERRY CHRISTMAS",text:"This artwork embodies the joy and warmth of the holiday season. Featuring a fox-eared girl dressed in festive red alongside a majestic white dog, it highlights themes of companionship and celebration under a sparkling night sky filled with soft, glowing lights."},
                {imgSrc: "hibiki1017 copy.jpg",title:"HIBIKI",text:"This piece depicts an angelic character surrounded by autumn leaves, symbolizing freedom and harmony with nature. The vibrant sky and playful floating creatures emphasize a whimsical, uplifting mood, representing the beauty and change of the autumn season."},
                {imgSrc: "fubiki生日賀圖.png",title:"FUBUKI",text:"This illustration captures the essence of winter serenity. It portrays a cheerful fox girl relaxing in a snowy forest, blending her playful and vibrant personality with the peaceful winter atmosphere. The sleeping fox and the snowy details add warmth to the otherwise cold setting."},
            ]*/
        }
    }
}).mount("#test")

var mytdart = createApp({
    data() {
        return{
            tdart:[
                {imgSrc: "場景渲染3.png",title:"JAPAN SHRINE",text:"I love Japanese culture and architecture, and I love the shrine that glows at night, so I made this 3D model"},
                {imgSrc: "檯燈材質渲染2.jpg",title:"LAMP",text:"As a basis for exercising 3D modeling skills, a topic with easier difficulty was chosen, hence the creation of this table lamp"},
                {imgSrc: "武器渲染3.jpg",title:"KATANA",text:"I love Japanese culture and architecture, and I love the samurai katana, so I made this 3D model"}
            ]
        }
    }
}).mount("#test3d")

var mytdart = createApp({
    data() {
        return{
            fdart:[
                {imgSrc: "IMG_20201013_211115.jpg",title:"AUTUMN",text:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
                {imgSrc: "IMG_20201013_211231.jpg",title:"RED APPLE",text:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
                {imgSrc: "chuang.png",title:"VIEW FROM THE WINDOW",text:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
            ]
        }
    }
}).mount("#testfine")

var mypdart = createApp({
    data() {
        return{
            pdart:[
                {imgSrc: "DSCF0029.jpg",title:"BUBBLES GIRLS FIRST",text:"When I was involved in a cosplay event, I accidentally saw a girl using a bubble gun to wrap bubbles around me, and I was attracted to this scene, so I recorded this scene"},
                {imgSrc: "DSCF0078.jpg",title:"BUBBLES GIRLS second",text:"When I was involved in a cosplay event, I accidentally saw a girl using a bubble gun to wrap bubbles around me, and I was attracted to this scene, so I recorded this scene"},
                {imgSrc: "DSCF0115.jpg",title:"CUTE GIRLS",text:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
            ]
        }
    }
}).mount("#testphoto")
