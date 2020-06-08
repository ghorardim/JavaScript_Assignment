const BACKENDSKILLS = ['Java', 'C#', 'Python', 'Php'];
const FRONTEDDSKILLS = ['React', 'Vue', 'Angular', 'HTML & CSS'];
const MOBILESKILLS = ['Android', 'IOS', 'Flutter', 'React Native'];
const DESKTOPSKILLS = ['WinForms', 'Cocoa', 'Electron', 'Swing'];
const GAMESKILLS = ['Unity', 'GDevelop', 'Unreal Engine', 'Delta Engine', 'Buildbox', 'CRYENGINE'];

const DEVNAME_ID = 'devNameID';
const DETAILS_ID = 'detailsID';
const SUBMIT_BTN_ID = 'submitBtnID';
const RESET_BTN_ID = 'resetBtnID';
const INTEREST_ID = 'interestID';
const FRONTEND_ID = 'frontEndID';
const MAIN_DIV_ID = 'mainDivID';
const SKILLS_ID = 'skills';

const INTERESTAREA = `<label><input type="checkbox" name="Frontend" value="Frontend" id="frontEndID"
onclick="handleInterest.call(this,'Frontend')" />
Web Frontend</label><br><br>
<label><input type="checkbox" name="Backend" value="Backend"
onclick="handleInterest.call(this,'Backend')" />
Web Backend</label><br><br>
<label><input type="checkbox" name="Mobile" value="Mobile"
onclick="handleInterest.call(this,'Mobile')" />
Mobile App</label><br><br>
<label><input type="checkbox" name="Desktop" value="Desktop"
onclick="handleInterest.call(this,'Desktop')" />
Desktop App</label><br><br>
<label><input type="checkbox" name="Game" value="Game"
onclick="handleInterest.call(this,'Game')" />
Game Development</label><br><br>`;

let isSubmitStage = false;
let skills = FRONTEDDSKILLS;


function createInheritance(child, parent){
    child.prototype = Object.create(parent.prototype);
}
    
function Data(info){
    this._info = info;
}
Data.prototype.getInfo = function(){
    let nameField = document.getElementById(DEVNAME_ID);
    return nameField.value;
}

function InterestData(info,interest){
    Data.call(this,info);
    this._interest = interest;
}

createInheritance(InterestData,Data);

InterestData.prototype.createInterestArea = function(){
    document.getElementById(INTEREST_ID).innerHTML = INTERESTAREA;
}

InterestData.prototype.selectInterestArea = function(interest){
        let el = document.getElementById(MAIN_DIV_ID);
        let selects = el.getElementsByTagName('input');
        let len = selects.length;
        for (let i = 0; i < len; i++) {
            if (selects[i].type === 'checkbox' && selects[i].name != interest) {
                selects[i].checked = false;
            }
            if (selects[i].type === 'checkbox' && selects[i].name == interest ) {
                selects[i].checked = true
            }
        }
        if (interest === 'Frontend') skills = FRONTEDDSKILLS;
        else if (interest === 'Backend') skills = BACKENDSKILLS;
        else if (interest === 'Mobile') skills = MOBILESKILLS;
        else if (interest === 'Desktop') skills = DESKTOPSKILLS;
        else if (interest === 'Game') skills = GAMESKILLS;
}

function SkillData(info){
    Data.call(this,info);
}
createInheritance(SkillData,Data);


SkillData.prototype.createSkillList = function(skills){
    var mySkill = [];
        mySkill = skills;
        var skillsCheck = [];
        for (var i = 0; i < mySkill.length; i++) {
            var skill = `<label> <input type="checkbox" name="${mySkill[i]}" value="${mySkill[i]}"  /> ${mySkill[i]}</label>&nbsp;`;
            skillsCheck.push(skill);
        }
        document.getElementById("skills").innerHTML = skillsCheck.join(" ");
}

var interestData = new InterestData();
interestData.createInterestArea();
interestData.selectInterestArea('Frontend');

var skillData = new SkillData();
skillData.createSkillList(skills);
function handleInterest(arg) {
    interestData.selectInterestArea(arg);
    skillData.createSkillList(skills);
}
var data = new Data();


function handleSubmit() {
    console.log(data.getInfo());
}