import axios from 'axios'

// 목록 불러오기
export const getBoards = () =>
//axios.get(`https://jsonplaceholder.typicode.com/posts/1`);
axios.get(`http://localhost:15919/restApi/testGetBoards`);

// 단건 불러오기
export const getBoard = (bId) =>
axios.get(`http://localhost:15919/restApi/testGetBoard/${bId}`)
//axios.get(`http://localhost:15919/restApi/testGetBoard/583`)

// 생성
export const postBoard = (params) =>
axios.post(`http://localhost:15919/restApi/testPostBoard`,
params
);

// 삭제
export const deleteBoard = (bId) =>
axios.delete(`http://localhost:15919/restApi/testDeleteBoard/${bId}`)


// 수정
export const putBoard = (bId, params) =>
axios.put(`http://localhost:15919/restApi/testPutBoard/${bId}`,
params)