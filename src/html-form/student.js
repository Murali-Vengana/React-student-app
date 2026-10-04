function handleSubmit(event) {
  event.preventDefault();
  console.log("name:", event.target.studentName.value);
  const name = event.target.studentName.value;
  if (name === "") {
    document.getElementById("errorStudentName").style.display = "block";
    return;
  } else {
    document.getElementById("errorStudentName").style.display = "none";
  }
  console.log("sex:", event.target.sex.value);
  const sex = event.target.sex.value;
  if (sex === "") {
    document.getElementById("errorSex").style.display = "block";
    return;
  } else {
    document.getElementById("errorSex").style.display = "none";
  }
  console.log("address:", event.target.address.value);
  const address = event.target.address.value;
  if (address === "") {
    document.getElementById("errorAddress").style.display = "block";
    return;
  } else {
    document.getElementById("errorAddress").style.display = "none";
  }
  console.log("course:", event.target.course.value);
  const course = event.target.course.value;
  if (course === "") {
    document.getElementById("errorCourse").style.display = "block";
    return;
  } else {
    document.getElementById("errorCourse").style.display = "none";
  }
  //console.log("hobbies:", event.target.hobby.value);
  // CSS selector targeting only checkboxes with name="hobby" that are currently checked
  const checkedBoxes = document.querySelectorAll('input[name="hobby"]:checked');
  // Extract the 'value' attribute from each checked checkbox into an array
  const selectedHobbies = [];
  checkedBoxes.forEach(function (checkbox) {
    selectedHobbies.push(checkbox.value);
  });
  if (selectedHobbies.length === 0) {
    document.getElementById("errorHobbies").style.display = "block";
    return;
  } else {
    document.getElementById("errorHobbies").style.display = "none";
  }
  console.log("selectedHobbies:", selectedHobbies);
  console.log("dob:", event.target.dob.value);
  const dob = event.target.dob.value;
  if (dob === "") {
    document.getElementById("errorDob").style.display = "block";
    return;
  } else {
    document.getElementById("errorDob").style.display = "none";
  }
}
 
 