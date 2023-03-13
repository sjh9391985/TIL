let a = [{a: "a2", b: 'b11'}, {a: "a", b: 'b'},{a: 'c', b: 'd'}, {a: "C3", b: "Z1"}]

let b = [{a: 'a', b: 'b'},{a: 'a1', b: 'b1'},{a: 'a2', b: 'b2'},{a: 'c', b: 'b3'}]

let updateRes = []
for(let i = 0; i < a.length; i++){
  for(let j = 0; j < b.length; j++){

    // 업데이트 사용시
    if(a[i].a === b[j].a && a[i].b != b[j].b ){
      updateRes.push(a[i])
    } 

    

  }
}


// 신규건 업데이트시
let bTemp = JSON.stringify(b);
let insertResTemp = a.filter((e) => {
  return !bTemp.includes(JSON.stringify(e))
})

let cTemp = JSON.stringify(updateRes);
let insertRes = insertResTemp.filter((e) => {
  return !cTemp.includes(JSON.stringify(e))
})

console.log(insertRes)
console.log(updateRes)
