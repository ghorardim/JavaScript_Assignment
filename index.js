/* 


 Name: Abdullah Al Mahmud (Jabir)


*/

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
class DeveloperForm {
    constructor() {
        this.developerName = '';
        this.developerInterest = '';
        this.developerSkills = [];
        this.developerSkillsDetails = '';
        this.init();
    }
    init() {
        document.getElementById(DEVNAME_ID).disabled = false;
        document.getElementById(DETAILS_ID).disabled = false;
        document.getElementById(SUBMIT_BTN_ID).value = 'Submit';
        document.getElementById(RESET_BTN_ID).value = 'Reset';
        document.getElementById(DETAILS_ID).value = '';
        document.getElementById(INTEREST_ID).innerHTML = INTERESTAREA;
        this.name = '';
        this.developerSkills = [];
        let interestCheck = document.getElementById(FRONTEND_ID);
        interestCheck.checked = true;
        this.interest = 'Frontend';
        this.details = '';

    }

    edit(inrest, devSkills) {
        document.getElementById(DEVNAME_ID).disabled = false;
        document.getElementById(DETAILS_ID).disabled = false;
        document.getElementById(SUBMIT_BTN_ID).value = 'Submit';
        document.getElementById(RESET_BTN_ID).value = 'Reset';
        console.log(inrest, devSkills);
        document.getElementById(INTEREST_ID).innerHTML = INTERESTAREA;
        let el = document.getElementById(INTEREST_ID);
        let selects = el.getElementsByTagName('input');
        let len = selects.length;
        for (let i = 0; i < len; i++) {
            if (selects[i].type === 'checkbox' && selects[i].name == inrest) {
                selects[i].checked = true;
                break;
            }
        }
        this.interest = inrest;
        el = document.getElementById(SKILLS_ID);
        selects = el.getElementsByTagName('input');
        this.developerSkills = [];
        for (let i = 0; i < len; i++) {
            if (selects[i].type === 'checkbox' && devSkills.includes(selects[i].name)) {
                selects[i].checked = true;
            }
        }
        
    }

    set name(arg) {
        let nameField = document.getElementById(DEVNAME_ID);
        nameField.value = arg;
        this.developerName = arg;
    }

    get name() {
        let nameField = document.getElementById(DEVNAME_ID);
        this.developerName = nameField.value;

        if (this.developerName == '') {
            alert('Name field empty');
        }
        return this.developerName;
    }

    set interest(interest) {
        this.developerInterest = '';
        let el = document.getElementById(MAIN_DIV_ID);
        let selects = el.getElementsByTagName('input');mainDivID
        let len = selects.length;
        for (let i = 0; i < len; i++) {
            if (selects[i].type === 'checkbox' && selects[i].name != interest) {
                selects[i].checked = false;
            }
            if (selects[i].type === 'checkbox' && selects[i].name == interest && selects[i].checked == true) {
                this.developerInterest = interest;
            }
        }
        if (interest === 'Frontend') this.skills = FRONTEDDSKILLS;
        else if (interest === 'Backend') this.skills = BACKENDSKILLS;
        else if (interest === 'Mobile') this.skills = MOBILESKILLS;
        else if (interest === 'Desktop') this.skills = DESKTOPSKILLS;
        else if (interest === 'Game') this.skills = GAMESKILLS;
    }

    get interest() {
        if(this.developerInterest == ''){
            alert('Select your interested area');
        }
        return this.developerInterest;
    }

    set skills(skills) {
        var mySkill = [];
        mySkill = skills;
        var skillsCheck = [];
        for (var i = 0; i < mySkill.length; i++) {
            var skill = `<label> <input type="checkbox" name="${mySkill[i]}" value="${mySkill[i]}"  /> ${mySkill[i]}</label>&nbsp;`;
            skillsCheck.push(skill);
        }
        document.getElementById("skills").innerHTML = skillsCheck.join(" ");
    }
    get skills() {
        let el = document.getElementById(SKILLS_ID);
        let selects = el.getElementsByTagName('input');
        let len = selects.length;
        for (let i = 0; i < len; i++) {
            if (selects[i].type === 'checkbox' && selects[i].checked == true) {
                this.developerSkills.push(selects[i].name);
            }
        }
        if (this.developerSkills.length == 0) {
            alert('Choose skills');
        }
        return this.developerSkills;
    }
    set details(arg) {
        let detailsField = document.getElementById(DETAILS_ID);
        detailsField.value = arg;
        this.developerSkillsDetails = arg;
    }
    get details() {
        let detailsField = document.getElementById(DETAILS_ID);
        this.developerSkillsDetails = detailsField.value;
        if (this.developerSkillsDetails == '') {
            alert('Enter short details about skills');
        }
        return this.developerSkillsDetails;
    }

}


const form = new DeveloperForm();

function handleInterest(arg) {
    form.interest = arg;
}

function handleReset() {
    if (isSubmitStage) {
        isSubmitStage = false;
        form.edit(form.interest, form.skills);
    } else {
        form.init();
    }

}

function handleSubmit() {
    if (isSubmitStage == true) {
        form.init();
        isSubmitStage = false;
        alert('Congratulation! Submit Successful.')
        return;
    }
    let name = form.name;
    let interest = form.interest;
    let skills = form.skills;
    let details = form.details;
    console.log(name,interest,skills,details);
    if (name != '' && skills.length != 0 && details != '' && interest != '') {
        document.getElementById(DEVNAME_ID).disabled = true;
        document.getElementById(INTEREST_ID).innerHTML = `<label>${interest}</label>`;
        document.getElementById(SKILLS_ID).innerHTML = `<label>${skills.join(", ")}</label>`;
        document.getElementById(DETAILS_ID).disabled = true;
        document.getElementById(SUBMIT_BTN_ID).value = 'Confirm';
        document.getElementById(RESET_BTN_ID).value = 'Edit';
        isSubmitStage = true;
    }
}