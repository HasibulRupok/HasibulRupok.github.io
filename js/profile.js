document.getElementById("educationBtn").addEventListener('click', function () {
    const educationTab = document.getElementById("educationTab");
    if(educationTab.style.display === 'none'){
        document.getElementById("experienceTab").style.display = 'none';
        educationTab.style.display = 'block';

        document.getElementById("experienceBtn").classList.remove('activeExpButton');
        document.getElementById("educationBtn").classList.add('activeExpButton');
    }
    
});

document.getElementById("experienceBtn").addEventListener('click', function () {
    const experienceTab = document.getElementById("experienceTab");
    if(experienceTab.style.display === 'none'){
        document.getElementById("educationTab").style.display = 'none';
        experienceTab.style.display = 'block';

        document.getElementById("educationBtn").classList.remove('activeExpButton');
        document.getElementById("experienceBtn").classList.add('activeExpButton');
    }
    
})