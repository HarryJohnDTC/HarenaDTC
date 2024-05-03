function toggleDisplay(event, elementId) {
    const displayStyle = event.type === 'mouseover' ? 'flex' : 'none';
    document.getElementById(elementId).style.display = displayStyle;
}

const buttonSkills = document.getElementById('skills');
buttonSkills.addEventListener('mouseover', function(event) {
    toggleDisplay(event, 'bubbleImages');
});
buttonSkills.addEventListener('mouseout', function(event) {
    toggleDisplay(event, 'bubbleImages');
});

const buttonContact = document.getElementById('contact');
buttonContact.addEventListener('mouseover', function(event) {
    toggleDisplay(event, 'logoContact');
});
buttonContact.addEventListener('mouseout', function(event) {
    toggleDisplay(event, 'logoContact');
});
