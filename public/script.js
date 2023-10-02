document.addEventListener("DOMContentLoaded", () => {
  const addCourseForm = document.getElementById("add-course-form");
  const courseList = document.getElementById("course-list");
  const errorContainer = document.getElementById("error-container");

  const fetchCourses = async () => {
    try {
      const url = "http://localhost:8000/api/courses/";
      const response = await fetch(url);
      const courses = await response.json();
      console.log("courses", courses);
      courseList.innerHTML = "";
      courses.forEach((course) => {
        const li = document.createElement("li");
        li.textContent = `Title:${course.title},Instruction:${course.instructor}. Duration:${course.duration}`;
        // create a delete button'
        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"
        deleteBtn.classList.add("delete-button")
        deleteBtn.dataset.courseId = course._id//data-course-if
        li.appendChild(deleteBtn)
        courseList.appendChild(li)
      });
    } catch (error) {
      console.error("Error fetching courses", error);
    }
  };

  fetchCourses();
});
