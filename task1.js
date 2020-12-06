function setsIntersection(set1, set2) {
  let result = []
  set1.forEach(item=>{
    if(!set2.includes(item)) {
      result.push(item)
    }
  })
  set2.forEach(item=>{
    if(!set1.includes(item)) {
      result.push(item)
    }
  })
  return result;
}

function unique(arr) {
  return Array.from(new Set(arr));
}

function sym(...args) {
  let res = unique(setsIntersection(args[0], args[1]));
  if(args.length === 2) return res;
  let r = res;
  for(let i = 3; i <= args.length; i++){
    r = unique(setsIntersection(r, args[i-1]));
  }
  return r;
}

sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
