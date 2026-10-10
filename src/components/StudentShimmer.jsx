import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function StudentShimmer() {
  return (
    <div>
      <h2>Student List</h2>

      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Sex</th>
            <th>Course</th>
          </tr>
        </thead>

        <tbody>
          {[1, 2, 3, 4, 5].map((item) => (
            <tr key={item}>
              <td>
                <Skeleton width="80%" />
              </td>
              <td>
                <Skeleton width="90%" />
              </td>
              <td>
                <Skeleton width="50%" />
              </td>
              <td>
                <Skeleton width="70%" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentShimmer;
