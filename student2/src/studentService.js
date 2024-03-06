// StudentListView, StudentEditView 두 컴포넌트에 axios 호출 코드가 있는데
// axios 호출 코드를 studentService.js 파일로 분리

import axios from 'axios';
 
axios.defaults.baseURL = "http://localhost:3000";
 
export async function loadStudents() {
  try {
    const response = await axios.get("/students");
    return response.data;
  } catch (error) {
    alert('조회 에러: ' + (error instanceof Error ? error.message : error));
  }
}
 
export async function loadStudent(id) {
  try {
    const response = await axios.get("/students/" + id);
    return response.data;
  } catch (error) {
    alert('조회 에러: ' + (error instanceof Error ? error.message : error));
  }
}
 
export async function updateStudent(student) {
  try {
    await axios.put("/students/" + student.id, student);
  } catch (error) {
    alert('저장 에러: ' + (error instanceof Error ? error.message : error));
  }
}