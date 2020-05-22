let board_list = [
    {
        "id": 1,
        "subject": "제목1",
        "writer": "피카츄",
        "reg_date": "2020-05-20",
        "content": "오늘점심은\n김치찌개\n맛없습니다"
    },
    {
        "id": 2,
        "subject": "제목2",
        "writer": "꼬부기",
        "reg_date": "2020-05-21",
        "content": "오늘점심은\n부대찌개\n또 맛없습니다"
    },
    {
        "id": 3,
        "subject": "제목3",
        "writer": "파이리",
        "reg_date": "2020-05-22",
        "content": "오늘점심은\n순부두찌개\n진짜 맛없습니다"
    },
    {
        "id": 4,
        "subject": "제목4",
        "writer": "또가스",
        "reg_date": "2020-05-23",
        "content": "오늘점심은\n보신탕\n이번엔 맛있습니다."
    }
]



let result1 = a[0].key4.sub2[5].gg
let result2 = result1.key4[0].sub3[5].ff[3].gg // => [1,2,3,4,5]
console.debug(result2)
Object.keys(result1)
// => [ "a", "b" ]
for (let i = 0; i < result2.length; i++) {
    let value = result2[i]
    console.log(i, value)
}
