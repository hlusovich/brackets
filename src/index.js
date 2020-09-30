module.exports = function check(str, bracketsConfig) {
    let chechArr =[];
    let brack =str.split('');
    let toggle = 0;
    let toggle7 = 0;
    let toggle8 = 0;
    for (let i of brack){
        if(i===")"){
            if(chechArr[chechArr.length-1]==="("){
                chechArr.pop();
                continue
            } ;
            return false
        }
        if(i==="}"){
            if(chechArr[chechArr.length-1]==="{"){
                chechArr.pop();
                continue
            } ;
            return false
        }
        if(i==="]"){
            if(chechArr[chechArr.length-1]==="["){
                chechArr.pop()
                continue
            } ;
            return false
        }
        if(i==="|"&&toggle===1){
            debugger
            if(chechArr[chechArr.length-1]==="|"){

                console.log(chechArr)
                chechArr.pop()
                toggle--
                continue
            }
            return false

        }
        if(i==="2"){
            if(chechArr[chechArr.length-1]==="1"){
                chechArr.pop()
                continue
            } ;
            return false
        }
        if(i==="4"){
            if(chechArr[chechArr.length-1]==="3"){
                chechArr.pop()
                continue
            } ;
            return false
        }
        if(i==="6"){
            if(chechArr[chechArr.length-1]==="5"){
                chechArr.pop()
                continue
            } ;
            return false
        }
        if(i==="7"&&toggle7===1){
            debugger
            if(chechArr[chechArr.length-1]==="7"){

                chechArr.pop()
                toggle7--
                continue
            }
            return false

        }
        if(i==="8"&&toggle8===1){
            debugger
            if(chechArr[chechArr.length-1]==="8"){

                chechArr.pop()
                toggle8--
                continue
            }
            return false

        }
        console.log(chechArr)
        if(i==="7") {toggle7++}
        if(i==="8") {toggle8++}
        if(i==="|") {toggle++}
        chechArr.push(i)
    }
    console.log(chechArr)
    return  chechArr.length?false:true
}
