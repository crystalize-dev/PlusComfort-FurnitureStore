import Img1 from "../img/products/1.jpg";
import Img2 from "../img/products/2.jpg";
import Img3 from "../img/products/3.png";
import Img4 from "../img/products/4.jpg";
import Img5 from "../img/products/5.jpg";
import Img6 from "../img/products/6.jpg";
import Img7 from "../img/products/7.jpg";
import Img8 from "../img/products/8.jpg";
import Img9 from "../img/products/9.png";
import Img10 from "../img/products/10.jpg";
import Img11 from "../img/products/11.jpg";
import Img12 from "../img/products/12.png";
import Img13 from "../img/products/13.jpg";
import Img14 from "../img/products/14.png";
import Img15 from "../img/products/15.jpg";
import Img16 from "../img/products/16.jpg";
import Img17 from "../img/products/17.png";
import Img18 from "../img/products/18.png";
import Img19 from "../img/products/19.jpg";
import Img20 from "../img/products/20r.jpg";
import OtherImgs1 from "../img/products/otherProducts/other1.jpg";
import OtherImgs2 from "../img/products/otherProducts/other2.jpg";
import Toster1 from "../img/products/otherProducts/toster1.jpg";
import Toster2 from "../img/products/otherProducts/toster2.jpg";
import LampBlue1 from "../img/products/otherProducts/lampblue1.webp";
import LampBlue2 from "../img/products/otherProducts/lampblue2.webp";
import PulpUnit1 from "../img/products/otherProducts/pulpunit1.jpg";
import PulpUnit2 from "../img/products/otherProducts/pulpunit2.jpg";
import ModernGold1 from "../img/products/otherProducts/moderngold1.webp";
import ModernGold2 from "../img/products/otherProducts/moderngold2.webp";
import CleaningOil1 from "../img/products/otherProducts/cleaningoil1.jpg";
import CleaningOil2 from "../img/products/otherProducts/cleaningoil2.jpg";
import BlackAndWhite1 from "../img/products/otherProducts/blackandwhite1.webp";
import BlackAndWhite2 from "../img/products/otherProducts/blackandwhite2.webp";
import BodyOil1 from "../img/products/otherProducts/bodyoil1.jpg";
import BodyOil2 from "../img/products/otherProducts/bodyoil2.jpg";
import Shelf1 from "../img/products/otherProducts/shelf1.webp";
import Shelf2 from "../img/products/otherProducts/shelf2.webp";
import Vase1 from "../img/products/otherProducts/vase1.webp";
import Vase2 from "../img/products/otherProducts/vase2.webp";
import ChairBoom1 from "../img/products/otherProducts/chairboom1.webp";
import ChairBoom2 from "../img/products/otherProducts/chairboom2.webp";
import BlackLamp1 from "../img/products/otherProducts/blacklamp1.webp";
import BlackLamp2 from "../img/products/otherProducts/blacklamp2.jpg";
import GoldenLamp1 from "../img/products/otherProducts/goldenlamp1.webp";
import GoldenLamp2 from "../img/products/otherProducts/goldenlamp2.webp";
import Cotton1 from "../img/products/otherProducts/cotton1.jpg";
import Cotton2 from "../img/products/otherProducts/cotton2.jpg";
import WoodChair1 from "../img/products/otherProducts/woodchair1.webp";
import WoodChair2 from "../img/products/otherProducts/woodchair2.webp";
import Copenhagen1 from "../img/products/otherProducts/copenhagen1.webp";
import Copenhagen2 from "../img/products/otherProducts/copenhagen2.webp";
import Cam1 from "../img/products/otherProducts/cam1.webp";
import Cam2 from "../img/products/otherProducts/cam2.jpg";
import TableLamp1 from "../img/products/otherProducts/tablelamp1.webp";
import TableLamp2 from "../img/products/otherProducts/tablelamp2.webp";
import MatLamp1 from "../img/products/otherProducts/mat1.webp";
import MatLamp2 from "../img/products/otherProducts/mat2.webp";
import Comfy1 from "../img/products/otherProducts/comfy1.webp";
import Comfy2 from "../img/products/otherProducts/comfy2.webp";


