//イメージ
//引数＝材料　米、塩
//関数＝調理　米に塩つける、にぎる
//戻り値＝完成品　おにぎりができる

function kansu(hikisu) {
  let total = hikisu + 1;
  return total;
}

const kekka = kansu(2);

console.log(kekka);

//

function test(num1, num2) {
  const total = num1 * num2;
  return total;
}

const kekka2 = test(3, 5);
console.log(kekka2);

//

function calcArea(radius) {
  const area = radius * radius * 3.14;
  return area;
}

//短縮版。同じ結果がでる
// function calcArea(radius){
//   return radius * radius * 3.14;
// }

const area = calcArea(10);

console.log(area);
console.log(calcArea(10));

//
// function calsFee(old) {
//   if (old < 20) {
//     console.log("未成年は利用できません");
//   } else if (old < 35) {
//     console.log("利用料金は2000円です");
//   } else {
//     console.log("利用料金は1000円です");
//   }
// }

// calsFee(18);
// calsFee(30);
// calsFee(40);

//return 文が実行された時点で呼び出し元に戻る。それ以降の処理は実行されない
function calsFee(old) {
  if (old < 20) {
    console.log("未成年は利用できません");
    return;
  }
  if (old < 35) {
    console.log("利用料金は2000円です");
  } else {
    console.log("利用料金は1000円です");
  }
}

calsFee(18);
calsFee(30);
calsFee(40);

function checkAge(age) {
  if (age <= 20) {
    return `あなたは${age}です。お酒を購入できません`;
  } else {
    return `あなたは${age}です。お酒を購入できます`;
  }
}

people = checkAge(18);
console.log(people);
people = checkAge(22);
console.log(people);

//コールバック関数とはなんぞや
//引数の中に別の関数をいれること。ややこし！！！
//あとでなんかしたい。今すぐ処理実行しないで欲しい、あとで実行して欲しい(?)

function keisan(a, b, c) {
  return (a + b) * c;
}

console.log(keisan(2, 3, 2) + 2);

//初期値きめれる
function lateTotal(price, amount, rate = 1.1) {
  return price * amount * rate;
}

console.log(lateTotal(100, 10));
console.log(lateTotal(100, 10, 1.3));

//関数式 constで定義する。ちゃんとしたとこに置かないといけない
//関数宣言 functionからはじまるやつどこにでもおける

//アロー
const double = (num) => {
  return num + 5;
};

console.log(double(2));

const alow = (num, func) => {
  return func(num);
};
console.log(alow(10, double));

//

const cafeMenus = [
  {
    name: "コーヒー",
    price: 350,
  },
  {
    name: "ラテ",
    price: 450,
  },
  {
    name: "モカ",
    price: 550,
  },
];

console.log(cafeMenus);

const takeoutPrice = cafeMenus.map((menu) => {
  return (
    `${menu.name}の値段は` +
    Math.floor(menu.price * 1.08)
      .toString()
      .concat("円")
  );
});

const eatinPrice = cafeMenus.map((menu) => {
  return (
    `${menu.name}の値段は` +
    Math.floor(menu.price * 1.1)
      .toString()
      .concat("円")
  );
});

// const vvv = eatinPrice.map((item) => {
//   return item.split();
// });
// console.log(vvv);

// function cafeRate(price, rate = 1.08) {
//   return price * rate;
// }

// console.log(cafeRate(cafeMenus[2].price));

$("#takeout").on("click", function () {
  $(".takeoutMenu").html(`
  <li class="takeoutitem">${takeoutPrice}です</li>`);
});

console.log(eatinPrice);

$("#eatin").on("click", function () {
  const list = `<li class="eatinitem">${eatinPrice}です</li>`;
  $(".eatinMenu").append(list.split(","));
});
