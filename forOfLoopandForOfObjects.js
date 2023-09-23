//practice of for of loop and for of Objects:

//normal loop:
const students=['Atefeh','David','Wendy']

for (let i=0;i<students.length;i++){
    console.log(students[i])
}

//////////////////
console.log('------------------------------')
//For of Loops: much neater and much easie:
for(let student of students){
    console.log(student)
}
//////////////////
console.log('------------------------------')

//For of Objects:

const employee1={
    name:'Ati',
    dept:'Engineering',
    salary:10000,
}

// for(let key of employee1){
//     console.log(employee1(key))// not itterable!!!!
// }


//Log out justkeys:
console.log(Object.keys(employee1))//[ 'name', 'dept', 'salary' ]

//Log out only value:
console.log(Object.values(employee1))//[ 'Ati', 'Engineering', 10000 ]

//Log out keys and values:
console.log(Object.entries(employee1))//[ [ 'name', 'Ati' ], [ 'dept', 'Engineering' ], [ 'salary', 10000 ] ]

//Loop over the information in an Object to get access to each pice of inofrmation as String:

for(let key of Object.keys(employee1)){
    console.log(key+' : '+employee1[key])//name : Ati
                                        //dept : Engineering
                                        //salary : 10000
}