export const store = [
    {
        id: 1,
        category: "furniture chair",
        img: Img1,
        description: "Little Armchair Sheepskin",
        descriptionRu: "Маленькое Кресло Овчина",
        price: 986,
        otherImgs: [OtherImgs1, OtherImgs2],
        specs:
            "Tradition Little Petra VB1 Armchair Sheepskin Moonlight/ Walnut/ Brass Limited Edition | We give you a special discount when you put this product in the basket",
        specsRu: "Традиционное кресло Little Petra VB1 из овчины Лунный свет/орех/латунь, ограниченная серия | Мы даем вам специальную скидку, когда вы кладете этот товар в корзину",
        texture: "Sheep Skin",
        weight: "15kg",
        size: "150cm x 70cm",
    },
    {
        id: 2,
        category: "kitchen electronics",
        img: Img2,
        description: "Pop-Up Toaster",
        descriptionRu: "Pop-Up Тостер",
        price: 45,
        otherImgs: [Toster1, Toster2],
        specs:
            "The rounded square design of the toaster allows it to fit neatly against a wall, or inside a corner. Excellent at defrosting, and with the perfect breadtoheater distance to give crunchy toast with a soft, spongey middle",
        specsRu: "Закругленный квадратный дизайн тостера позволяет аккуратно разместить его у стены или в углу. Превосходно поджаривает и имеет идеальное расстояние между хлебом и нагревателем, что позволяет получить хрустящие тосты с мягкой губчатой серединкой",
        texture: "Plastic",
        weight: "3.5kg",
        size: "20xm x 10cm",
    },
    {
        id: 3,
        category: "electronics lamp kitchen",
        img: Img3,
        description: "Lamp Light Blue",
        descriptionRu: "Лампа светло-голубая",
        price: 79,
        otherImgs: [LampBlue1, LampBlue2],
        specs:
            "The Verner Panton Flowerpot , designed in 1968, was originally intended for the restaurant industry and Verner Panton exhibitions",
        specsRu: "Цветочный горшок Вернера Пантона, спроектированный в 1968 году, изначально предназначался для ресторанной индустрии и выставок Вернера Пантона",
        texture: "Plastic",
        weight: "2kg",
        size: "15cm x 15cm",
    },
    {
        id: 4,
        category: "furniture",
        img: Img4,
        description: "Pulp Unit - 5 Compartments",
        descriptionRu: "Шкаф ДВП",
        price: 254,
        otherImgs: [PulpUnit1, PulpUnit2],
        specs:
            "Pulp Units are lightweight and durable, and can be used horizontally or vertically. Designed with A4 paper in mind, MUJI angle files and ring binders fit neatly inside",
        specsRu: "Шкафы ДВП легкие и прочные, их можно использовать как горизонтально, так и вертикально. Папки для файлов, разработанные специально для бумаги формата А4, аккуратно помещаются внутри",
        texture: "Wood",
        weight: "45kg",
        size: "250cm x 60cm",
    },
    {
        id: 5,
        category: "electronics lamp",
        img: Img5,
        description: "Golden Modern Light",
        descriptionRu: "Золотая современная лампа",
        price: 189,
        otherImgs: [ModernGold1, ModernGold2],
        specs:
            "Том Диксон и компания FRONT создали невероятно красивый кулон совершенно уникального дизайна. Лампа изготовлена ​​по специальной технологии металлизации, что делает внешний вид совершенно уникальным. Первый в своем роде. лампа в включенном состоянии прозрачна и можно увидеть захватывающую игру цветов",
        specsRu: "",
        texture: "Plastic",
        weight: "3kg",
        size: "20cm x 20cm",
    },
    {
        id: 6,
        category: "skincare",
        img: Img6,
        description: "Body Oil 200ml",
        descriptionRu: "Масло для тела 200мл",
        price: 67,
        otherImgs: [CleaningOil1, CleaningOil2],
        specs:
            "Made from 100% plant-based oils with olive oil as the main ingredient, this cleansing oil is gentle on the skin. Free from fragrance, colours and, mineral oils, paraben free, alcohol free, allergy tested (we cannot guarantee that it will not cause allergies in any users) * How to use: Take a small amount in the palm of your hand, and massage into the face to remove make-up and dirt. Rinse well with cold or warm water",
        specsRu: "Это очищающее масло, изготовленное из 100% растительных масел с оливковым маслом в качестве основного ингредиента, нежно воздействует на кожу. Не содержит отдушек, красителей и минеральных масел, не содержит парабенов, не содержит спирта, протестировано на аллергию (мы не можем гарантировать, что оно не вызовет аллергию ни у кого из пользователей). Способ применения: возьмите небольшое количество на ладонь и массируйте. на лицо для удаления макияжа и грязи. Хорошо промыть холодной или теплой водой",
        texture: "Liquid",
        weight: "200ml",
        size: "10cm x 5cm",
    },
    {
        id: 7,
        category: "electronics lamp kitchen",
        img: Img7,
        description: "Black and White Lamp",
        descriptionRu: "Чёрно-белая лампа",
        price: 220,
        otherImgs: [BlackAndWhite1, BlackAndWhite2],
        specs:
            "Concept: Dot is inspired by perforated metal and the patterns that light creates when it shines through the small holes. The contrast between the coarse perforated metal and the smooth opal glass makes the Dot a simple and meaningful pendant. With its elegant expression, Shine, whether the light is on or off",
        specsRu: "Концепция: Dot вдохновлен перфорированным металлом и узорами, которые создает свет, проникая через маленькие отверстия. Контраст между грубым перфорированным металлом и гладким опаловым стеклом делает подвеску Dot простой и значимой. Благодаря своему элегантному выражению, он сияет независимо от того, включен свет или выключен",
        texture: "Plastic",
        weight: "6kg",
        size: "20cm x 20cm",
    },
    {
        id: 8,
        category: "furniture",
        img: Img8,
        description: "Gejst Shelf A Black Ash/Black",
        descriptionRu: "Gejst Shelf A Черный Ясень/Черный",
        price: 115,
        otherImgs: [Shelf1, Shelf2],
        specs:
            "Designed by Böttcher & Kayser, Nivo is a minimalist wall shelf designed with functionality and aesthetics in mind. Without unnecessary details and clean lines, this collection hangs easily and elegantly on the wall, creating calm and an overview of the things you want to put on the shelf",
        specsRu: "Nivo, разработанная Böttcher & Kayser, представляет собой минималистскую настенную полку, разработанную с учетом функциональности и эстетики. Без лишних деталей и чистых линий эта коллекция легко и элегантно висит на стене, создавая спокойствие и обзор вещей, которые хочется поставить на полку",
        texture: "Wood",
        weight: "10kg",
        size: "60cm x 20cm",
    },
    {
        id: 9,
        category: "furniture",
        img: Img9,
        description: "Cube Lolo Vase Black",
        descriptionRu: "Cube Lolo Чёрная ваза",
        price: 161,
        otherImgs: [Vase1, Vase2],
        specs:
            "Kubus Vase Lolo was originally designed by Søren Lassen in 2014, but was launched in connection with by Lassens 10 year anniversary 2018. The vase is a natural and sought-after extension of the series, which already counts the Kubus candlesticks and Kubus Bowl Bowl. Set it alone or in a still life, fill it with airy, colorful flowers for a feminine look or leave it alone in all its simplicity and precision",
        specsRu: "Ваза Kubus Lolo была первоначально разработана Сёреном Лассеном в 2014 году, но была выпущена в 2018 году в связи с 10-летним юбилеем компании Lassens. Ваза является естественным и востребованным продолжением серии, в которую уже входят подсвечники Kubus и Kubus Bowl Bowl. Установите его отдельно или в натюрморт, наполните его воздушными яркими цветами для создания женственного образа или оставьте его в покое во всей его простоте и точности",
        texture: "Ceramics",
        weight: "12kg",
        size: "45cm x 15cm",
    },
    {
        id: 10,
        category: "furniture chair",

        img: Img10,
        description: "Traditional Armchair",
        descriptionRu: "Традиционное кресло",
        price: 89,
        otherImgs: [ChairBoom1, ChairBoom2],
        specs:
            "Concept: &Tradition's Boomerang lounge chair is a classic Danish design with a modern and minimalist expression. The chair was designed by Hvidt & Mølgaard in 1956, and with its stylish cushions and hand-polished wooden frame, it is an ideal Nordic design that gives a personal mark to the home",
        specsRu: "Концепция: Кресло для отдыха Boomerang от &Tradition — это классический датский дизайн с современным и минималистским выражением. Стул был разработан Hvidt & Mølgaard в 1956 году. Благодаря стильным подушкам и деревянной раме, отполированной вручную, он представляет собой идеальный скандинавский дизайн, придающий индивидуальность дому",
        texture: "Wood",
        weight: "8kg",
        size: "60cm x 40cm",
    },
    {
        id: 11,
        category: "electronics lamp kitchen",
        img: Img11,
        description: "Лампа потолочная черная",
        price: 160,
        otherImgs: [BlackLamp1, BlackLamp2],
        specs:
            "The Here Comes The Sun pendant designed by Bertrand Balas is a quality lamp with a unique and magical look. The Here Comes The Sun series has a fantastic expression and especially swhen turned on it creates a very special atmosphere in the room it hangs in. The lamp fits perfectly above both dining room table, kitchen counter, and as living room lighting",
        specsRu: "Подвеска Here Comes The Sun, разработанная Бертраном Баласом, представляет собой качественную лампу с уникальным и волшебным внешним видом. Серия Here Comes The Sun имеет фантастическую выразительность, и, особенно, когда она включена, она создает особую атмосферу в комнате, в которой она висит. Лампа идеально подходит как для обеденного стола, так и для кухонной стойки, а также для освещения гостиной",
        texture: "Plastic",
        weight: "4kg",
        size: "20cm x 20cm",
    },
    {
        id: 12,
        category: "electronics lamp kitchen",
        img: Img12,
        description: "Simple Golden Lamp",
        descriptionRu: "Простая золотая лампа",
        price: 220,
        otherImgs: [GoldenLamp1, GoldenLamp2],
        specs:
            "Verner Panton Flowerpot, designed in 1968, was originally meant for the hospitality industry and Verner Panton displays and showrooms. The lamp then became popular in private homes, and due to its stylish design and many colour choices, it has made a major comeback in recent years",
        specsRu: "Цветочный горшок Вернера Пантона, разработанный в 1968 году, изначально предназначался для индустрии гостеприимства, а также для витрин и выставочных залов Вернера Пантона. Затем лампа стала популярной в частных домах, а благодаря стильному дизайну и большому выбору цветов в последние годы она снова стала популярной",
        texture: "Plastic",
        weight: "4kg",
        size: "15cm x 15cm",
    },
    {
        id: 13,
        category: "skincare",
        img: Img13,
        description: "Unbleached Cotton Pads 180",
        descriptionRu: "Неотбеленные ватные диски 180",
        price: 33,
        otherImgs: [Cotton1, Cotton2],
        specs:
            "Cotton pads made from soft, unbleached cotton. These are made in Japan and made from 100% cotton.",
        texture: "Cotton",
        weight: "180g",
        size: "20cm x 10cm",
    },
    {
        id: 14,
        category: "furniture chair",
        img: Img14,
        description: "Oak Spanish Chair",
        price: 520,
        otherImgs: [WoodChair1, WoodChair2],
        specs:
            "When talking about Børge Mogensen, The Spanish Chair is probably one of the first designs you would think of, which makes good sense as it is also one of his most recognized products around the world.",
        texture: "Wood",
        weight: "15kg",
        size: "60cm x 30cm",
    },
    {
        id: 15,
        category: "furniture chair",
        img: Img15,
        description: "Copenhagen Armchair",
        price: 330,
        otherImgs: [Copenhagen1, Copenhagen2],
        specs:
            "Concept: The Hyg series by Danish Normann Copenhagen is a series of chairs based on the Danish word Hygge. The designer Simon Legald has tried to embody the meaning of the word around security, warmth and convenience in a furniture series. This is expression in the fine organic shapes and hearty curves that provide a high degree of sitting comfort and well-being in the chairs. ",
        texture: "Wood",
        weight: "14kg",
        size: "65cm x 35cm",
    },
    {
        id: 16,
        category: "electronics lamp",
        img: Img16,
        description: "Anti Dark Light",
        price: 120,
        otherImgs: [Cam1, Cam2],
        specs:
            "Easy Mini W75 from Antidark lives fully up to its name. Simple design, comfortable light, easy to adjust. The Easy Wall Light has made it easy for the user to handle, well, everything! The Easy lamp can turn 360 degrees and be tipped. An ideal lamp that can be placed in connection with other lamps to achieve light in all corners of the room. Furthermore, the lamp can work as a wall light or ceiling",
        texture: "Metal",
        weight: "2kg",
        size: "15cm x 10cm",
    },
    {
        id: 17,
        category: "electronics lamp",
        img: Img17,
        description: "Table Lamp",
        price: 75,
        otherImgs: [TableLamp1, TableLamp2],
        specs:
            "The lamp has also become popular in private homes and has especially made a comeback in recent years. This is not least due to the lamp's stylish design and the many color options that make it fit everywhere.",
        texture: "Metal",
        weight: "5kg",
        size: "25cm x 15cm",
    },
    {
        id: 18,
        category: "electronics lamp",
        img: Img18,
        description: "Mat Black Lamp",
        price: 175,
        otherImgs: [MatLamp1, MatLamp2],
        specs:
            "Unique offer We give you a special discount when you put this product in the basket. *Only applies to specific products.",
        texture: "Metal",
        weight: "6kg",
        size: "20cm x 15cm",
    },
    {
        id: 19,
        category: "furniture chair",
        img: Img19,
        description: "Comfy Chair",
        price: 119,
        otherImgs: [Comfy1, Comfy2],
        specs:
            "Sum is a series designed by the Danish designer Simon Legald, who is the epitome of modern elegance. Elegant and resolute as the tip of a wing, the armrests spread out invitingly, as if they want to embrace you in the armchair's soft, homely space.",
        texture: "Comfy Material",
        weight: "25kg",
        size: "60cm x 30cm",
    },
    {
        id: 20,
        category: "skincare",
        img: Img20,
        description: "Body Oil 50ml",
        price: 45,
        otherImgs: [BodyOil1, BodyOil2],
        specs:
            "Made from 100% plant-based oils with olive oil as the main ingredient, this cleansing oil is gentle on the skin. Free from fragrance, colours and, mineral oils, paraben free, alcohol free, allergy tested (we cannot guarantee that it will not cause allergies in any users) * How to use: Take a small amount in the palm of your hand, and massage into the face to remove make-up and dirt. Rinse well with cold or warm water.",
        texture: "Liquid",
        weight: "50ml",
        size: "10cm x 5cm",
    },
];