
import { handleActions} from 'redux-actions'

import createRequestThunk from '../lib/createRequestThunk'
import * as api from '../lib/api'

const GET_BOARDS ="board/GET_BOARDS";
const GET_BOARDS_SUCCESS ="board/GET_BOARDS_SUCCESS";
//const GET_BOARDS_FAILURE ="board/GET_BOARDS_FAILURE";

const GET_BOARD ="board/GET_BOARD";
const GET_BOARD_SUCCESS ="board/GET_BOARD_SUCCESS";
//const GET_BOARD_FAILURE ="board/GET_BOARD_FAILURE";

const POST_BOARD ="board/POST_BOARD";
const POST_BOARD_SUCCESS ="board/POST_BOARD_SUCCESS";
const POST_BOARD_FAILURE ="board/POST_BOARD_FAILURE";

const DELETE_BOARD ="board/DELETE_BOARD";
const DELETE_BOARD_SUCCESS ="board/DELETE_BOARD_SUCCESS";
const DELETE_BOARD_FAILURE ="board/DELETE_BOARD_FAILURE";

const PUT_BOARD ="board/PUT_BOARD";
const PUT_BOARD_SUCCESS ="board/PUT_BOARD_SUCCESS";
const PUT_BOARD_FAILURE ="board/PUT_BOARD_FAILURE";



const initialState = {
    loading : {
        //GET_BOARDS : false,

        // 단건 조회 추가
        GET_BOARD : false,

        // 생성 추가
        POST_BOARD : false,

        // 삭제 추가
        DELETE_BOARD : false,

        PUT_BOARD : false,
    },
    boards : null,
    board :  null,
};

const board = handleActions(
    {
        // GET 처리(목록)
    
    [GET_BOARDS_SUCCESS]: (state, action) => ({
        ...state,
        // loading:{
        //     ...state.loading,
        //     GET_BOARDS : false
        // },
        boards :action.payload
    }),


    // GET 처리(단건)
    [GET_BOARD_SUCCESS]: (state, action) => ({
        ...state,
        loading:{
            ...state.loading,
            GET_BOARD : false
        },
        //{console.log(action.payload);}
        board :action.payload
    }),



    //POST 처리
    [POST_BOARD_SUCCESS]: (state, action) => ({
        ...state,
        loading:{
            ...state.loading,
            POST_BOARD : false
        }
    }),


    //PUT 처리
    // [PUT_BOARD] : (state, action) => ({
    //     ...state,
    //     loading:{
    //         ...state,
    //         loading:{
    //             ...state.loading,
    //             PUT_BOARD: true
    //         }
    //     }
    // }),
    [PUT_BOARD_SUCCESS]: (state, action) => ({
        ...state,
        loading:{
            ...state.loading,
            PUT_BOARD : false
        }
    }),

    // [PUT_BOARD_FAILURE]: (state, action) => ({
    //     ...state,
    //     loading:{
    //         ...state.loading,
    //         PUT_BOARD : true
    //     }
    // }),






    // 삭제 처리
    // [DELETE_BOARD] : (state, action) => ({
    //     ...state,
    //     loading:{
    //         ...state,
    //         loading:{
    //             ...state.loading,
    //             POST_BOARD: true
    //         }
    //     }
    // }),
    [DELETE_BOARD_SUCCESS]: (state, action) => ({
        ...state,
        loading:{
            ...state.loading,
            POST_BOARD : false
        }
    }),

    // [DELETE_BOARD_FAILURE]: (state, action) => ({
    //     ...state,
    //     loading:{
    //         ...state.loading,
    //         POST_BOARD : true
    //     }
    // })


},
initialState
);

export const getBoards = createRequestThunk(GET_BOARDS , api.getBoards);
// GET_BOARD ACTION 을 넣고 함ㅅ를 넣는다.

// 단건 조회
export const getBoard =  createRequestThunk(GET_BOARD, api.getBoard);
//export const getBoard = (id) =>  createRequestThunk(GET_BOARD, api.getBoard(id));

// 생성
export const postBoard = (params) => createRequestThunk(POST_BOARD, api.postBoard(params));

// 삭제
export const deleteBoard = createRequestThunk(DELETE_BOARD, api.deleteBoard);



export default board;

