    const express = require('express')
    const app = express() 
    
    app.use(express.json())

    const gender = [
        {
            id: 1,
            title: "Nam"
        },
        {
            id: 2,
            title: "Nữ"
        }
    ]

const apperance = [
    {
        id: 1,
        title: "Hình thang ngược nam"
    },
    {
        id: 2,
        title: "Tam giác thuận nam"},
    {
        id: 3,
        title: "Tam giác ngược nam"},
    {
        id: 4,
        title: "Hình chữ nhật nam"},
    {
        id: 5,
        title: "Dáng oval nam"},
    {
        id: 6,
        title: "Đồng hồ cát nữ"},
    {
        id: 7,
        title: "Quả lê nữ"},
    {
        id: 8,
        title: "Tam giác ngược nữ"},
    {
        id: 9,
        title: "Hình chữ nhật nữ"},
    {
        id: 10,
        title: "Quả táo nữ"},
]

const skintone = [
    {
        id: 1,
        title: "Da lạnh"
    },
    {
        id: 2,
        title: "Da trung tính"},
    {
        id: 3,
        title: "Da ấm"},
]

const longleg = [
    {
        id: 1,
        title: "Chân ngắn"
    },
    {
        id: 2,
        title: "Chân vừa"
    },
    {    
        id: 3,
        title: "Chân dài"}
]

const BMI = [
    {
        id: 1,
        title: "Thiếu cân"
    },
    {
        id: 2,
        title: "Bình thường"},
    {
        id: 3,
        title: "Thừa cân"},
    {
        id: 4,
        title: "Béo phì"}
]
const result= [];

for (let i = 0; i < apperance.length; i++) {
    for (let j = 0; j < skintone.length; j++) {
        for (let k = 0; k < longleg.length; k++) {
            for (let l = 0; l < BMI.length; l++) {             
            result.push({
                id: apperance[i].id * 1000000 + skintone[j].id * 10000 + longleg[k].id * 100 + BMI[l].id,
                title: apperance[i].title + " , " + skintone[j].title + " , " + longleg[k].title + " , " + BMI[l].title
            })
            }
        }
    }
}

app.post('/data', (req, res) => {
    const data = req.body;
    idGender = data.idGender;
    if (idGender == 1)
        idApperance = data.idApperance;
    else
        idApperance = data.idApperance + 5;
    idSkintone = data.idSkintone;
    idLongleg = data.idLongleg;
    idBMI = data.idBMI;
    id = idApperance * 1000000 + idSkintone * 10000 + idLongleg * 100 + idBMI;
    result2 = result.find((result) => result.id === id);
    res.json(result2);
})


app.listen(3000)

