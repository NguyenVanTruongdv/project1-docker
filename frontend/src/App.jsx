import { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/students")
      .then(res => {
        if (!res.ok) {
          throw new Error("API error: " + res.status);
        }
        return res.json();
      })
      .then(data => {
        setStudents(data);
      })
      .catch(err => {
        console.error(err);
        setError("Không lấy được dữ liệu từ backend");
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>📚 Danh sách sinh viên</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>MSSV</th>
            <th>Họ tên</th>
            <th>Lớp</th>
            <th>Tuổi</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                Không có dữ liệu
              </td>
            </tr>
          ) : (
            students.map(sv => (
              <tr key={sv.id}>
                <td>{sv.id}</td>
                <td>{sv.mssv}</td>
                <td>{sv.name}</td>
                <td>{sv.class}</td>
                <td>{sv.age}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
