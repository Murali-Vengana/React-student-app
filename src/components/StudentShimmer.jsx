import Table from "react-bootstrap/Table";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function StudentShimmer() {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Sex</th>
          <th>Date of Birth</th>
          <th>Hobbies</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        {Array.from({ length: 5 }).map((_, index) => (
          <tr key={index}>
            <td>
              <Skeleton width="120px" />
            </td>
            <td>
              <Skeleton width="160px" />
            </td>
            <td>
              <Skeleton width="60px" />
            </td>
            <td>
              <Skeleton width="100px" />
            </td>
            <td>
              <Skeleton width="130px" />
            </td>

            <td>
              <Skeleton width={20} height={20} />
            </td>

            <td>
              <Skeleton width={20} height={20} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default StudentShimmer;
