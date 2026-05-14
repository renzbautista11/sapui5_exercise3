//Exercise 3 - Item 6 - Arrays
//6.) Given the data below, output the data(Name and Age) of the person with
//the highest number of skillset. A dynamic code should be created.

// Data
var record = [{
    "Name": "Gibo",
    "Age": 16,
    "SkillSet": [{
        "Skill": "SAP UI5"
    }, {
        "Skill": "SAP HANA"
    }]
}, {
    "Name": "Patrick",
    "Age": 22,
    "SkillSet": [{
        "Skill": "SAP UI5"
    }, {
        "Skill": "SAP HANA"
    }, {
        "Skill": "SAP ABAP"
    }]
}, {
    "Name": "MJ",
    "Age": 24,
    "SkillSet": [{
        "Skill": "SAP HANA"
    }]
}];

// Find the person with the highest number of skills
var highestSkillPerson = record[0];

for (var i = 1; i < record.length; i++) {
    if (record[i].SkillSet.length > highestSkillPerson.SkillSet.length) {
        highestSkillPerson = record[i];
    }
}

console.log("Name: " + highestSkillPerson.Name);
console.log("Age: " + highestSkillPerson.Age);

