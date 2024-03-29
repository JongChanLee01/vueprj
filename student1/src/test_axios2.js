import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000';
 
// async와 await는 짝임
// axios1 파일과 다르게 async - awsit으로 더 쉽게 구현함
export async function test1() {
  const response = await axios.get('/students');
  const students = response.data;
  console.log('test1', students);
}

export async function test2() {
  const response = await axios.get('/students');
  const students = response.data;
  const id = students[0].id;
  const student = await axios.get('/students/' + id);
  console.log('test2', student);
}

export async function test3(id) {
  try {
    const response = await axios.get('/students/' + id);
    const student = response.data;
    console.log('test3', student);
  }
  catch (error) {
      console.log('test3', error);
  }
}