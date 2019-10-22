console.log('Hello World')

// ชนิดข้อมูล (Data Type)
// Number, String, Boolean

var id = 3 // Number
var name = 'Artdvp' //String
var ok = true // Boolean

var name2 = `Artdvp id = ${id}` // การทำ String ให้สามารถใส่ตัวแปรหรือ expression (Template literals) ครอบด้วย `...`

// Array, Object, Function
// Object
/*
var Object = {
    key: 'value'
}
*/
var student = {
    code : '001',
    name : 'Artdvp'
}

// แสดงค่า
console.log(student.code) // 001
console.log(student[name]) // Artdvp
// เพิ่ม key ใหม่
student['age'] = 25
// ลบ key
delete student.age

