// Создать объект «Товар» включающий:
// - свойства, такие как фото, артикул,
// описание и т.п.;
// - метод, которому при вызове передается
// id пустого div элемента и в этот html
// элемент данный метод создаст и внесёт
// все необходимые html элементы, стили,
// и содержание для отображения
// всей информации хранящихся в свойствах
// объекта о данном товаре. Дизайн оформления
// информации в html о товаре –
// это ваше творчество.

let item = {
  name: "Мобильный linux server Ocean",
  pic: "ocean.jpg",
  article: "007",
  description: "Портативный мини ПК Ocean использует ПО Node.js",
  method: function (id) {
    let node = document.getElementById(id);
    node.style = "background-image: url("+this.pic+");border: 2px solid black; width: 448px;height:270px;margin: auto";
    node.innerHTML = '<div class="name" style="text-align:center;margin: 10px auto;color: teal; font-size: 1.5em">'+this.name+'</div><div class="article" style="text-align:right;margin: 20px 30px;color: teal; font-size: 1em">Артикул: '+this.article+'</div><div class="description" style="width: 150px;margin: 120px 30px;color: teal; font-size: 1em">'+this.description+'</div>';
    // document.body.innerHTML = "<style>#"+id+" {width:50px;height:50px;border:2px solid black;background:green;}</style>";
  }
};
item.method('div');
