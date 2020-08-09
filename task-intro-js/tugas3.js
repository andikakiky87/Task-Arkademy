function printSegitiga(num){
    for (i = num; i >= 1; i--) {
        let kos = ''
        for(s=1; s<=i;s++){
            kos+=s
        }
        console.log(kos)
    }
}

printSegitiga(5)


