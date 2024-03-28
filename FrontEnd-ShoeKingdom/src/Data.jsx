const DATA = [
    {
        "id": 1,
        "name": "Zapatillas Nike Air Max",
        "price": 120.99,
        "description": "Zapatillas deportivas para correr con tecnología Air Max de Nike.",
        "stock": 50,
        "offer": 14,
        "scoreAvg": 4.5,
        "status": "available",
        "brand": "Nike",
        "images": [
          "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-nike-air-max-excee-blanco-510010cd4165118-1.jpg",
          "https://nikearprod.vtexassets.com/arquivos/ids/701120/DM9538_001_A_PREM.jpg?v=638233823351200000",
          "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/208b8dca-89f4-4e7c-9657-b39c277e0bdc/calzado-air-max-excee-vl97pm.png"
        ]
      },
      {
        "id": 2,
        "name": "Zapatillas Adidas Ultraboost",
        "price": 139.99,
        "description": "Zapatillas deportivas para correr con tecnología Ultraboost de Adidas.",
        "stock": 30,
        "offer": 26,
        "scoreAvg": 4.8,
        "status": "available",
        "brand": "Adidas",
        "images": [
          "https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/H/Q/HQ6353_0.jpg",
          "https://sevensportio.vtexassets.com/arquivos/ids/278024/GY9353_3.jpg?v=638326532096770000",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ec960dfe508c4aef8decaf89012e2e50_9366/Zapatillas_Ultraboost_Light_Naranja_HQ6341_01_standard.jpg"
        ]
      },
      {
        "id": 3,
        "name": "botines Puma One",
        "price": 89.99,
        "description": "botines de fútbol Puma One, ideales para jugar en césped natural.",
        "stock": 20,
        "offer": 24,
        "scoreAvg": 4.2,
        "status": "available",
        "brand": "Puma",
        "images": [
          "https://acdn.mitiendanube.com/stores/001/998/505/products/53339199-4f6d-4a80-92b7-407875230d111-cca3a9c84365d9799016703426832824-640-0.png",
          "https://www.tradeinn.com/f/13685/136855452/puma-botas-futbol-one-1-synthetic-fg-ag.jpg",
          "https://www.tradeinn.com/f/13735/137358488/puma-botas-futbol-one-20.1-fg-ag.jpg"
        ]
      },
      {
        "id": 4,
        "name": "Zapatillas Reebok Nano",
        "price": 99.99,
        "description": "Zapatillas de entrenamiento Reebok Nano, diseñadas para levantamiento de pesas y entrenamientos funcionales.",
        "stock": 40,
        "offer": 21,
        "scoreAvg": 4.4,
        "status": "available",
        "brand": "Reebok",
        "images": [
          "https://reebokarg.vtexassets.com/arquivos/ids/215406/Imagen-1.jpg?v=638437853723370000",
          "https://reebokarg.vtexassets.com/arquivos/ids/213841/Imagen-1.jpg?v=638432388346070000",
          "https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/vu3xgkpka2ub76lrrdrbgqcqgwfx/c77c2a06864ac9aca38dc5bd9371de015471edcdbf322dfb14411689bf968ae5"
        ]
      },
      {
        "id": 5,
        "name": "Zapatillas Asics Gel Nimbus",
        "price": 149.99,
        "description": "Zapatillas de running Asics Gel Nimbus con amortiguación de gel para una carrera suave y cómoda.",
        "stock": 25,
        "offer": 12,
        "scoreAvg": 4.7,
        "status": "available",
        "brand": "Asics",
        "images": [
          "https://asics.vteximg.com.br/arquivos/ids/193044-700-700/1011b547_004_00.jpg?v=638374788945730000",
          "https://asics.vteximg.com.br/arquivos/ids/178225-1000-1000/1012b201_501_01.jpg?v=637928892964830000",
          "https://marathon.vtexassets.com/arquivos/ids/261507-800-auto?v=638213140466400000&width=800&height=auto&aspect=true"
        ]
      },
      {
        "id": 6,
        "name": "botas Merrell Moab",
        "price": 129.99,
        "description": "botas de senderismo Merrell Moab, impermeables y resistentes para aventuras al aire libre.",
        "stock": 35,
        "offer": 21,
        "scoreAvg": 4.6,
        "status": "available",
        "brand": "Merrell",
        "images": [
          "https://www.peregrinoteca.com/uploads/media/images/bota-merrell-moab-fst-mid-gtx-negro-naranja-11.jpg"
        ]
      },
      {
        "id": 7,
        "name": "Zapatillas New balance Fresh Foam",
        "price": 109.99,
        "description": "Zapatillas de running New balance Fresh Foam con una entresuela suave para una amortiguación superior.",
        "stock": 15,
        "offer": 11,
        "scoreAvg": 4.3,
        "status": "available",
        "brand": "New balance",
        "images": [
          "https://photo3.i-run.fr/new-balance-fresh-foam-1080-v12-m-chaussures-homme-539696-1-sz.jpg"
        ]
      },
      {
        "id": 8,
        "name": "Zapatillas Under Armour HOVR",
        "price": 129.99,
        "description": "Zapatillas de running Under Armour HOVR con tecnología de amortiguación y retorno de energía.",
        "stock": 20,
        "offer": 18,
        "scoreAvg": 4.6,
        "status": "available",
        "brand": "Under Armour",
        "images": [
          "https://www.underarmour.com.ar/on/demandware.static/-/Sites-underarmour_staging/default/dwaccc818e/new_images/3024899/3024899-1.jpeg",
          "https://www.underarmour.com.ar/on/demandware.static/-/Sites-underarmour_staging/default/dwdba7d94e/new_images/3026466/3026466-1.jpeg",
          "https://www.underarmour.com.ar/on/demandware.static/-/Sites-underarmour_staging/default/dwe9cc833c/new_images/3024272/3024272-1.jpeg"
        ]
      },
      {
        "id": 9,
        "name": "botines Nike Tiempo Legend",
        "price": 79.99,
        "description": "botines de fútbol Nike Tiempo Legend con cuero premium para un toque de balón excepcional.",
        "stock": 10,
        "offer": 21,
        "scoreAvg": 4.1,
        "status": "available",
        "brand": "Nike",
        "images": [
          "https://acdn.mitiendanube.com/stores/002/042/897/products/a51-fefd1dae0daa3a75a216786745948568-1024-1024.jpeg",
          "https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/A/T/AT5881-010_0.jpg",
          "https://acdn.mitiendanube.com/stores/002/042/897/products/a51-fefd1dae0daa3a75a216786745948568-1024-1024.jpeg"
        ]
      },
      {
        "id": 10,
        "name": "Zapatillas Salomon Speedcross",
        "price": 139.99,
        "description": "Zapatillas de trail running Salomon Speedcross con agarre agresivo para terrenos difíciles.",
        "stock": 20,
        "offer": 24,
        "scoreAvg": 4.5,
        "status": "available",
        "brand": "Salomon",
        "images": [
          "https://www.ondasports.com.ar/13114-thickbox_default/zapatillas-salomon-speedcross-4-negro.jpg",
          "https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/f0lybfb62dvlk0cppp5bvyira5f7/c77c2a06864ac9aca38dc5bd9371de015471edcdbf322dfb14411689bf968ae5",
          "https://depormania.com.ar/cdn/shop/files/23046_1024x1024.webp?v=1691790460"
        ]
      },
      {
        "id": 11,
        "name": "Zapatillas Mizuno Wave Rider",
        "price": 129.99,
        "description": "Zapatillas de running Mizuno Wave Rider con una combinación perfecta de amortiguación y sujeción.",
        "stock": 30,
        "offer": 18,
        "scoreAvg": 4.4,
        "status": "available",
        "brand": "Mizuno",
        "images": [
          "https://emea.mizuno.com/dw/image/v2/bDbS_PRD/on/demandware.static/-/Sites-masterCatalog_Mizuno/default/dwc68da1cc/SS23/Footwear/SPT%201/SPT4/SH_D1GA331201_00.png?sw=900&sh=900",
          "https://emea.mizuno.com/dw/image/v2/bDbS_PRD/on/demandware.static/-/Sites-masterCatalog_Mizuno/default/dwda2f1458/AW23/sportstyle/SH_D1GA210410_00.png?sw=900&sh=900",
          "https://i1.adis.ws/i/mizunousa/411415_NP4H?w=500&h=500&fmt=jpg&bg=rgb(255,255,255)&img404=404&v=1"
        ]
      },
      {
        "id": 12,
        "name": "Zapatillas brooks Ghost",
        "price": 119.99,
        "description": "Zapatillas de running brooks Ghost con una amortiguación suave y transpirable.",
        "stock": 25,
        "offer": 14,
        "scoreAvg": 4.6,
        "status": "available",
        "brand": "brooks",
        "images": [
          "https://actitudsports.com.ar/wp-content/uploads/2021/04/brooks-ghost-10-840xXx90-1.jpg",
          "https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/b/R/bR1012004-903_0_7.jpg",
          "https://marathon.vtexassets.com/arquivos/ids/425614-800-auto?v=638369138834100000&width=800&height=auto&aspect=true"
        ]
      },
      {
        "id": 13,
        "name": "botas Timberland Chocorua",
        "price": 159.99,
        "description": "botas de senderismo Timberland Chocorua resistentes al agua y duraderas.",
        "stock": 15,
        "offer": 10,
        "scoreAvg": 4.7,
        "status": "available",
        "brand": "Timberland",
        "images": [
          "https://http2.mlstatic.com/D_NQ_NP_990601-MLA71806490209_092023-O.webp",
          "https://m.media-amazon.com/images/I/81KEsb9OnpL.jpg",
          "https://i.pinimg.com/originals/49/ed/9e/49ed9ee0d4842620438a2ae387c438fe.jpg"
        ]
      },
      {
        "id": 14,
        "name": "Zapatillas Skechers Go Run",
        "price": 89.99,
        "description": "Zapatillas de running Skechers Go Run con una entresuela ligera y flexible.",
        "stock": 20,
        "offer": 28,
        "scoreAvg": 4.2,
        "status": "available",
        "brand": "Skechers",
        "images": [
          "https://sporting.vtexassets.com/arquivos/ids/1005275/S3690051-050-1.jpg?v=638374607553470000",
          "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw846a42ad/products/SCH172078bLLM/SCH172078bLLM-1.JPG",
          "https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/2/4/246078-LMbL_0.jpg"
        ]
      },
      {
        "id": 15,
        "name": "Zapatillas Columbia Redmond",
        "price": 109.99,
        "description": "Zapatillas de senderismo Columbia Redmond con una construcción duradera y resistente.",
        "stock": 20,
        "offer": 20,
        "scoreAvg": 4.5,
        "status": "available",
        "brand": "Columbia",
        "images": [
          "https://scandinavianar.vtexassets.com/arquivos/ids/176692-800-auto?v=638271843302800000&width=800&height=auto&aspect=true",
          "https://scandinavianar.vtexassets.com/arquivos/ids/172367-500-auto?v=637986116274530000&width=500&height=auto&aspect=true",
          "https://www.columbia-argentina.com/images/large/columbia-argentina/Calzado%20Columbia%20Hombre%20Redmond%20III%20%203613_ZOOM.jpg"
        ]
      },
      {
        "id": 16,
        "name": "botines Adidas Predator",
        "price": 99.99,
        "description": "botines de fútbol Adidas Predator con tecnología de control de balón.",
        "stock": 25,
        "offer": 14,
        "scoreAvg": 4.4,
        "status": "available",
        "brand": "Adidas",
        "images": [
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1794f4aa7b9847799281cab3c2f3421f_9366/PREDATOR_ACCURACY_FG_blanco_GZ2604_HM1.jpg",
          "https://acdn.mitiendanube.com/stores/824/567/products/imagen_1-465ed8e696ee7b592716979243489376-1024-1024.jpg",
          "https://acdn.mitiendanube.com/stores/002/042/897/products/yyyyyyyyy1-c77ff304a37964923716691496142659-1024-1024.jpeg"
        ]
      },
      {
        "id": 17,
        "name": "Zapatillas Hoka One One Clifton",
        "price": 159.99,
        "description": "Zapatillas de running Hoka One One Clifton con una amortiguación excepcionalmente suave.",
        "stock": 20,
        "offer": 27,
        "scoreAvg": 4.6,
        "status": "available",
        "brand": "Hoka One One",
        "images": [
          "https://www.heavenimagenes.com/heavencommerce/fe67b642-6a12-483e-bcbe-437b9235e1d7/images/v2/HOKA/28433_medium.jpg",
          "https://m.media-amazon.com/images/I/6156VpCsH7L._AC_SY675_.jpg",
          "https://www.heavenimagenes.com/heavencommerce/fe67b642-6a12-483e-bcbe-437b9235e1d7/images/v2/HOKA/28433_medium.jpg"
        ]
      },
      {
        "id": 18,
        "name": "botas Keen Targhee",
        "price": 129.99,
        "description": "botas de senderismo Keen Targhee impermeables y duraderas.",
        "stock": 20,
        "offer": 17,
        "scoreAvg": 4.5,
        "status": "available",
        "brand": "Keen",
        "images": [
          "https://http2.mlstatic.com/D_NQ_NP_758038-MLM31216208471_062019-F.jpg"      
        ]
      },
      {
        "id": 19,
        "name": "Zapatillas Under Armour Charged Assert",
        "price": 99.99,
        "description": "Zapatillas de running Under Armour Charged Assert con amortiguación y soporte.",
        "stock": 30,
        "offer": 18,
        "scoreAvg": 4.3,
        "status": "available",
        "brand": "Under Armour",
        "images": [
          "https://www.flcrooks.com/cdn/shop/products/CHEMUL.jpg?v=1616853910",
          "https://i.pinimg.com/474x/6b/8d/58/6b8d5863464d147f4bf9c7e25d9b5b96.jpg",
          "https://www.keenargentina.com/images/keenargentina/botas%20Keen%20Hombre%20-%20Targhee%20Iii%20Wate%2058.jpg"
        ]
      },
      {
        "id": 20,
        "name": "Zapatillas Puma Ignite",
        "price": 79.99,
        "description": "Zapatillas de running Puma Ignite con entresuela de espuma para mayor comodidad.",
        "stock": 40,
        "offer": 26,
        "scoreAvg": 4.2,
        "status": "available",
        "brand": "Puma",
        "images": [
          "https://www.tradeinn.com/f/13617/136175778/puma-ignite-evoknit.jpg",
          "https://http2.mlstatic.com/D_NQ_NP_689932-MLA44520626913_012021-O.webp",
          "https://www.tradeinn.com/f/13617/136175778/puma-ignite-evoknit.jpg"
        ]
      }
    // {
    //     id : 0,
    //     title : "Show00001",
    //     price : 750,
    //     desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    //     img : "/assets/products/show00001.png"
    // },
    // {
    //     id : 1,
    //     title : "Show00001",
    //     price : 800,
    //     desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    //     img : "/assets/products/show00002.png"
    // },
    // {
    //     id : 2,
    //     title : "Show00001",
    //     price : 950,
    //     desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    //     img : "/assets/products/show00003.png"
    // },
    // {
    //     id : 3,
    //     title : "Show00001",
    //     price : 1050,
    //     desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    //     img : "/assets/products/show00004.png"
    // },
    // {
    //     id : 4,
    //     title : "Show00001",
    //     price : 1150,
    //     desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    //     img : "/assets/products/show00005.png"
    // },
    // {
    //     id : 5,
    //     title : "Show00001",
    //     price : 1250,
    //     desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    //     img : "../assets/products/show00006.png"
    // },
    // // {
    // //     id : 6,
    // //     title : "IPhone 12 Pro Max",
    // //     price : 1250,
    // //     desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    // //     img : "../assets/products/show00007.png"
    // // }
]

export default DATA;