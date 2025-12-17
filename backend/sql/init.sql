CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  mssv VARCHAR(20),
  name VARCHAR(100),
  class VARCHAR(50),
  age INT
);

INSERT INTO students (mssv, name, class, age) VALUES
('SV001', 'Nguyễn Văn A', 'D22_TH10', 21),
('SV002', 'Trần Thị B', 'D22_TH10', 22),
('SV003', 'Lê Văn C', 'D22_TH11', 20);
