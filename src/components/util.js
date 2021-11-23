import { v4 as uuid } from "uuid";

function chillHop() {
    return[
        {
            name:"Poloroid",
            artist:'Makzo',
            cover: 'https://chillhop.com/wp-content/uploads/2021/09/501327d9a200bed56717f5f4a0fa7e4517c491c9-1024x1024.jpg',
            id:uuid(),
            active: true,
            color: ["#BA4A46","#FDF0DD"],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=24767',
        },
        {
            name:"Two Thousand Miles",
            artist:'Aviin',
            cover: 'https://chillhop.com/wp-content/uploads/2021/09/a2d710149876c8e0c9fb097840b2438fbc21bd37-1024x1024.jpg',
            id:uuid(),
            active: false,
            color: ["#b07959","#566775"],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=23314',
        },
        {
            name:"I Main Samus Now",
            artist:'Sleepy Fish',
            cover: 'https://chillhop.com/wp-content/uploads/2021/09/2ce75252f5419a45d76bb93424ac1eae3e688b17-1024x1024.jpg',
            id:uuid(),
            active: false,
            color: ["#1a3f8d","#feb18c"],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=24822',
        },
        {
            name:"Conflicted",
            artist:'Hanz',
            cover: 'https://chillhop.com/wp-content/uploads/2021/08/b0bb2309d0c8fe0a32907ecddab689501b7de5cf-1024x1024.jpg',
            id:uuid(),
            active: false,
            color: ["#2a3749","#473a29"],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=24642',
        },
        {
            name:"Deja",
            artist:'Smile High',
            cover: 'https://chillhop.com/wp-content/uploads/2021/08/af3ce13ad39d38057f00144f8a7c295877ccfec1-1024x1024.jpg',
            id:uuid(),
            active: false,
            color: ["#438a92","#0f1549"],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=23340',
        },
        {
            name:"Where The Sun Goes",
            artist:'Delayde',
            cover: 'https://chillhop.com/wp-content/uploads/2021/09/6a9ef8ac00e168d3308fdf9e336874c03fab829d-1024x1024.jpg',
            id:uuid(),
            active: false,
            color: ["#438a92","#0f1549"],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=23188',
        },
       
        
    ]
}

export default chillHop