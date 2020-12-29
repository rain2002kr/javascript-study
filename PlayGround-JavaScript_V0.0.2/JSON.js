//유용한 사이트
// 1. JSON Diff.com : 서버에서 온 데이터를 비교하는 사이트
// 2. JSON Beautifier : 서버에서 가져온 데이터가 망가진 JSON 을 아름답게 정렬
// 3. JSON Parser : JSON 형태를 오브젝트 형태로 어떻게 표기되어지는지 보여주는 사이트
// 4. JSON Validateor : JSON 데이터가 유효한지 나태 내주는 사이트
// 5. Learning Tools : JSON to CSV .... 많은 유효한 트릭들이 있음.

const log = (m) => console.log(m);
const clr = () => console.clear();
const Person1 = {
  name: "khlee",
  job: "Programmer",
  age: "38",
  birthDate: new Date(),
};

// 1. JSON stringyfy
// OBJECT -> JSON
log(Person1);
log(Person1.birthDate);

log("START JSON stringyfy");
//const json = JSON.stringify(Person1, ["name"]);
const json = JSON.stringify(Person1, (key, value) => {
  //  log("START CallBack in JSON strigify");
  log(`key :${key}, value:${value}`);
  switch (key) {
    case "name":
      return "+" + value;
    default:
      return value;
  }
  //return key === "name" ? value : "";
});
log(json);

// 2. JSON parse
// JSON -> OBJECT
//clr();
log("START JSON parse");
const obj = JSON.parse(json, (key, value) => {
  log("START CallBack in JSON parse");
  log(`key :${key}, value:${value}`);
  switch (key) {
    case "birthDate":
      return new Date(value);
    default:
      return value;
  }
});
log(obj);
log(obj.birthDate);
