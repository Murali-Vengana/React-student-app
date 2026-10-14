import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";

function StudentForm({ onSuccess, mode, student }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      studentName: "",
      email: "",
      sex: "",
      dob: "",
      hobbies: [],
      course: "",
    },
  });

  useEffect(() => {
    if (mode === "edit" && student) {
      reset({
        studentName: student.studentName ?? "",
        email: student.email ?? "",
        sex: student.sex ?? "",
        dob: student.dob ? String(student.dob).substring(0, 10) : "",
        hobbies: student.hobbies ?? [],
        course: student.course ?? "",
      });
    } else {
      reset({
        studentName: "",
        email: "",
        sex: "",
        dob: "",
        hobbies: [],
        course: "",
      });
    }
  }, [mode, student, reset]);

  const onSubmit = (data) => {
    console.log("Form submitted with data:", student);
    if (mode === "edit" && student && student.id) {
      fetch(`http://localhost:9090/student/updateStudent/${student.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => {
        if (response.ok) {
          console.log("Student data submitted successfully");
        } else {
          console.error("Failed to submit student data");
        }
      });
    } else {
      fetch("http://localhost:9090/student/saveStudent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => {
        if (response.ok) {
          console.log("Student data submitted successfully");
        } else {
          console.error("Failed to submit student data");
        }
      });
    }

    onSuccess(); // Call the onSuccess callback to close the modal after successful submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} id="studentForm">
        {/* Student Name */}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="studentName">Student Name:</label>

          <input
            type="text"
            id="studentName"
            {...register("studentName", {
              required: "Student name is required",
            })}
          />

          {errors.studentName && (
            <span style={{ color: "red" }}>{errors.studentName.message}</span>
          )}
        </div>

        {/* Email */}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email">Email:</label>

          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
            })}
          />

          {errors.email && (
            <span style={{ color: "red" }}>{errors.email.message}</span>
          )}
        </div>

        {/* Sex */}
        <div style={{ marginBottom: "15px" }}>
          <label>Sex:</label>

          <div>
            <label>
              <input
                type="radio"
                value="Male"
                {...register("sex", {
                  required: "Please select sex",
                })}
              />
              Male
            </label>

            <label style={{ marginLeft: "15px" }}>
              <input
                type="radio"
                value="Female"
                {...register("sex", {
                  required: "Please select sex",
                })}
              />
              Female
            </label>
          </div>

          {errors.sex && (
            <span style={{ color: "red" }}>{errors.sex.message}</span>
          )}
        </div>

        {/* Date of Birth */}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="dob">Date of Birth:</label>

          <input
            type="date"
            id="dob"
            {...register("dob", {
              required: "Date of birth is required",
            })}
          />

          {errors.dob && (
            <span style={{ color: "red" }}>{errors.dob.message}</span>
          )}
        </div>

        {/* Hobbies */}
        <div style={{ marginBottom: "15px" }}>
          <label>Hobbies:</label>

          <div>
            <label>
              <input
                type="checkbox"
                value="Reading"
                {...register("hobbies", {
                  validate: (value) =>
                    value?.length > 0 || "Please select at least one hobby",
                })}
              />
              Reading
            </label>

            <label style={{ marginLeft: "15px" }}>
              <input
                type="checkbox"
                value="Sports"
                {...register("hobbies", {
                  validate: (value) =>
                    value?.length > 0 || "Please select at least one hobby",
                })}
              />
              Sports
            </label>

            <label style={{ marginLeft: "15px" }}>
              <input
                type="checkbox"
                value="Music"
                {...register("hobbies", {
                  validate: (value) =>
                    value?.length > 0 || "Please select at least one hobby",
                })}
              />
              Music
            </label>

            <label style={{ marginLeft: "15px" }}>
              <input
                type="checkbox"
                value="Travel"
                {...register("hobbies", {
                  validate: (value) =>
                    value?.length > 0 || "Please select at least one hobby",
                })}
              />
              Travel
            </label>
            {errors.hobbies && (
              <span style={{ color: "red" }}>{errors.hobbies.message}</span>
            )}
          </div>
        </div>

        {/* Course */}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="course">Course:</label>

          <select
            id="course"
            {...register("course", {
              required: "Please select a course",
            })}
          >
            <option value="">Select Course</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Information Technology">
              Information Technology
            </option>
            <option value="Electronics">Electronics</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Civil">Civil</option>
          </select>

          {errors.course && (
            <span style={{ color: "red" }}>{errors.course.message}</span>
          )}
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
